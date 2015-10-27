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
import {applyConfig} from "../utils/client-settings";
import {destroySession} from "../utils/session-storage";
import verifyAuth from "../utils/verify-auth";
import getRedirectInfo from "../utils/parse-url";
import {pushState} from "redux-router";

export function configure(endpoint={}, settings={}) {
  return dispatch => {
    console.log("running config", endpoint, settings);
    // don't render anything for OAuth redirects
    if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
      return Promise.resolve({blank: true});
    }

    dispatch(authenticateStart());

    let promise,
        firstTimeLogin,
        mustResetPassword,
        user,
        headers;

    if (settings.isServer) {
      console.log("running server config");
      // this is a server side validation. don't actually run Auth.configure
      promise = verifyAuth(endpoint, settings)
        .then(({user, newHeaders, firstTimeLogin, mustResetPassword}) => {
          console.log("got user", user);
          dispatch(ssAuthTokenUpdate({headers: newHeaders, firstTimeLogin, mustResetPassword}));
          return user;
        }).catch(({reason, firstTimeLogin, mustResetPassword}) => {
          console.log("failed auth");
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

          if (user) {
            dispatch(authenticateComplete(user));

            // instruct j-token to NOT send initial validation request, but to
            // instead use the credentials that were sent back by the server.
           settings.initialCredentials = serverCreds;
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
        settings.initialCredentials = extend({}, settings.initialCredentials, authRedirectHeaders);
      }

      // if tokens were invalidated by server, make sure to clear browser
      // credentials
      if (!settings.initialCredentials) {
        destroySession();
      }

      promise = Promise.resolve(applyConfig({endpoint, settings}));
    }

    return promise
      .then(user => {
        dispatch(authenticateComplete(user));

        if (firstTimeLogin) {
          dispatch(showFirstTimeLoginSuccessModal());
        }

        if (mustResetPassword) {
          dispatch(showPasswordResetSuccessModal());
        }

        return user;
      })
      .catch(({reason}) => {
        dispatch(authenticateError([reason]));

        if (firstTimeLogin) {
          dispatch(showFirstTimeLoginErrorModal());
        }

        if (mustResetPassword) {
          dispatch(showPasswordResetErrorModal());
        }

        console.log("@-->failed auth", reason);

        return Promise.resolve({reason});
      });
  };
}
