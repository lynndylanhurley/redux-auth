import Auth from "j-toker";
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

export function configure(config) {
  return dispatch => {
    dispatch(authenticateStart());

    let promise;

    console.log("calling configure");

    if (config.isServer) {
      // this is a server side validation. don't actually run configure
      console.log("verifying auth", config);
      promise = verifyAuth(config)
        .then(({user, newHeaders}) => {
          console.log("got new headers");
          dispatch(ssAuthTokenUpdate(newHeaders));
          return user;
        });
    } else {
      // if the authentication happened server-side, find the resulting auth
      // credentials that were injected into the dom.
      let tokenBridge = document.getElementById("token-bridge");
      if (tokenBridge) {
        let rawServerCreds = tokenBridge.innerHTML;
        if (rawServerCreds) {
          let serverCreds = JSON.parse(rawServerCreds);

          // sync client dom to prevent React "out of sync" error
          dispatch(authenticateComplete(serverCreds.user));
          dispatch(ssAuthTokenUpdate(serverCreds.headers));

          // instruct j-token to NOT send initial validation request, but to
          // instead use the credentials that were sent back by the server.
          config.initialCredentials = serverCreds;
        }
      }

      promise = Promise.resolve(Auth.configure(config));
    }

    console.log("promise", promise);

    return promise
      .then((user) => {
        console.log("@-->auth complete", user);
        dispatch(authenticateComplete(user));
        if (Auth.firstTimeLogin) {
          dispatch(showFirstTimeLoginSuccessModal());
        }

        if (Auth.mustResetPassword) {
          dispatch(showPasswordResetSuccessModal());
        }
      })
      .catch(({reason}) => {
        console.log("rejecting config bc", reason);
        if (Auth.firstTimeLogin) {
          dispatch(showFirstTimeLoginErrorModal());
        }

        if (Auth.mustResetPassword) {
          dispatch(showPasswordResetErrorModal());
        }

        dispatch(authenticateError([reason]));
      });
  };
}
