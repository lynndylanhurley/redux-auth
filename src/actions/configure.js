import extend from "extend";
import * as C from "../utils/constants";
import {
  authenticateStart,
  authenticateComplete,
  authenticateError
} from "./authenticate";
import {applyConfig} from "../utils/client-settings";
import {destroySession} from "../utils/session-storage";
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

    let {authRedirectPath, authRedirectHeaders} = getRedirectInfo(window.location);

    if (authRedirectPath) {
      dispatch(push({pathname: authRedirectPath}));
    }

    if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["sky_token"]) {
      settings.initialCredentials = extend({}, settings.initialCredentials, authRedirectHeaders);
    }

    // if tokens were invalidated by server, make sure to clear browser
    // credentials
    if (!settings.initialCredentials) {
      destroySession();
    }

    if (localStorage.skyToken) {
      settings.initialCredentials = {headers: {}};
      settings.initialCredentials.headers["X-Sky-Token"] = localStorage.skyToken
      settings.initialCredentials.headers["X-Sky-Email"] = localStorage.skyEmail
      settings.initialCredentials.currentEndpointKey = localStorage.currentConfigName
    }
    promise = Promise.resolve(applyConfig({dispatch, endpoint, settings}));

    return promise
      .then(user => {
        dispatch(authenticateComplete(user));

        return user;
      })
      .catch(({reason} = {}) => {
        dispatch(authenticateError([reason]));

        return Promise.resolve({reason});
      });
  };
}
