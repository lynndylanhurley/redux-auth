import extend from "extend";
import * as C from "../utils/constants";
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
import {push} from "react-router-redux";

export const SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";
export const STORE_CURRENT_ENDPOINT_KEY = "STORE_CURRENT_ENDPOINT_KEY";
export function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
  return { type: SET_ENDPOINT_KEYS, endpoints, currentEndpointKey, defaultEndpointKey };
};
export function storeCurrentEndpointKey(currentEndpointKey) {
  return { type: STORE_CURRENT_ENDPOINT_KEY, currentEndpointKey };
};

export function configure(endpoint={}, settings={}) {
  return dispatch => {
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
      promise = verifyAuth(endpoint, settings)
        .then(({
          user,
          headers,
          firstTimeLogin,
          mustResetPassword,
          currentEndpoint,
          currentEndpointKey,
          defaultEndpointKey
        }) => {
          dispatch(ssAuthTokenUpdate({
            headers,
            user,
            firstTimeLogin,
            mustResetPassword
          }));

          dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));

          return user;
        }).catch(({
          reason,
          firstTimeLogin,
          mustResetPassword,
          currentEndpoint,
          defaultEndpointKey
        }) => {
          dispatch(ssAuthTokenUpdate({firstTimeLogin, mustResetPassword}));
          dispatch(setEndpointKeys(Object.keys(currentEndpoint || {}), null, defaultEndpointKey));
          return Promise.reject({reason});
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

            // do NOT send initial validation request.
            // instead use the credentials that were sent back by the server.
            settings.initialCredentials = serverCreds;
          }

          // sync client dom to prevent React "out of sync" error
          dispatch(ssAuthTokenUpdate({
            user,
            headers,
            mustResetPassword,
            firstTimeLogin
          }));
        }
      }

      let {authRedirectPath, authRedirectHeaders} = getRedirectInfo(window.location);

      if (authRedirectPath) {
        dispatch(push({pathname: authRedirectPath}));
      }

      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
        settings.initialCredentials = extend({}, settings.initialCredentials, authRedirectHeaders);
      }

      // if tokens were invalidated by server or from the settings, make sure
      // to clear browser credentials
      if (!settings.clientOnly && !settings.initialCredentials || settings.cleanSession) {
        destroySession();
      }

      promise = Promise.resolve(applyConfig({dispatch, endpoint, settings}));
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
      .catch(({reason} = {}) => {
        dispatch(authenticateError([reason]));

        if (firstTimeLogin) {
          dispatch(showFirstTimeLoginErrorModal());
        }

        if (mustResetPassword) {
          dispatch(showPasswordResetErrorModal());
        }

        return Promise.resolve({reason});
      });
  };
}
