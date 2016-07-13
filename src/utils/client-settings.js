import * as C from "./constants";
import extend from "extend";
import fetch from "./fetch";
import parseEndpointConfig from "./parse-endpoint-config";
import {setEndpointKeys} from "../actions/configure";
import {
  getApiUrl,
  getCurrentSettings,
  setCurrentSettings,
  getInitialEndpointKey,
  setDefaultEndpointKey,
  setCurrentEndpoint,
  setCurrentEndpointKey,
  removeData,
  retrieveData,
  persistData
} from "./session-storage";

// can't use "window" with node app
var root = Function("return this")() || (42, eval)("this");

const defaultSettings = {
  proxyIf:            function() { return false; },
  proxyUrl:           "/proxy",
  forceHardRedirect:  false,
  storage:            "cookies",
  cookieExpiry:       14,
  cookiePath:         "/",
  initialCredentials: null,

  passwordResetSuccessUrl: function() {
    return root.location.href;
  },

  confirmationSuccessUrl:  function() {
    return root.location.href;
  },

  tokenFormat: {
    "access-token": "{{ access-token }}",
    "token-type":   "Bearer",
    client:         "{{ client }}",
    expiry:         "{{ expiry }}",
    uid:            "{{ uid }}"
  },

  parseExpiry: function(headers){
    // convert from ruby time (seconds) to js time (millis)
    return (parseInt(headers["expiry"], 10) * 1000) || null;
  },

  handleLoginResponse: function(resp) {
    return resp.data;
  },

  handleAccountUpdateResponse: function(resp) {
    return resp.data;
  },

  handleTokenValidationResponse: function(resp) {
    return resp.data;
  }
};

// save session configuration
export function applyConfig({dispatch, endpoint={}, settings={}, reset=false}={}) {
  let currentEndpointKey;

  if (reset) {
    resetConfig();
  }

  if (settings.initialCredentials) {
    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
  }

  setCurrentSettings(extend({}, defaultSettings, settings));

  let {defaultEndpointKey, currentEndpoint} = parseEndpointConfig(
    endpoint, getInitialEndpointKey()
  );

  if (!currentEndpointKey) {
    currentEndpointKey = defaultEndpointKey;
  }

  // persist default config key with session storage
  setDefaultEndpointKey(defaultEndpointKey);
  setCurrentEndpoint(currentEndpoint);

  dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));
  setCurrentEndpointKey(currentEndpointKey);

  let savedCreds = retrieveData(C.SAVED_CREDS_KEY);

  if (getCurrentSettings().initialCredentials) {
    // skip initial headers check (i.e. check was already done server-side)
    let {user, headers} = getCurrentSettings().initialCredentials;
    persistData(C.SAVED_CREDS_KEY, headers);
    return Promise.resolve(user);
  } else if (savedCreds) {
    // verify session credentials with API
    return fetch(`${getApiUrl(currentEndpointKey)}${currentEndpoint[currentEndpointKey].tokenValidationPath}`)
    .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json().then(({ data }) => (data));
          }
          removeData(C.SAVED_CREDS_KEY);
          return Promise.reject({reason: "No credentials."});
    });
  } else {
    return Promise.reject({reason: "No credentials."})
  }
}
