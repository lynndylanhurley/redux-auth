import C from "./constants";
import extend from "extend";
import fetch from "./fetch";
import {
  getCurrentSettings,
  setCurrentSettings,
  getInitialEndpointKey,
  setDefaultEndpointKey,
  setCurrentEndpoint,
  retrieveData,
  persistData
} from "./session-storage";

// can't use "window" with node app
var root = Function("return this")() || (42, eval)("this");

// base endpoint that other endpoints extend from
const defaultEndpoint = {
  apiUrl:                "/api",
  signOutPath:           "/auth/sign_out",
  emailSignInPath:       "/auth/sign_in",
  emailRegistrationPath: "/auth",
  accountUpdatePath:     "/auth",
  accountDeletePath:     "/auth",
  passwordResetPath:     "/auth/password",
  passwordUpdatePath:    "/auth/password",
  tokenValidationPath:   "/auth/validate_token",

  authProviderPaths: {
    github:    "/auth/github",
    facebook:  "/auth/facebook",
    google:    "/auth/google_oauth2"
  }
};

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



function getFirstObjectKey (obj) {
  for (var key in obj) {
    return key;
  }
};


// save session configuration
export function applyConfig({endpoint={}, settings={}, reset=false}={}) {
  if (reset) {
    resetConfig();
  }

  setCurrentSettings(extend({}, defaultSettings, settings));

  // try to retrieve previous config from session storage
  let defaultEndpointKey = getInitialEndpointKey();

  // normalize so opts is always an array of objects
  if (endpoint.constructor !== Array) {
    // single config will always be called 'default' unless set
    // by previous session
    defaultEndpointKey = C.INITIAL_CONFIG_KEY;

    // config should look like {default: {...}}
    var defaultConfig = {};
    defaultConfig[defaultEndpointKey] = endpoint;

    // endpoint should look like [{default: {...}}]
    endpoint = [defaultConfig];
  }

  let currentEndpoint = {};

  // iterate over config items, extend each from defaults
  for (var i = 0; i < endpoint.length; i++) {
    var configName = getFirstObjectKey(endpoint[i]);

    // set first as default config
    if (!defaultEndpointKey) {
      defaultEndpointKey = configName;
    }

    // save config to `configs` hash
    currentEndpoint[configName] = extend(
      {}, defaultEndpoint, endpoint[i][configName]
    );
  }

  // persist default config key with session storage
  setDefaultEndpointKey(defaultEndpointKey);
  setCurrentEndpoint(currentEndpoint);

  let savedCreds = retrieveData(C.SAVED_CREDS_KEY);

  if (getCurrentSettings().initialCredentials) {
    // skip initial headers check (i.e. check was already done server-side)
    let {user, headers} = getCurrentSettings().initialCredentials;
    persistData(C.SAVED_CREDS_KEY, headers);
    return Promise.resolve(user);
  } else if (savedCreds) {
    // verify session credentials with API
    return fetch(savedCreds)
  } else {
    return Promise.reject({reason: "No credentials."})
  }
}
