import Auth from "j-toker";
import extend from "extend";
import {
  authenticateStart,
  authenticateComplete,
  authenticateError
} from "./authenticate";
import {
  showFirstTimeLoginSuccessModal,
  showFirstTimeLoginErrorModal,
  showPasswordResetSuccessModal,
  showPasswordResetErrorModal
} from "./ui";
import {ssAuthTokenUpdate} from "./server";
import verifyAuth from "../utils/verify-auth";
import getRedirectInfo from "../utils/parse-url";
import {pushState} from "redux-router";

export function configure(config) {
  return dispatch => {
    dispatch(authenticateStart());

    let promise,
        firstTimeLogin,
        mustResetPassword,
        user,
        headers;

    if (config.isServer) {
      // this is a server side validation. don't actually run Auth.configure
      promise = verifyAuth(config)
        .then(({user, newHeaders, firstTimeLogin, mustResetPassword}) => {
          dispatch(ssAuthTokenUpdate({headers: newHeaders, firstTimeLogin, mustResetPassword}));
          return user;
        }).catch(({reason, firstTimeLogin, mustResetPassword}) => {
          dispatch(ssAuthTokenUpdate({firstTimeLogin, mustResetPassword}));
          return Promise.reject(reason);
        });
    } else {
      // if the authentication happened server-side, find the resulting auth
      // credentials that were injected into the dom.
      let tokenBridge = document.getElementById("token-bridge");

      if (tokenBridge) {
        let rawServerCreds = tokenBridge.innerHTML;
        if (rawServerCreds) {
          let serverCreds = JSON.parse(rawServerCreds);

          ({headers, user, firstTimeLogin, mustResetPassword} = serverCreds);

          console.log("@-->server creds", serverCreds);

          if (user) {
            dispatch(authenticateComplete(user));

            // instruct j-token to NOT send initial validation request, but to
            // instead use the credentials that were sent back by the server.
            config.initialCredentials = serverCreds;
          }

          // sync client dom to prevent React "out of sync" error
          dispatch(ssAuthTokenUpdate({
            headers,
            mustResetPassword,
            firstTimeLogin
          }));
        }
      }

      let {authRedirectPath, authRedirectHeaders} = getRedirectInfo(window.location);

      if (authRedirectPath) {
        dispatch(pushState(null, authRedirectPath));
      }

      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
        config.initialCredentials = extend({}, config.initialCredentials, authRedirectHeaders);
      }

      // if tokens were invalidated by server, make sure to clear browser
      // credentials
      if (!config.initialCredentials) {
        Auth.destroySession();
      }

      promise = Promise.resolve(Auth.configure(config));
    }

    return promise
      .then(user => {
        console.log("returning user", user);
        dispatch(authenticateComplete(user));

        if (firstTimeLogin) {
          dispatch(showFirstTimeLoginSuccessModal());
        }

        if (mustResetPassword) {
          dispatch(showPasswordResetSuccessModal());
        }

        return user;
      })
      .catch(err => {
        console.log("returning without user", err);
        dispatch(authenticateError([err.reason]));

        if (firstTimeLogin) {
          dispatch(showFirstTimeLoginErrorModal());
        }

        if (mustResetPassword) {
          dispatch(showPasswordResetErrorModal());
        }

        return Promise.resolve(err);
      });
  };
}
