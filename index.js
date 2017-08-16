(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetch = exports.hideDestroyAccountErrorModal = exports.hideDestroyAccountSuccessModal = exports.hideUpdatePasswordErrorModal = exports.hideUpdatePasswordSuccessModal = exports.hidePasswordResetRequestErrorModal = exports.hidePasswordResetRequestSuccessModal = exports.hidePasswordResetErrorModal = exports.hideFirstTimeLoginErrorModal = exports.showPasswordResetErrorModal = exports.showFirstTimeLoginErrorModal = exports.hidePasswordResetSuccessModal = exports.hideFirstTimeLoginSuccessModal = exports.showPasswordResetSuccessModal = exports.showFirstTimeLoginSuccessModal = exports.hideEmailSignUpErrorModal = exports.hideEmailSignUpSuccessModal = exports.hideSignOutErrorModal = exports.hideSignOutSuccessModal = exports.hideOAuthSignInErrorModal = exports.hideOAuthSignInSuccessModal = exports.hideEmailSignInErrorModal = exports.hideEmailSignInSuccessModal = exports.getApiUrl = exports.verifyAuth = exports.destroyAccount = exports.updatePasswordModalFormUpdate = exports.updatePasswordModal = exports.updatePasswordFormUpdate = exports.updatePassword = exports.requestPasswordResetFormUpdate = exports.requestPasswordReset = exports.oAuthSignIn = exports.emailSignUpFormUpdate = exports.emailSignUp = exports.signOut = exports.emailSignInFormUpdate = exports.emailSignIn = exports.authenticate = exports.configure = exports.authStateReducer = undefined;

	var _configure = __webpack_require__(68);

	Object.defineProperty(exports, "configure", {
	  enumerable: true,
	  get: function get() {
	    return _configure.configure;
	  }
	});

	var _authenticate = __webpack_require__(70);

	Object.defineProperty(exports, "authenticate", {
	  enumerable: true,
	  get: function get() {
	    return _authenticate.authenticate;
	  }
	});

	var _emailSignIn = __webpack_require__(85);

	Object.defineProperty(exports, "emailSignIn", {
	  enumerable: true,
	  get: function get() {
	    return _emailSignIn.emailSignIn;
	  }
	});
	Object.defineProperty(exports, "emailSignInFormUpdate", {
	  enumerable: true,
	  get: function get() {
	    return _emailSignIn.emailSignInFormUpdate;
	  }
	});

	var _signOut = __webpack_require__(87);

	Object.defineProperty(exports, "signOut", {
	  enumerable: true,
	  get: function get() {
	    return _signOut.signOut;
	  }
	});

	var _emailSignUp = __webpack_require__(88);

	Object.defineProperty(exports, "emailSignUp", {
	  enumerable: true,
	  get: function get() {
	    return _emailSignUp.emailSignUp;
	  }
	});
	Object.defineProperty(exports, "emailSignUpFormUpdate", {
	  enumerable: true,
	  get: function get() {
	    return _emailSignUp.emailSignUpFormUpdate;
	  }
	});

	var _oauthSignIn = __webpack_require__(89);

	Object.defineProperty(exports, "oAuthSignIn", {
	  enumerable: true,
	  get: function get() {
	    return _oauthSignIn.oAuthSignIn;
	  }
	});

	var _requestPasswordReset = __webpack_require__(91);

	Object.defineProperty(exports, "requestPasswordReset", {
	  enumerable: true,
	  get: function get() {
	    return _requestPasswordReset.requestPasswordReset;
	  }
	});
	Object.defineProperty(exports, "requestPasswordResetFormUpdate", {
	  enumerable: true,
	  get: function get() {
	    return _requestPasswordReset.requestPasswordResetFormUpdate;
	  }
	});

	var _updatePassword = __webpack_require__(92);

	Object.defineProperty(exports, "updatePassword", {
	  enumerable: true,
	  get: function get() {
	    return _updatePassword.updatePassword;
	  }
	});
	Object.defineProperty(exports, "updatePasswordFormUpdate", {
	  enumerable: true,
	  get: function get() {
	    return _updatePassword.updatePasswordFormUpdate;
	  }
	});

	var _updatePasswordModal = __webpack_require__(93);

	Object.defineProperty(exports, "updatePasswordModal", {
	  enumerable: true,
	  get: function get() {
	    return _updatePasswordModal.updatePasswordModal;
	  }
	});
	Object.defineProperty(exports, "updatePasswordModalFormUpdate", {
	  enumerable: true,
	  get: function get() {
	    return _updatePasswordModal.updatePasswordModalFormUpdate;
	  }
	});

	var _destroyAccount = __webpack_require__(94);

	Object.defineProperty(exports, "destroyAccount", {
	  enumerable: true,
	  get: function get() {
	    return _destroyAccount.destroyAccount;
	  }
	});

	var _sessionStorage = __webpack_require__(76);

	Object.defineProperty(exports, "getApiUrl", {
	  enumerable: true,
	  get: function get() {
	    return _sessionStorage.getApiUrl;
	  }
	});

	var _ui = __webpack_require__(71);

	Object.defineProperty(exports, "hideEmailSignInSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideEmailSignInSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideEmailSignInErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideEmailSignInErrorModal;
	  }
	});
	Object.defineProperty(exports, "hideOAuthSignInSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideOAuthSignInSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideOAuthSignInErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideOAuthSignInErrorModal;
	  }
	});
	Object.defineProperty(exports, "hideSignOutSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideSignOutSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideSignOutErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideSignOutErrorModal;
	  }
	});
	Object.defineProperty(exports, "hideEmailSignUpSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideEmailSignUpSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideEmailSignUpErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideEmailSignUpErrorModal;
	  }
	});
	Object.defineProperty(exports, "showFirstTimeLoginSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.showFirstTimeLoginSuccessModal;
	  }
	});
	Object.defineProperty(exports, "showPasswordResetSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.showPasswordResetSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideFirstTimeLoginSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideFirstTimeLoginSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hidePasswordResetSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hidePasswordResetSuccessModal;
	  }
	});
	Object.defineProperty(exports, "showFirstTimeLoginErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.showFirstTimeLoginErrorModal;
	  }
	});
	Object.defineProperty(exports, "showPasswordResetErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.showPasswordResetErrorModal;
	  }
	});
	Object.defineProperty(exports, "hideFirstTimeLoginErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideFirstTimeLoginErrorModal;
	  }
	});
	Object.defineProperty(exports, "hidePasswordResetErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hidePasswordResetErrorModal;
	  }
	});
	Object.defineProperty(exports, "hidePasswordResetRequestSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hidePasswordResetRequestSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hidePasswordResetRequestErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hidePasswordResetRequestErrorModal;
	  }
	});
	Object.defineProperty(exports, "hideUpdatePasswordSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideUpdatePasswordSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideUpdatePasswordErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideUpdatePasswordErrorModal;
	  }
	});
	Object.defineProperty(exports, "hideDestroyAccountSuccessModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideDestroyAccountSuccessModal;
	  }
	});
	Object.defineProperty(exports, "hideDestroyAccountErrorModal", {
	  enumerable: true,
	  get: function get() {
	    return _ui.hideDestroyAccountErrorModal;
	  }
	});

	var _fetch = __webpack_require__(74);

	Object.defineProperty(exports, "fetch", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_fetch).default;
	  }
	});

	var _authenticate2 = __webpack_require__(95);

	var _authenticate3 = _interopRequireDefault(_authenticate2);

	var _configure2 = __webpack_require__(97);

	var _configure3 = _interopRequireDefault(_configure2);

	var _user = __webpack_require__(98);

	var _user2 = _interopRequireDefault(_user);

	var _ui2 = __webpack_require__(99);

	var _ui3 = _interopRequireDefault(_ui2);

	var _emailSignIn2 = __webpack_require__(100);

	var _emailSignIn3 = _interopRequireDefault(_emailSignIn2);

	var _emailSignUp2 = __webpack_require__(101);

	var _emailSignUp3 = _interopRequireDefault(_emailSignUp2);

	var _oauthSignIn2 = __webpack_require__(102);

	var _oauthSignIn3 = _interopRequireDefault(_oauthSignIn2);

	var _requestPasswordReset2 = __webpack_require__(103);

	var _requestPasswordReset3 = _interopRequireDefault(_requestPasswordReset2);

	var _updatePassword2 = __webpack_require__(104);

	var _updatePassword3 = _interopRequireDefault(_updatePassword2);

	var _updatePasswordModal2 = __webpack_require__(105);

	var _updatePasswordModal3 = _interopRequireDefault(_updatePasswordModal2);

	var _server = __webpack_require__(106);

	var _server2 = _interopRequireDefault(_server);

	var _signOut2 = __webpack_require__(107);

	var _signOut3 = _interopRequireDefault(_signOut2);

	var _destroyAccount2 = __webpack_require__(108);

	var _destroyAccount3 = _interopRequireDefault(_destroyAccount2);

	var _reduxImmutablejs = __webpack_require__(96);

	var _verifyAuth2 = __webpack_require__(79);

	var _verifyAuth3 = _interopRequireDefault(_verifyAuth2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* reducers */
	var authStateReducer = exports.authStateReducer = (0, _reduxImmutablejs.combineReducers)({
	  configure: _configure3.default,
	  emailSignIn: _emailSignIn3.default,
	  emailSignUp: _emailSignUp3.default,
	  signOut: _signOut3.default,
	  authentication: _authenticate3.default,
	  requestPasswordReset: _requestPasswordReset3.default,
	  oAuthSignIn: _oauthSignIn3.default,
	  updatePassword: _updatePassword3.default,
	  updatePasswordModal: _updatePasswordModal3.default,
	  destroyAccount: _destroyAccount3.default,
	  server: _server2.default,
	  ui: _ui3.default,
	  user: _user2.default
	});

	/* actions */
	exports.verifyAuth = _verifyAuth3.default;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = require("immutable");

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports) {

	module.exports = require("extend");

/***/ },
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.STORE_CURRENT_ENDPOINT_KEY = exports.SET_ENDPOINT_KEYS = undefined;
	exports.setEndpointKeys = setEndpointKeys;
	exports.storeCurrentEndpointKey = storeCurrentEndpointKey;
	exports.configure = configure;

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	var _authenticate = __webpack_require__(70);

	var _ui = __webpack_require__(71);

	var _server = __webpack_require__(72);

	var _clientSettings = __webpack_require__(73);

	var _sessionStorage = __webpack_require__(76);

	var _verifyAuth = __webpack_require__(79);

	var _verifyAuth2 = _interopRequireDefault(_verifyAuth);

	var _parseUrl = __webpack_require__(81);

	var _parseUrl2 = _interopRequireDefault(_parseUrl);

	var _reactRouterRedux = __webpack_require__(84);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SET_ENDPOINT_KEYS = exports.SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";
	var STORE_CURRENT_ENDPOINT_KEY = exports.STORE_CURRENT_ENDPOINT_KEY = "STORE_CURRENT_ENDPOINT_KEY";
	function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
	  return { type: SET_ENDPOINT_KEYS, endpoints: endpoints, currentEndpointKey: currentEndpointKey, defaultEndpointKey: defaultEndpointKey };
	};
	function storeCurrentEndpointKey(currentEndpointKey) {
	  return { type: STORE_CURRENT_ENDPOINT_KEY, currentEndpointKey: currentEndpointKey };
	};

	function configure() {
	  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return function (dispatch) {
	    // don't render anything for OAuth redirects
	    if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
	      return Promise.resolve({ blank: true });
	    }

	    dispatch((0, _authenticate.authenticateStart)());

	    var promise = void 0,
	        firstTimeLogin = void 0,
	        mustResetPassword = void 0,
	        user = void 0,
	        headers = void 0;

	    if (settings.isServer) {
	      promise = (0, _verifyAuth2.default)(endpoint, settings).then(function (_ref) {
	        var user = _ref.user,
	            headers = _ref.headers,
	            firstTimeLogin = _ref.firstTimeLogin,
	            mustResetPassword = _ref.mustResetPassword,
	            currentEndpoint = _ref.currentEndpoint,
	            currentEndpointKey = _ref.currentEndpointKey,
	            defaultEndpointKey = _ref.defaultEndpointKey;

	        dispatch((0, _server.ssAuthTokenUpdate)({
	          headers: headers,
	          user: user,
	          firstTimeLogin: firstTimeLogin,
	          mustResetPassword: mustResetPassword
	        }));

	        dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));

	        return user;
	      }).catch(function (_ref2) {
	        var reason = _ref2.reason,
	            firstTimeLogin = _ref2.firstTimeLogin,
	            mustResetPassword = _ref2.mustResetPassword,
	            currentEndpoint = _ref2.currentEndpoint,
	            defaultEndpointKey = _ref2.defaultEndpointKey;

	        dispatch((0, _server.ssAuthTokenUpdate)({ firstTimeLogin: firstTimeLogin, mustResetPassword: mustResetPassword }));
	        dispatch(setEndpointKeys(Object.keys(currentEndpoint || {}), null, defaultEndpointKey));
	        return Promise.reject({ reason: reason });
	      });
	    } else {
	      // if the authentication happened server-side, find the resulting auth
	      // credentials that were injected into the dom.
	      var tokenBridge = document.getElementById("token-bridge");

	      var _getRedirectInfo = (0, _parseUrl2.default)(window.location),
	          authRedirectPath = _getRedirectInfo.authRedirectPath,
	          authRedirectHeaders = _getRedirectInfo.authRedirectHeaders;

	      if (tokenBridge) {
	        var rawServerCreds = tokenBridge.innerHTML;
	        if (rawServerCreds) {
	          var serverCreds = JSON.parse(rawServerCreds);

	          headers = serverCreds.headers;
	          user = serverCreds.user;
	          firstTimeLogin = serverCreds.firstTimeLogin;
	          mustResetPassword = serverCreds.mustResetPassword;

	          if (user) {
	            dispatch((0, _authenticate.authenticateComplete)(user));

	            // do NOT send initial validation request.
	            // instead use the credentials that were sent back by the server.
	            settings.initialCredentials = serverCreds;
	          }

	          // sync client dom to prevent React "out of sync" error
	          dispatch((0, _server.ssAuthTokenUpdate)({
	            user: user,
	            headers: headers,
	            mustResetPassword: mustResetPassword,
	            firstTimeLogin: firstTimeLogin
	          }));
	        }
	      } else {
	        mustResetPassword = authRedirectHeaders && authRedirectHeaders.reset_password;
	        firstTimeLogin = authRedirectHeaders && authRedirectHeaders.first_time_login;
	      }

	      if (authRedirectPath) {
	        dispatch((0, _reactRouterRedux.push)({ pathname: authRedirectPath }));
	      }

	      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
	        settings.initialCredentials = (0, _extend2.default)({}, settings.initialCredentials, { headers: authRedirectHeaders });
	      }

	      // if tokens were invalidated by server or from the settings, make sure
	      // to clear browser credentials
	      if (!settings.clientOnly && !settings.initialCredentials || settings.cleanSession) {
	        (0, _sessionStorage.destroySession)();
	      }

	      promise = Promise.resolve((0, _clientSettings.applyConfig)({ dispatch: dispatch, endpoint: endpoint, settings: settings }));
	    }

	    return promise.then(function (user) {
	      dispatch((0, _authenticate.authenticateComplete)(user));

	      if (firstTimeLogin) {
	        dispatch((0, _ui.showFirstTimeLoginSuccessModal)());
	      }

	      if (mustResetPassword) {
	        dispatch((0, _ui.showPasswordResetSuccessModal)());
	      }

	      return user;
	    }).catch(function () {
	      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          reason = _ref3.reason;

	      dispatch((0, _authenticate.authenticateError)([reason]));

	      if (firstTimeLogin) {
	        dispatch((0, _ui.showFirstTimeLoginErrorModal)());
	      }

	      if (mustResetPassword) {
	        dispatch((0, _ui.showPasswordResetErrorModal)());
	      }

	      return Promise.resolve({ reason: reason });
	    });
	  };
	}

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var INITIAL_CONFIG_KEY = exports.INITIAL_CONFIG_KEY = "default";
	var DEFAULT_CONFIG_KEY = exports.DEFAULT_CONFIG_KEY = "defaultConfigKey";
	var SAVED_CONFIG_KEY = exports.SAVED_CONFIG_KEY = "currentConfigName";
	var SAVED_CREDS_KEY = exports.SAVED_CREDS_KEY = "authHeaders";

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.authenticateStart = authenticateStart;
	exports.authenticateComplete = authenticateComplete;
	exports.authenticateError = authenticateError;
	var AUTHENTICATE_START = exports.AUTHENTICATE_START = "AUTHENTICATE_START";
	var AUTHENTICATE_COMPLETE = exports.AUTHENTICATE_COMPLETE = "AUTHENTICATE_COMPLETE";
	var AUTHENTICATE_ERROR = exports.AUTHENTICATE_ERROR = "AUTHENTICATE_ERROR";

	function authenticateStart() {
	  return { type: AUTHENTICATE_START };
	}
	function authenticateComplete(user) {
	  return { type: AUTHENTICATE_COMPLETE, user: user };
	}
	function authenticateError(errors) {
	  return { type: AUTHENTICATE_ERROR, errors: errors };
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hideEmailSignInSuccessModal = hideEmailSignInSuccessModal;
	exports.hideEmailSignInErrorModal = hideEmailSignInErrorModal;
	exports.hideOAuthSignInSuccessModal = hideOAuthSignInSuccessModal;
	exports.hideOAuthSignInErrorModal = hideOAuthSignInErrorModal;
	exports.hideSignOutSuccessModal = hideSignOutSuccessModal;
	exports.hideSignOutErrorModal = hideSignOutErrorModal;
	exports.hideEmailSignUpSuccessModal = hideEmailSignUpSuccessModal;
	exports.hideEmailSignUpErrorModal = hideEmailSignUpErrorModal;
	exports.showFirstTimeLoginSuccessModal = showFirstTimeLoginSuccessModal;
	exports.showPasswordResetSuccessModal = showPasswordResetSuccessModal;
	exports.hideFirstTimeLoginSuccessModal = hideFirstTimeLoginSuccessModal;
	exports.hidePasswordResetSuccessModal = hidePasswordResetSuccessModal;
	exports.showFirstTimeLoginErrorModal = showFirstTimeLoginErrorModal;
	exports.showPasswordResetErrorModal = showPasswordResetErrorModal;
	exports.hideFirstTimeLoginErrorModal = hideFirstTimeLoginErrorModal;
	exports.hidePasswordResetErrorModal = hidePasswordResetErrorModal;
	exports.hidePasswordResetRequestSuccessModal = hidePasswordResetRequestSuccessModal;
	exports.hidePasswordResetRequestErrorModal = hidePasswordResetRequestErrorModal;
	exports.hideUpdatePasswordSuccessModal = hideUpdatePasswordSuccessModal;
	exports.hideUpdatePasswordErrorModal = hideUpdatePasswordErrorModal;
	exports.hideDestroyAccountSuccessModal = hideDestroyAccountSuccessModal;
	exports.hideDestroyAccountErrorModal = hideDestroyAccountErrorModal;
	var HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL = exports.HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL = "HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL";
	var HIDE_EMAIL_SIGN_IN_ERROR_MODAL = exports.HIDE_EMAIL_SIGN_IN_ERROR_MODAL = "HIDE_EMAIL_SIGN_IN_ERROR_MODAL";
	var HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL = exports.HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL = "HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL";
	var HIDE_OAUTH_SIGN_IN_ERROR_MODAL = exports.HIDE_OAUTH_SIGN_IN_ERROR_MODAL = "HIDE_OAUTH_SIGN_IN_ERROR_MODAL";
	var HIDE_SIGN_OUT_ERROR_MODAL = exports.HIDE_SIGN_OUT_ERROR_MODAL = "HIDE_SIGN_OUT_ERROR_MODAL";
	var HIDE_SIGN_OUT_SUCCESS_MODAL = exports.HIDE_SIGN_OUT_SUCCESS_MODAL = "HIDE_SIGN_OUT_SUCCESS_MODAL";
	var HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL = exports.HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL = "HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL";
	var HIDE_EMAIL_SIGN_UP_ERROR_MODAL = exports.HIDE_EMAIL_SIGN_UP_ERROR_MODAL = "HIDE_EMAIL_SIGN_UP_ERROR_MODAL";
	var SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL = exports.SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL = "SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL";
	var HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL = exports.HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL = "HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL";
	var HIDE_PASSWORD_RESET_SUCCESS_MODAL = exports.HIDE_PASSWORD_RESET_SUCCESS_MODAL = "HIDE_PASSWORD_RESET_SUCCESS_MODAL";
	var SHOW_PASSWORD_RESET_SUCCESS_MODAL = exports.SHOW_PASSWORD_RESET_SUCCESS_MODAL = "SHOW_PASSWORD_RESET_SUCCESS_MODAL";
	var SHOW_FIRST_TIME_LOGIN_ERROR_MODAL = exports.SHOW_FIRST_TIME_LOGIN_ERROR_MODAL = "SHOW_FIRST_TIME_LOGIN_ERROR_MODAL";
	var HIDE_FIRST_TIME_LOGIN_ERROR_MODAL = exports.HIDE_FIRST_TIME_LOGIN_ERROR_MODAL = "HIDE_FIRST_TIME_LOGIN_ERROR_MODAL";
	var HIDE_PASSWORD_RESET_ERROR_MODAL = exports.HIDE_PASSWORD_RESET_ERROR_MODAL = "HIDE_PASSWORD_RESET_ERROR_MODAL";
	var SHOW_PASSWORD_RESET_ERROR_MODAL = exports.SHOW_PASSWORD_RESET_ERROR_MODAL = "SHOW_PASSWORD_RESET_ERROR_MODAL";
	var HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL = exports.HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL = "HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL";
	var HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL = exports.HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL = "HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL";
	var HIDE_UPDATE_PASSWORD_SUCCESS_MODAL = exports.HIDE_UPDATE_PASSWORD_SUCCESS_MODAL = "HIDE_UPDATE_PASSWORD_SUCCESS_MODAL";
	var HIDE_UPDATE_PASSWORD_ERROR_MODAL = exports.HIDE_UPDATE_PASSWORD_ERROR_MODAL = "HIDE_UPDATE_PASSWORD_ERROR_MODAL";
	var HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL = exports.HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL = "HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL";
	var HIDE_DESTROY_ACCOUNT_ERROR_MODAL = exports.HIDE_DESTROY_ACCOUNT_ERROR_MODAL = "HIDE_DESTROY_ACCOUNT_ERROR_MODAL";

	function hideEmailSignInSuccessModal() {
	  return { type: HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL };
	}
	function hideEmailSignInErrorModal() {
	  return { type: HIDE_EMAIL_SIGN_IN_ERROR_MODAL };
	}
	function hideOAuthSignInSuccessModal() {
	  return { type: HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL };
	}
	function hideOAuthSignInErrorModal() {
	  return { type: HIDE_OAUTH_SIGN_IN_ERROR_MODAL };
	}
	function hideSignOutSuccessModal() {
	  return { type: HIDE_SIGN_OUT_SUCCESS_MODAL };
	}
	function hideSignOutErrorModal() {
	  return { type: HIDE_SIGN_OUT_ERROR_MODAL };
	}
	function hideEmailSignUpSuccessModal() {
	  return { type: HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL };
	}
	function hideEmailSignUpErrorModal() {
	  return { type: HIDE_EMAIL_SIGN_UP_ERROR_MODAL };
	}
	function showFirstTimeLoginSuccessModal() {
	  return { type: SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL };
	}
	function showPasswordResetSuccessModal() {
	  return { type: SHOW_PASSWORD_RESET_SUCCESS_MODAL };
	}
	function hideFirstTimeLoginSuccessModal() {
	  return { type: HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL };
	}
	function hidePasswordResetSuccessModal() {
	  return { type: HIDE_PASSWORD_RESET_SUCCESS_MODAL };
	}
	function showFirstTimeLoginErrorModal() {
	  return { type: SHOW_FIRST_TIME_LOGIN_ERROR_MODAL };
	}
	function showPasswordResetErrorModal() {
	  return { type: SHOW_PASSWORD_RESET_ERROR_MODAL };
	}
	function hideFirstTimeLoginErrorModal() {
	  return { type: HIDE_FIRST_TIME_LOGIN_ERROR_MODAL };
	}
	function hidePasswordResetErrorModal() {
	  return { type: HIDE_PASSWORD_RESET_ERROR_MODAL };
	}
	function hidePasswordResetRequestSuccessModal() {
	  return { type: HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL };
	}
	function hidePasswordResetRequestErrorModal() {
	  return { type: HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL };
	}
	function hideUpdatePasswordSuccessModal() {
	  return { type: HIDE_UPDATE_PASSWORD_SUCCESS_MODAL };
	}
	function hideUpdatePasswordErrorModal() {
	  return { type: HIDE_UPDATE_PASSWORD_ERROR_MODAL };
	}
	function hideDestroyAccountSuccessModal() {
	  return { type: HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL };
	}
	function hideDestroyAccountErrorModal() {
	  return { type: HIDE_DESTROY_ACCOUNT_ERROR_MODAL };
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ssAuthTokenUpdate = ssAuthTokenUpdate;
	var SS_AUTH_TOKEN_UPDATE = exports.SS_AUTH_TOKEN_UPDATE = "SS_AUTH_TOKEN_UPDATE";

	function ssAuthTokenUpdate(_ref) {
	  var user = _ref.user,
	      headers = _ref.headers,
	      mustResetPassword = _ref.mustResetPassword,
	      firstTimeLogin = _ref.firstTimeLogin,
	      endpointKey = _ref.endpointKey;

	  return { type: SS_AUTH_TOKEN_UPDATE, user: user, headers: headers, mustResetPassword: mustResetPassword, firstTimeLogin: firstTimeLogin, endpointKey: endpointKey };
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.applyConfig = applyConfig;

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _parseEndpointConfig2 = __webpack_require__(78);

	var _parseEndpointConfig3 = _interopRequireDefault(_parseEndpointConfig2);

	var _configure = __webpack_require__(68);

	var _sessionStorage = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// can't use "window" with node app
	var root = Function("return this")() || (42, eval)("this");

	var defaultSettings = {
	  proxyIf: function proxyIf() {
	    return false;
	  },
	  proxyUrl: "/proxy",
	  forceHardRedirect: false,
	  storage: "cookies",
	  cookieExpiry: 14,
	  cookiePath: "/",
	  initialCredentials: null,

	  passwordResetSuccessUrl: function passwordResetSuccessUrl() {
	    return root.location.href;
	  },

	  confirmationSuccessUrl: function confirmationSuccessUrl() {
	    return root.location.href;
	  },

	  tokenFormat: {
	    "access-token": "{{ access-token }}",
	    "token-type": "Bearer",
	    client: "{{ client }}",
	    expiry: "{{ expiry }}",
	    uid: "{{ uid }}"
	  },

	  parseExpiry: function parseExpiry(headers) {
	    // convert from ruby time (seconds) to js time (millis)
	    return parseInt(headers["expiry"], 10) * 1000 || null;
	  },

	  handleLoginResponse: function handleLoginResponse(resp) {
	    return resp.data;
	  },

	  handleAccountUpdateResponse: function handleAccountUpdateResponse(resp) {
	    return resp.data;
	  },

	  handleTokenValidationResponse: function handleTokenValidationResponse(resp) {
	    return resp.data;
	  }
	};

	// save session configuration
	function applyConfig() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      dispatch = _ref.dispatch,
	      _ref$endpoint = _ref.endpoint,
	      endpoint = _ref$endpoint === undefined ? {} : _ref$endpoint,
	      _ref$settings = _ref.settings,
	      settings = _ref$settings === undefined ? {} : _ref$settings,
	      _ref$reset = _ref.reset,
	      reset = _ref$reset === undefined ? false : _ref$reset;

	  var currentEndpointKey = void 0;

	  if (reset) {
	    resetConfig();
	  }

	  if (settings.initialCredentials) {
	    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
	  }

	  (0, _sessionStorage.setCurrentSettings)((0, _extend2.default)({}, defaultSettings, settings));

	  var _parseEndpointConfig = (0, _parseEndpointConfig3.default)(endpoint, (0, _sessionStorage.getInitialEndpointKey)()),
	      defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey,
	      currentEndpoint = _parseEndpointConfig.currentEndpoint;

	  if (!currentEndpointKey) {
	    currentEndpointKey = defaultEndpointKey;
	  }

	  // persist default config key with session storage
	  (0, _sessionStorage.setDefaultEndpointKey)(defaultEndpointKey);
	  (0, _sessionStorage.setCurrentEndpoint)(currentEndpoint);

	  dispatch((0, _configure.setEndpointKeys)(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));
	  (0, _sessionStorage.setCurrentEndpointKey)(currentEndpointKey);

	  var savedCreds = (0, _sessionStorage.retrieveData)(C.SAVED_CREDS_KEY);

	  if ((0, _sessionStorage.getCurrentSettings)().initialCredentials) {
	    // skip initial headers check (i.e. check was already done server-side)
	    var _getCurrentSettings$i = (0, _sessionStorage.getCurrentSettings)().initialCredentials,
	        user = _getCurrentSettings$i.user,
	        headers = _getCurrentSettings$i.headers;

	    (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, headers);
	    return Promise.resolve(user);
	  } else if (savedCreds) {
	    // verify session credentials with API
	    return (0, _fetch2.default)("" + (0, _sessionStorage.getApiUrl)(currentEndpointKey) + currentEndpoint[currentEndpointKey].tokenValidationPath).then(function (response) {
	      if (response.status >= 200 && response.status < 300) {
	        return response.json().then(function (_ref2) {
	          var data = _ref2.data;
	          return data;
	        });
	      }
	      (0, _sessionStorage.removeData)(C.SAVED_CREDS_KEY);
	      return Promise.reject({ reason: "No credentials." });
	    });
	  } else {
	    return Promise.reject({ reason: "No credentials." });
	  }
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addAuthorizationHeader = addAuthorizationHeader;

	exports.default = function (url) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!options.headers) {
	    options.headers = {};
	  }
	  (0, _extend2.default)(options.headers, getAuthHeaders(url));
	  return (0, _isomorphicFetch2.default)(url, options).then(function (resp) {
	    return updateAuthCredentials(resp);
	  });
	};

	var _isomorphicFetch = __webpack_require__(75);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	var _sessionStorage = __webpack_require__(76);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isApiRequest = function isApiRequest(url) {
	  return url.match((0, _sessionStorage.getApiUrl)((0, _sessionStorage.getSessionEndpointKey)()));
	};

	/**
	 * Add access token as a bearer token in accordance to RFC 6750
	 *
	 * @param {string} accessToken
	 * @param {object} headers
	 * @returns {object} New extended headers object, with Authorization property
	 */
	function addAuthorizationHeader(accessToken, headers) {
	  return Object.assign({}, headers, {
	    Authorization: "Bearer " + accessToken
	  });
	}

	function getAuthHeaders(url) {
	  if (isApiRequest(url)) {
	    // fetch current auth headers from storage
	    var currentHeaders = (0, _sessionStorage.retrieveData)(C.SAVED_CREDS_KEY) || {},
	        nextHeaders = {};

	    // bust IE cache
	    nextHeaders["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";

	    // set header for each key in `tokenFormat` config
	    for (var key in (0, _sessionStorage.getTokenFormat)()) {
	      nextHeaders[key] = currentHeaders[key];
	    }

	    return addAuthorizationHeader(currentHeaders['access-token'], nextHeaders);
	  } else {
	    return {};
	  }
	}

	function updateAuthCredentials(resp) {
	  // check config apiUrl matches the current response url
	  if (isApiRequest(resp.url)) {
	    // set header for each key in `tokenFormat` config
	    var newHeaders = {};

	    // set flag to ensure that we don't accidentally nuke the headers
	    // if the response tokens aren't sent back from the API
	    var blankHeaders = true;

	    // set header key + val for each key in `tokenFormat` config
	    for (var key in (0, _sessionStorage.getTokenFormat)()) {
	      newHeaders[key] = resp.headers.get(key);

	      if (newHeaders[key]) {
	        blankHeaders = false;
	      }
	    }

	    // persist headers for next request
	    if (!blankHeaders) {
	      (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, newHeaders);
	    }
	  }

	  return resp;
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCurrentSettings = setCurrentSettings;
	exports.getCurrentSettings = getCurrentSettings;
	exports.setCurrentEndpoint = setCurrentEndpoint;
	exports.getCurrentEndpoint = getCurrentEndpoint;
	exports.setCurrentEndpointKey = setCurrentEndpointKey;
	exports.getCurrentEndpointKey = getCurrentEndpointKey;
	exports.setDefaultEndpointKey = setDefaultEndpointKey;
	exports.getDefaultEndpointKey = getDefaultEndpointKey;
	exports.resetConfig = resetConfig;
	exports.destroySession = destroySession;
	exports.getInitialEndpointKey = getInitialEndpointKey;
	exports.getSessionEndpointKey = getSessionEndpointKey;
	exports.getSessionEndpoint = getSessionEndpoint;
	exports.getDestroyAccountUrl = getDestroyAccountUrl;
	exports.getSignOutUrl = getSignOutUrl;
	exports.getEmailSignInUrl = getEmailSignInUrl;
	exports.getEmailSignUpUrl = getEmailSignUpUrl;
	exports.getPasswordResetRequestUrl = getPasswordResetRequestUrl;
	exports.getPasswordUpdateUrl = getPasswordUpdateUrl;
	exports.getTokenValidationPath = getTokenValidationPath;
	exports.getOAuthUrl = getOAuthUrl;
	exports.getConfirmationSuccessUrl = getConfirmationSuccessUrl;
	exports.getPasswordResetRedirectUrl = getPasswordResetRedirectUrl;
	exports.getApiUrl = getApiUrl;
	exports.getTokenFormat = getTokenFormat;
	exports.removeData = removeData;
	exports.persistData = persistData;
	exports.retrieveData = retrieveData;

	var _browserCookies = __webpack_require__(77);

	var _browserCookies2 = _interopRequireDefault(_browserCookies);

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// even though this code shouldn't be used server-side, node will throw
	// errors if "window" is used
	var root = Function("return this")() || (42, eval)("this");

	// stateful variables that persist throughout session
	root.authState = {
	  currentSettings: {},
	  currentEndpoint: {},
	  defaultEndpointKey: null
	};

	function setCurrentSettings(s) {
	  root.authState.currentSettings = s;
	}

	function getCurrentSettings() {
	  return root.authState.currentSettings;
	}

	function setCurrentEndpoint(e) {
	  root.authState.currentEndpoint = e;
	}

	function getCurrentEndpoint() {
	  return root.authState.currentEndpoint;
	}

	function setCurrentEndpointKey(k) {
	  persistData(C.SAVED_CONFIG_KEY, k || getDefaultEndpointKey());
	}

	function getCurrentEndpointKey() {
	  return retrieveData(C.SAVED_CONFIG_KEY) || getDefaultEndpointKey();
	}

	function setDefaultEndpointKey(k) {
	  persistData(C.DEFAULT_CONFIG_KEY, k);
	}

	function getDefaultEndpointKey() {
	  return retrieveData(C.DEFAULT_CONFIG_KEY);
	}

	// reset stateful variables
	function resetConfig() {
	  root.authState = root.authState || {};
	  root.authState.currentSettings = {};
	  root.authState.currentEndpoint = {};
	  destroySession();
	}

	function destroySession() {
	  var sessionKeys = [C.SAVED_CREDS_KEY, C.SAVED_CONFIG_KEY];

	  for (var key in sessionKeys) {
	    key = sessionKeys[key];

	    // kill all local storage keys
	    if (root.localStorage) {
	      root.localStorage.removeItem(key);
	    }

	    // remove from base path in case config is not specified
	    _browserCookies2.default.erase(key, {
	      path: root.authState.currentSettings.cookiePath || "/"
	    });
	  }
	}

	function unescapeQuotes(val) {
	  return val && val.replace(/("|')/g, "");
	};

	function getInitialEndpointKey() {
	  return unescapeQuotes(_browserCookies2.default.get(C.SAVED_CONFIG_KEY) || root.localStorage && root.localStorage.getItem(C.SAVED_CONFIG_KEY));
	}

	// TODO: make this really work
	function getSessionEndpointKey(k) {
	  var key = k || getCurrentEndpointKey();
	  if (!key) {
	    throw "You must configure redux-auth before use.";
	  } else {
	    return key;
	  }
	}

	function getSessionEndpoint(k) {
	  return getCurrentEndpoint()[getSessionEndpointKey(k)];
	}

	// only should work for current session
	function getDestroyAccountUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).accountDeletePath;
	}

	// only should work for current session
	function getSignOutUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).signOutPath;
	}

	function getEmailSignInUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).emailSignInPath;
	}

	function getEmailSignUpUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).emailRegistrationPath + "?config_name=" + endpointKey;
	}

	function getPasswordResetRequestUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).passwordResetPath + "?config_name=" + endpointKey;
	}

	function getPasswordUpdateUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).passwordUpdatePath;
	}

	function getTokenValidationPath(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).tokenValidationPath;
	}

	function getOAuthUrl(_ref) {
	  var provider = _ref.provider,
	      params = _ref.params,
	      endpointKey = _ref.endpointKey;

	  var oAuthUrl = getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).authProviderPaths[provider] + "?auth_origin_url=" + encodeURIComponent(root.location.href) + "&config_name=" + encodeURIComponent(getSessionEndpointKey(endpointKey));

	  if (params) {
	    for (var key in params) {
	      oAuthUrl += "&";
	      oAuthUrl += encodeURIComponent(key);
	      oAuthUrl += "=";
	      oAuthUrl += encodeURIComponent(params[key]);
	    }
	  }

	  return oAuthUrl;
	}

	function getConfirmationSuccessUrl() {
	  return root.authState.currentSettings.confirmationSuccessUrl();
	}

	function getPasswordResetRedirectUrl() {
	  return root.authState.currentSettings.confirmationSuccessUrl();
	}

	function getApiUrl(key) {
	  var configKey = getSessionEndpointKey(key);
	  return root.authState.currentEndpoint[configKey].apiUrl;
	}

	function getTokenFormat() {
	  return root.authState.currentSettings.tokenFormat;
	}

	function removeData(key) {

	  switch (root.authState.currentSettings.storage) {
	    case "localStorage":
	      root.localStorage.removeItem(key);
	      break;
	    default:
	      _browserCookies2.default.erase(key);
	  }
	}

	function persistData(key, val) {
	  val = JSON.stringify(val);

	  switch (root.authState.currentSettings.storage) {
	    case "localStorage":
	      root.localStorage.setItem(key, val);
	      break;

	    default:
	      _browserCookies2.default.set(key, val, {
	        expires: root.authState.currentSettings.cookieExpiry,
	        path: root.authState.currentSettings.cookiePath
	      });
	      break;
	  }
	};

	function retrieveData(key, storage) {
	  var val = null;

	  switch (storage || root.authState.currentSettings.storage) {
	    case "localStorage":
	      val = root.localStorage && root.localStorage.getItem(key);
	      break;

	    default:
	      val = _browserCookies2.default.get(key);
	      break;
	  }

	  // if value is a simple string, the parser will fail. in that case, simply
	  // unescape the quotes and return the string.
	  try {
	    // return parsed json response
	    return JSON.parse(val);
	  } catch (err) {
	    // unescape quotes
	    return unescapeQuotes(val);
	  }
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("browser-cookies");

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseEndpointConfig;

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// base endpoint that other endpoints extend from
	var defaultEndpoint = {
	  apiUrl: "/api",
	  signOutPath: "/auth/sign_out",
	  emailSignInPath: "/auth/sign_in",
	  emailRegistrationPath: "/auth",
	  accountUpdatePath: "/auth",
	  accountDeletePath: "/auth",
	  passwordResetPath: "/auth/password",
	  passwordUpdatePath: "/auth/password",
	  tokenValidationPath: "/auth/validate_token",

	  authProviderPaths: {
	    github: "/auth/github",
	    facebook: "/auth/facebook",
	    google: "/auth/google_oauth2"
	  }
	};

	function getFirstObjectKey(obj) {
	  for (var key in obj) {
	    return key;
	  }
	};

	function parseEndpointConfig(endpoint) {
	  var defaultEndpointKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

	  var currentEndpoint = {};

	  // iterate over config items, extend each from defaults
	  for (var i = 0; i < endpoint.length; i++) {
	    var configName = getFirstObjectKey(endpoint[i]);

	    // set first as default config
	    if (!defaultEndpointKey) {
	      defaultEndpointKey = configName;
	    }

	    // save config to `configs` hash
	    currentEndpoint[configName] = (0, _extend2.default)({}, defaultEndpoint, endpoint[i][configName]);
	  }

	  return { defaultEndpointKey: defaultEndpointKey, currentEndpoint: currentEndpoint };
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.fetchToken = fetchToken;

	var _isomorphicFetch = __webpack_require__(75);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _cookie = __webpack_require__(80);

	var _cookie2 = _interopRequireDefault(_cookie);

	var _parseUrl = __webpack_require__(81);

	var _parseUrl2 = _interopRequireDefault(_parseUrl);

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	var _fetch = __webpack_require__(74);

	var _parseEndpointConfig3 = __webpack_require__(78);

	var _parseEndpointConfig4 = _interopRequireDefault(_parseEndpointConfig3);

	var _url = __webpack_require__(83);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function parseHeaders(headers) {
	  // set header for each key in `tokenFormat` config
	  var newHeaders = {};

	  // set flag to ensure that we don't accidentally nuke the headers
	  // if the response tokens aren't sent back from the API
	  var blankHeaders = true;

	  // set header key + val for each key in `tokenFormat` config
	  // TODO: get actual config value
	  var _arr = ["access-token", "token-type", "client", "expiry", "uid", "config", "endpointKey"];
	  for (var _i = 0; _i < _arr.length; _i++) {
	    var key = _arr[_i];
	    newHeaders[key] = headers[key];

	    if (newHeaders[key]) {
	      // normalize -- sometimes headers come back in array form
	      if (_typeof(newHeaders[key]) === "object") {
	        newHeaders[key] = newHeaders[key][0];
	      }

	      blankHeaders = false;
	    }
	  }

	  // persist headers for next request
	  if (!blankHeaders) {
	    return newHeaders;
	  }
	}

	function fetchToken(_ref) {
	  var rawEndpoints = _ref.rawEndpoints,
	      cookies = _ref.cookies,
	      currentLocation = _ref.currentLocation;

	  var _getRedirectInfo = (0, _parseUrl2.default)(_url2.default.parse(currentLocation)),
	      authRedirectHeaders = _getRedirectInfo.authRedirectHeaders;

	  return new Promise(function (resolve, reject) {
	    if (cookies || authRedirectHeaders) {
	      var rawCookies = _cookie2.default.parse(cookies || "{}");
	      var parsedCookies = JSON.parse(rawCookies.authHeaders || "false");
	      var firstTimeLogin = void 0,
	          mustResetPassword = void 0,
	          currentEndpointKey = void 0,
	          headers = void 0;

	      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
	        headers = parseHeaders(authRedirectHeaders);
	        currentEndpointKey = authRedirectHeaders.endpointKey || null;
	        mustResetPassword = JSON.parse(authRedirectHeaders.reset_password || "false");
	        firstTimeLogin = JSON.parse(authRedirectHeaders.account_confirmation_success || "false");
	      } else if (rawCookies && parsedCookies) {
	        headers = parsedCookies;
	        currentEndpointKey = JSON.parse(rawCookies[C.SAVED_CONFIG_KEY] || "null");
	        mustResetPassword = JSON.parse(parsedCookies.mustResetPassword || "false");
	        firstTimeLogin = JSON.parse(parsedCookies.firstTimeLogin || "false");
	      }

	      if (!headers) {
	        return reject({
	          reason: "No creds",
	          currentEndpoint: currentEndpoint,
	          defaultEndpointKey: defaultEndpointKey
	        });
	      }

	      var newHeaders,
	          _parseEndpointConfig = (0, _parseEndpointConfig4.default)(rawEndpoints),
	          currentEndpoint = _parseEndpointConfig.currentEndpoint,
	          defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey,
	          _currentEndpoint = currentEndpoint[currentEndpointKey || defaultEndpointKey],
	          apiUrl = _currentEndpoint.apiUrl,
	          tokenValidationPath = _currentEndpoint.tokenValidationPath,
	          validationUrl = "" + apiUrl + tokenValidationPath + "?unbatch=true";


	      return (0, _isomorphicFetch2.default)(validationUrl, {
	        headers: (0, _fetch.addAuthorizationHeader)(headers['access-token'], headers)
	      }).then(function (resp) {
	        newHeaders = parseHeaders(resp.headers.raw());
	        return resp.json();
	      }).then(function (json) {
	        if (json.success) {
	          return resolve({
	            headers: newHeaders,
	            user: json.data,
	            mustResetPassword: mustResetPassword,
	            firstTimeLogin: firstTimeLogin,
	            currentEndpoint: currentEndpoint,
	            currentEndpointKey: currentEndpointKey,
	            defaultEndpointKey: defaultEndpointKey
	          });
	        } else {
	          return reject({
	            reason: json.errors,
	            mustResetPassword: mustResetPassword,
	            firstTimeLogin: firstTimeLogin,
	            currentEndpoint: currentEndpoint,
	            defaultEndpointKey: defaultEndpointKey
	          });
	        }
	      }).catch(function (reason) {
	        return reject({
	          reason: reason,
	          firstTimeLogin: firstTimeLogin,
	          mustResetPassword: mustResetPassword,
	          currentEndpoint: currentEndpoint,
	          defaultEndpointKey: defaultEndpointKey
	        });
	      });
	    } else {
	      var _parseEndpointConfig2 = (0, _parseEndpointConfig4.default)(rawEndpoints),
	          _currentEndpoint2 = _parseEndpointConfig2.currentEndpoint,
	          _defaultEndpointKey = _parseEndpointConfig2.defaultEndpointKey;

	      reject({
	        reason: "No creds",
	        currentEndpoint: _currentEndpoint2,
	        defaultEndpointKey: _defaultEndpointKey
	      });
	    }
	  });
	}

	function verifyAuth(rawEndpoints, _ref2) {
	  var isServer = _ref2.isServer,
	      cookies = _ref2.cookies,
	      currentLocation = _ref2.currentLocation;

	  return new Promise(function (resolve, reject) {
	    if (isServer) {
	      return fetchToken({ rawEndpoints: rawEndpoints, cookies: cookies, currentLocation: currentLocation }).then(function (res) {
	        return resolve(res);
	      }).catch(function (res) {
	        return reject(res);
	      });
	    } else {
	      // TODO: deal with localStorage
	      //Auth.validateToken(getCurrentEndpointKey())
	      //.then((user) => resolve(user.data), (err) => reject({reason: err}));
	    }
	  });
	}

	exports.default = verifyAuth;

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("cookie");

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeTokenKeys = normalizeTokenKeys;
	exports.getAllParams = getAllParams;
	exports.default = getRedirectInfo;

	var _querystring = __webpack_require__(82);

	var _querystring2 = _interopRequireDefault(_querystring);

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function normalizeTokenKeys(params) {
	  // normalize keys
	  if (params.token) {
	    params["access-token"] = params.token;
	    delete params.token;
	  }
	  if (params.auth_token) {
	    params["access-token"] = params.auth_token;
	    delete params.auth_token;
	  }
	  if (params.client_id) {
	    params.client = params.client_id;
	    delete params.client_id;
	  }
	  if (params.config) {
	    params.endpointKey = params.config;
	    delete params.config;
	  }

	  return params;
	};

	var getAnchorSearch = function getAnchorSearch(location) {
	  var rawAnchor = location.anchor || "",
	      arr = rawAnchor.split("?");
	  return arr.length > 1 ? arr[1] : null;
	};

	var getSearchQs = function getSearchQs(location) {
	  var rawQs = location.search || "",
	      qs = rawQs.replace("?", ""),
	      qsObj = qs ? _querystring2.default.parse(qs) : {};

	  return qsObj;
	};

	var getAnchorQs = function getAnchorQs(location) {
	  var anchorQs = getAnchorSearch(location),
	      anchorQsObj = anchorQs ? _querystring2.default.parse(anchorQs) : {};

	  return anchorQsObj;
	};

	var stripKeys = function stripKeys(obj, keys) {
	  for (var q in keys) {
	    delete obj[keys[q]];
	  }

	  return obj;
	};

	function getAllParams(location) {
	  return (0, _extend2.default)({}, getAnchorQs(location), getSearchQs(location));
	};

	var buildCredentials = function buildCredentials(location, keys) {
	  var params = getAllParams(location);
	  var authHeaders = {};

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      authHeaders[key] = params[key];
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return normalizeTokenKeys(authHeaders);
	};

	// this method is tricky. we want to reconstruct the current URL with the
	// following conditions:
	// 1. search contains none of the supplied keys
	// 2. anchor search (i.e. `#/?key=val`) contains none of the supplied keys
	// 3. all of the keys NOT supplied are presevered in their original form
	// 4. url protocol, host, and path are preserved
	var getLocationWithoutParams = function getLocationWithoutParams(currentLocation, keys) {
	  // strip all values from both actual and anchor search params
	  var newSearch = _querystring2.default.stringify(stripKeys(getSearchQs(currentLocation), keys)),
	      newAnchorQs = _querystring2.default.stringify(stripKeys(getAnchorQs(currentLocation), keys)),
	      newAnchor = (currentLocation.hash || "").split("?")[0];

	  if (newSearch) {
	    newSearch = "?" + newSearch;
	  }

	  if (newAnchorQs) {
	    newAnchor += "?" + newAnchorQs;
	  }

	  if (newAnchor && !newAnchor.match(/^#/)) {
	    newAnchor = "#/" + newAnchor;
	  }

	  // reconstruct location with stripped auth keys
	  var newLocation = currentLocation.pathname + newSearch + newAnchor;

	  return newLocation;
	};

	function getRedirectInfo(currentLocation) {
	  if (!currentLocation) {
	    return {};
	  } else {
	    var authKeys = ["access-token", "token", "auth_token", "config", "client", "client_id", "expiry", "uid", "reset_password", "account_confirmation_success"];

	    var authRedirectHeaders = buildCredentials(currentLocation, authKeys);
	    var authRedirectPath = getLocationWithoutParams(currentLocation, authKeys);

	    if (authRedirectPath !== currentLocation) {
	      return { authRedirectHeaders: authRedirectHeaders, authRedirectPath: authRedirectPath };
	    } else {
	      return {};
	    }
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("querystring");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EMAIL_SIGN_IN_FORM_UPDATE = exports.EMAIL_SIGN_IN_ERROR = exports.EMAIL_SIGN_IN_COMPLETE = exports.EMAIL_SIGN_IN_START = undefined;
	exports.emailSignInFormUpdate = emailSignInFormUpdate;
	exports.emailSignInStart = emailSignInStart;
	exports.emailSignInComplete = emailSignInComplete;
	exports.emailSignInError = emailSignInError;
	exports.emailSignIn = emailSignIn;

	var _sessionStorage = __webpack_require__(76);

	var _configure = __webpack_require__(68);

	var _handleFetchResponse = __webpack_require__(86);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EMAIL_SIGN_IN_START = exports.EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
	var EMAIL_SIGN_IN_COMPLETE = exports.EMAIL_SIGN_IN_COMPLETE = "EMAIL_SIGN_IN_COMPLETE";
	var EMAIL_SIGN_IN_ERROR = exports.EMAIL_SIGN_IN_ERROR = "EMAIL_SIGN_IN_ERROR";
	var EMAIL_SIGN_IN_FORM_UPDATE = exports.EMAIL_SIGN_IN_FORM_UPDATE = "EMAIL_SIGN_IN_FORM_UPDATE";

	function emailSignInFormUpdate(endpoint, key, value) {
	  return { type: EMAIL_SIGN_IN_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
	}
	function emailSignInStart(endpoint) {
	  return { type: EMAIL_SIGN_IN_START, endpoint: endpoint };
	}
	function emailSignInComplete(endpoint, user) {
	  return { type: EMAIL_SIGN_IN_COMPLETE, user: user, endpoint: endpoint };
	}
	function emailSignInError(endpoint, errors) {
	  return { type: EMAIL_SIGN_IN_ERROR, errors: errors, endpoint: endpoint };
	}
	function emailSignIn(body, endpointKey) {
	  return function (dispatch) {
	    // save previous endpoint key in case of failure
	    var prevEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

	    // necessary for fetch to recognize the response as an api request
	    (0, _sessionStorage.setCurrentEndpointKey)(endpointKey);
	    var currentEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

	    dispatch((0, _configure.storeCurrentEndpointKey)(currentEndpointKey));
	    dispatch(emailSignInStart(currentEndpointKey));

	    return (0, _fetch2.default)((0, _sessionStorage.getEmailSignInUrl)(currentEndpointKey), {
	      headers: {
	        "Accept": "application/json",
	        "Content-Type": "application/json"
	      },
	      method: "post",
	      body: JSON.stringify(body)
	    }).then(_handleFetchResponse.parseResponse).then(function (user) {
	      return dispatch(emailSignInComplete(currentEndpointKey, user));
	    }).catch(function (errors) {
	      // revert endpoint key to what it was before failed request
	      (0, _sessionStorage.setCurrentEndpointKey)(prevEndpointKey);
	      dispatch((0, _configure.storeCurrentEndpointKey)(prevEndpointKey));
	      dispatch(emailSignInError(currentEndpointKey, errors));
	      throw errors;
	    });
	  };
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseResponse = parseResponse;
	function parseResponse(response) {
	  var json = response.json();
	  if (response.status >= 200 && response.status < 300) {
	    return json;
	  } else {
	    return json.then(function (err) {
	      return Promise.reject(err);
	    });
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SIGN_OUT_ERROR = exports.SIGN_OUT_COMPLETE = exports.SIGN_OUT_START = undefined;
	exports.signOutStart = signOutStart;
	exports.signOutComplete = signOutComplete;
	exports.signOutError = signOutError;
	exports.signOut = signOut;

	var _sessionStorage = __webpack_require__(76);

	var _handleFetchResponse = __webpack_require__(86);

	var _configure = __webpack_require__(68);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SIGN_OUT_START = exports.SIGN_OUT_START = "SIGN_OUT_START";
	var SIGN_OUT_COMPLETE = exports.SIGN_OUT_COMPLETE = "SIGN_OUT_COMPLETE";
	var SIGN_OUT_ERROR = exports.SIGN_OUT_ERROR = "SIGN_OUT_ERROR";

	function signOutStart(endpoint) {
	  return { type: SIGN_OUT_START, endpoint: endpoint };
	}
	function signOutComplete(endpoint, user) {
	  return { type: SIGN_OUT_COMPLETE, user: user, endpoint: endpoint };
	}
	function signOutError(endpoint, errors) {
	  return { type: SIGN_OUT_ERROR, endpoint: endpoint, errors: errors };
	}
	function signOut(endpoint) {
	  return function (dispatch) {
	    dispatch(signOutStart(endpoint));

	    return (0, _fetch2.default)((0, _sessionStorage.getSignOutUrl)(endpoint), { method: "delete" }).then(_handleFetchResponse.parseResponse).then(function (user) {
	      dispatch(signOutComplete(endpoint, user));
	      dispatch((0, _configure.storeCurrentEndpointKey)(null));
	      (0, _sessionStorage.destroySession)();
	    }).catch(function (_ref) {
	      var errors = _ref.errors;

	      dispatch(signOutError(endpoint, errors));
	      dispatch((0, _configure.storeCurrentEndpointKey)(null));
	      (0, _sessionStorage.destroySession)();
	      throw errors;
	    });
	  };
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EMAIL_SIGN_UP_FORM_UPDATE = exports.EMAIL_SIGN_UP_ERROR = exports.EMAIL_SIGN_UP_COMPLETE = exports.EMAIL_SIGN_UP_START = undefined;
	exports.emailSignUpFormUpdate = emailSignUpFormUpdate;
	exports.emailSignUpStart = emailSignUpStart;
	exports.emailSignUpComplete = emailSignUpComplete;
	exports.emailSignUpError = emailSignUpError;
	exports.emailSignUp = emailSignUp;

	var _sessionStorage = __webpack_require__(76);

	var _handleFetchResponse = __webpack_require__(86);

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EMAIL_SIGN_UP_START = exports.EMAIL_SIGN_UP_START = "EMAIL_SIGN_UP_START";
	var EMAIL_SIGN_UP_COMPLETE = exports.EMAIL_SIGN_UP_COMPLETE = "EMAIL_SIGN_UP_COMPLETE";
	var EMAIL_SIGN_UP_ERROR = exports.EMAIL_SIGN_UP_ERROR = "EMAIL_SIGN_UP_ERROR";
	var EMAIL_SIGN_UP_FORM_UPDATE = exports.EMAIL_SIGN_UP_FORM_UPDATE = "EMAIL_SIGN_UP_FORM_UPDATE";

	function emailSignUpFormUpdate(endpoint, key, value) {
	  return { type: EMAIL_SIGN_UP_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
	}
	function emailSignUpStart(endpoint) {
	  return { type: EMAIL_SIGN_UP_START, endpoint: endpoint };
	}
	function emailSignUpComplete(user, endpoint) {
	  return { type: EMAIL_SIGN_UP_COMPLETE, user: user, endpoint: endpoint };
	}
	function emailSignUpError(errors, endpoint) {
	  return { type: EMAIL_SIGN_UP_ERROR, errors: errors, endpoint: endpoint };
	}
	function emailSignUp(body, endpointKey) {
	  return function (dispatch) {
	    dispatch(emailSignUpStart(endpointKey));

	    return (0, _fetch2.default)((0, _sessionStorage.getEmailSignUpUrl)(endpointKey), {
	      headers: {
	        "Accept": "application/json",
	        "Content-Type": "application/json"
	      },
	      method: "post",
	      body: JSON.stringify((0, _extend2.default)(body, {
	        confirm_success_url: (0, _sessionStorage.getConfirmationSuccessUrl)()
	      }))
	    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
	      var data = _ref.data;
	      return dispatch(emailSignUpComplete(data, endpointKey));
	    }).catch(function (_ref2) {
	      var errors = _ref2.errors;

	      dispatch(emailSignUpError(errors, endpointKey));
	      throw errors;
	    });
	  };
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OAUTH_SIGN_IN_ERROR = exports.OAUTH_SIGN_IN_COMPLETE = exports.OAUTH_SIGN_IN_START = undefined;
	exports.oAuthSignInStart = oAuthSignInStart;
	exports.oAuthSignInComplete = oAuthSignInComplete;
	exports.oAuthSignInError = oAuthSignInError;
	exports.oAuthSignIn = oAuthSignIn;

	var _constants = __webpack_require__(69);

	var C = _interopRequireWildcard(_constants);

	var _parseUrl = __webpack_require__(81);

	var _sessionStorage = __webpack_require__(76);

	var _configure = __webpack_require__(68);

	var _handleFetchResponse = __webpack_require__(86);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _popup = __webpack_require__(90);

	var _popup2 = _interopRequireDefault(_popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var OAUTH_SIGN_IN_START = exports.OAUTH_SIGN_IN_START = "OAUTH_SIGN_IN_START";
	var OAUTH_SIGN_IN_COMPLETE = exports.OAUTH_SIGN_IN_COMPLETE = "OAUTH_SIGN_IN_COMPLETE";
	var OAUTH_SIGN_IN_ERROR = exports.OAUTH_SIGN_IN_ERROR = "OAUTH_SIGN_IN_ERROR";

	// hook for rewire
	var openPopup = _popup2.default;

	function listenForCredentials(endpointKey, popup, provider, resolve, reject) {
	  if (!resolve) {
	    return new Promise(function (resolve, reject) {
	      listenForCredentials(endpointKey, popup, provider, resolve, reject);
	    });
	  } else {
	    var creds = void 0;

	    try {
	      creds = (0, _parseUrl.getAllParams)(popup.location);
	    } catch (err) {}

	    if (creds && creds.uid) {
	      popup.close();
	      (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, (0, _parseUrl.normalizeTokenKeys)(creds));
	      (0, _fetch2.default)((0, _sessionStorage.getTokenValidationPath)(endpointKey)).then(_handleFetchResponse.parseResponse).then(function (_ref) {
	        var data = _ref.data;
	        return resolve(data);
	      }).catch(function (_ref2) {
	        var errors = _ref2.errors;
	        return reject({ errors: errors });
	      });
	    } else if (popup.closed) {
	      reject({ errors: "Authentication was cancelled." });
	    } else {
	      setTimeout(function () {
	        listenForCredentials(endpointKey, popup, provider, resolve, reject);
	      }, 0);
	    }
	  }
	}

	function authenticate(_ref3) {
	  var endpointKey = _ref3.endpointKey,
	      provider = _ref3.provider,
	      url = _ref3.url,
	      _ref3$tab = _ref3.tab,
	      tab = _ref3$tab === undefined ? false : _ref3$tab;

	  var name = tab ? "_blank" : provider;
	  var popup = openPopup(provider, url, name);
	  return listenForCredentials(endpointKey, popup, provider);
	}

	function oAuthSignInStart(provider, endpoint) {
	  return { type: OAUTH_SIGN_IN_START, provider: provider, endpoint: endpoint };
	}
	function oAuthSignInComplete(user, endpoint) {
	  return { type: OAUTH_SIGN_IN_COMPLETE, user: user, endpoint: endpoint };
	}
	function oAuthSignInError(errors, endpoint) {
	  return { type: OAUTH_SIGN_IN_ERROR, errors: errors, endpoint: endpoint };
	}
	function oAuthSignIn(_ref4) {
	  var provider = _ref4.provider,
	      params = _ref4.params,
	      endpointKey = _ref4.endpointKey;

	  return function (dispatch) {
	    // save previous endpoint key in case of failure
	    var prevEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

	    // necessary for `fetch` to recognize the response as an api request
	    (0, _sessionStorage.setCurrentEndpointKey)(endpointKey);
	    dispatch((0, _configure.storeCurrentEndpointKey)(endpointKey));

	    var currentEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

	    dispatch(oAuthSignInStart(provider, currentEndpointKey));

	    var url = (0, _sessionStorage.getOAuthUrl)({ provider: provider, params: params, currentEndpointKey: currentEndpointKey });

	    return authenticate({ endpointKey: endpointKey, provider: provider, url: url }).then(function (user) {
	      return dispatch(oAuthSignInComplete(user, currentEndpointKey));
	    }).catch(function (_ref5) {
	      var errors = _ref5.errors;

	      // revert endpoint key to what it was before failed request
	      (0, _sessionStorage.setCurrentEndpointKey)(prevEndpointKey);
	      dispatch((0, _configure.storeCurrentEndpointKey)(prevEndpointKey));
	      dispatch(oAuthSignInError(errors, currentEndpointKey));
	      throw errors;
	    });
	  };
	}

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = openPopup;
	/* istanbul ignore next */
	var settings = "scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no";

	/* istanbul ignore next */
	function getPopupOffset(_ref) {
	  var width = _ref.width,
	      height = _ref.height;

	  var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
	  var wTop = window.screenTop ? window.screenTop : window.screenY;

	  var left = wLeft + window.innerWidth / 2 - width / 2;
	  var top = wTop + window.innerHeight / 2 - height / 2;

	  return { top: top, left: left };
	}

	/* istanbul ignore next */
	function getPopupSize(provider) {
	  switch (provider) {
	    case "facebook":
	      return { width: 580, height: 400 };

	    case "google":
	      return { width: 452, height: 633 };

	    case "github":
	      return { width: 1020, height: 618 };

	    case "linkedin":
	      return { width: 527, height: 582 };

	    case "twitter":
	      return { width: 495, height: 645 };

	    case "live":
	      return { width: 500, height: 560 };

	    case "yahoo":
	      return { width: 559, height: 519 };

	    default:
	      return { width: 1020, height: 618 };
	  }
	}

	/* istanbul ignore next */
	function getPopupDimensions(provider) {
	  var _getPopupSize = getPopupSize(provider),
	      width = _getPopupSize.width,
	      height = _getPopupSize.height;

	  var _getPopupOffset = getPopupOffset({ width: width, height: height }),
	      top = _getPopupOffset.top,
	      left = _getPopupOffset.left;

	  return "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
	}

	/* istanbul ignore next */
	function openPopup(provider, url, name) {
	  return window.open(url, name, settings + "," + getPopupDimensions(provider));
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.REQUEST_PASSWORD_RESET_FORM_UPDATE = exports.REQUEST_PASSWORD_RESET_ERROR = exports.REQUEST_PASSWORD_RESET_COMPLETE = exports.REQUEST_PASSWORD_RESET_START = undefined;
	exports.requestPasswordResetFormUpdate = requestPasswordResetFormUpdate;
	exports.requestPasswordResetStart = requestPasswordResetStart;
	exports.requestPasswordResetComplete = requestPasswordResetComplete;
	exports.requestPasswordResetError = requestPasswordResetError;
	exports.requestPasswordReset = requestPasswordReset;

	var _sessionStorage = __webpack_require__(76);

	var _handleFetchResponse = __webpack_require__(86);

	var _extend = __webpack_require__(59);

	var _extend2 = _interopRequireDefault(_extend);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_PASSWORD_RESET_START = exports.REQUEST_PASSWORD_RESET_START = "REQUEST_PASSWORD_RESET_START";
	var REQUEST_PASSWORD_RESET_COMPLETE = exports.REQUEST_PASSWORD_RESET_COMPLETE = "REQUEST_PASSWORD_RESET_COMPLETE";
	var REQUEST_PASSWORD_RESET_ERROR = exports.REQUEST_PASSWORD_RESET_ERROR = "REQUEST_PASSWORD_RESET_ERROR";
	var REQUEST_PASSWORD_RESET_FORM_UPDATE = exports.REQUEST_PASSWORD_RESET_FORM_UPDATE = "REQUEST_PASSWORD_RESET_FORM_UPDATE";

	function requestPasswordResetFormUpdate(endpoint, key, value) {
	  return { type: REQUEST_PASSWORD_RESET_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
	}
	function requestPasswordResetStart(endpoint) {
	  return { type: REQUEST_PASSWORD_RESET_START, endpoint: endpoint };
	}
	function requestPasswordResetComplete(endpoint, message) {
	  return { type: REQUEST_PASSWORD_RESET_COMPLETE, endpoint: endpoint, message: message };
	}
	function requestPasswordResetError(endpoint, errors) {
	  return { type: REQUEST_PASSWORD_RESET_ERROR, endpoint: endpoint, errors: errors };
	}
	function requestPasswordReset(body, endpoint) {
	  return function (dispatch) {
	    dispatch(requestPasswordResetStart(endpoint));

	    return (0, _fetch2.default)((0, _sessionStorage.getPasswordResetRequestUrl)(endpoint), {
	      headers: {
	        "Accept": "application/json",
	        "Content-Type": "application/json"
	      },
	      method: "post",
	      body: JSON.stringify((0, _extend2.default)(body, {
	        redirect_url: (0, _sessionStorage.getPasswordResetRedirectUrl)(endpoint)
	      }))
	    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
	      var message = _ref.message;
	      return dispatch(requestPasswordResetComplete(endpoint, message));
	    }).catch(function (_ref2) {
	      var errors = _ref2.errors;
	      return dispatch(requestPasswordResetError(endpoint, errors));
	    });
	  };
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UPDATE_PASSWORD_FORM_UPDATE = exports.UPDATE_PASSWORD_ERROR = exports.UPDATE_PASSWORD_COMPLETE = exports.UPDATE_PASSWORD_START = undefined;
	exports.updatePasswordFormUpdate = updatePasswordFormUpdate;
	exports.updatePasswordStart = updatePasswordStart;
	exports.updatePasswordComplete = updatePasswordComplete;
	exports.updatePasswordError = updatePasswordError;
	exports.updatePassword = updatePassword;

	var _sessionStorage = __webpack_require__(76);

	var _handleFetchResponse = __webpack_require__(86);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UPDATE_PASSWORD_START = exports.UPDATE_PASSWORD_START = "UPDATE_PASSWORD_START";
	var UPDATE_PASSWORD_COMPLETE = exports.UPDATE_PASSWORD_COMPLETE = "UPDATE_PASSWORD_COMPLETE";
	var UPDATE_PASSWORD_ERROR = exports.UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR";
	var UPDATE_PASSWORD_FORM_UPDATE = exports.UPDATE_PASSWORD_FORM_UPDATE = "UPDATE_PASSWORD_FORM_UPDATE";

	function updatePasswordFormUpdate(endpoint, key, value) {
	  return { type: UPDATE_PASSWORD_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
	}
	function updatePasswordStart(endpoint) {
	  return { type: UPDATE_PASSWORD_START, endpoint: endpoint };
	}
	function updatePasswordComplete(endpoint, user) {
	  return { type: UPDATE_PASSWORD_COMPLETE, endpoint: endpoint, user: user };
	}
	function updatePasswordError(endpoint, errors) {
	  return { type: UPDATE_PASSWORD_ERROR, endpoint: endpoint, errors: errors };
	}
	function updatePassword(body, endpoint) {
	  return function (dispatch) {
	    dispatch(updatePasswordStart(endpoint));

	    return (0, _fetch2.default)((0, _sessionStorage.getPasswordUpdateUrl)(endpoint), {
	      headers: {
	        "Accept": "application/json",
	        "Content-Type": "application/json"
	      },
	      method: "put",
	      body: JSON.stringify(body)
	    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
	      var user = _ref.user;
	      return dispatch(updatePasswordComplete(endpoint, user));
	    }).catch(function (_ref2) {
	      var errors = _ref2.errors;
	      return dispatch(updatePasswordError(endpoint, errors));
	    });
	  };
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UPDATE_PASSWORD_MODAL_FORM_UPDATE = exports.UPDATE_PASSWORD_MODAL_ERROR = exports.UPDATE_PASSWORD_MODAL_COMPLETE = exports.UPDATE_PASSWORD_MODAL_START = undefined;
	exports.updatePasswordModalFormUpdate = updatePasswordModalFormUpdate;
	exports.updatePasswordModalStart = updatePasswordModalStart;
	exports.updatePasswordModalComplete = updatePasswordModalComplete;
	exports.updatePasswordModalError = updatePasswordModalError;
	exports.updatePasswordModal = updatePasswordModal;

	var _sessionStorage = __webpack_require__(76);

	var _handleFetchResponse = __webpack_require__(86);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UPDATE_PASSWORD_MODAL_START = exports.UPDATE_PASSWORD_MODAL_START = "UPDATE_PASSWORD_MODAL_START";
	var UPDATE_PASSWORD_MODAL_COMPLETE = exports.UPDATE_PASSWORD_MODAL_COMPLETE = "UPDATE_PASSWORD_MODAL_COMPLETE";
	var UPDATE_PASSWORD_MODAL_ERROR = exports.UPDATE_PASSWORD_MODAL_ERROR = "UPDATE_PASSWORD_MODAL_ERROR";
	var UPDATE_PASSWORD_MODAL_FORM_UPDATE = exports.UPDATE_PASSWORD_MODAL_FORM_UPDATE = "UPDATE_PASSWORD_MODAL_FORM_UPDATE";

	function updatePasswordModalFormUpdate(endpoint, key, value) {
	  return { type: UPDATE_PASSWORD_MODAL_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
	}
	function updatePasswordModalStart(endpoint) {
	  return { type: UPDATE_PASSWORD_MODAL_START, endpoint: endpoint };
	}
	function updatePasswordModalComplete(endpoint, user) {
	  return { type: UPDATE_PASSWORD_MODAL_COMPLETE, endpoint: endpoint, user: user };
	}
	function updatePasswordModalError(endpoint, errors) {
	  return { type: UPDATE_PASSWORD_MODAL_ERROR, endpoint: endpoint, errors: errors };
	}
	function updatePasswordModal(body, endpointKey) {
	  return function (dispatch) {
	    dispatch(updatePasswordModalStart(endpointKey));

	    return (0, _fetch2.default)((0, _sessionStorage.getPasswordUpdateUrl)(endpointKey), {
	      headers: {
	        "Accept": "application/json",
	        "Content-Type": "application/json"
	      },
	      method: "put",
	      body: JSON.stringify(body)
	    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
	      var user = _ref.user;
	      return dispatch(updatePasswordModalComplete(endpointKey, user));
	    }).catch(function (_ref2) {
	      var errors = _ref2.errors;
	      return dispatch(updatePasswordModalError(endpointKey, errors));
	    });
	  };
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DESTROY_ACCOUNT_ERROR = exports.DESTROY_ACCOUNT_COMPLETE = exports.DESTROY_ACCOUNT_START = undefined;
	exports.destroyAccountStart = destroyAccountStart;
	exports.destroyAccountComplete = destroyAccountComplete;
	exports.destroyAccountError = destroyAccountError;
	exports.destroyAccount = destroyAccount;

	var _sessionStorage = __webpack_require__(76);

	var _handleFetchResponse = __webpack_require__(86);

	var _configure = __webpack_require__(68);

	var _fetch = __webpack_require__(74);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DESTROY_ACCOUNT_START = exports.DESTROY_ACCOUNT_START = "DESTROY_ACCOUNT_START";
	var DESTROY_ACCOUNT_COMPLETE = exports.DESTROY_ACCOUNT_COMPLETE = "DESTROY_ACCOUNT_COMPLETE";
	var DESTROY_ACCOUNT_ERROR = exports.DESTROY_ACCOUNT_ERROR = "DESTROY_ACCOUNT_ERROR";

	function destroyAccountStart(endpoint) {
	  return { type: DESTROY_ACCOUNT_START, endpoint: endpoint };
	}
	function destroyAccountComplete(message, endpoint) {
	  return { type: DESTROY_ACCOUNT_COMPLETE, endpoint: endpoint, message: message };
	}
	function destroyAccountError(errors, endpoint) {
	  return { type: DESTROY_ACCOUNT_ERROR, endpoint: endpoint, errors: errors };
	}
	function destroyAccount(endpoint) {
	  return function (dispatch) {
	    dispatch(destroyAccountStart(endpoint));

	    return (0, _fetch2.default)((0, _sessionStorage.getDestroyAccountUrl)(endpoint), { method: "delete" }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
	      var message = _ref.message;

	      dispatch(destroyAccountComplete(message, endpoint));

	      // revert current session endpoint to default
	      var defaultEndpointKey = (0, _sessionStorage.getDefaultEndpointKey)();

	      // set in store
	      dispatch((0, _configure.storeCurrentEndpointKey)(defaultEndpointKey));

	      // and in session
	      (0, _sessionStorage.setCurrentEndpointKey)(defaultEndpointKey);
	    }).catch(function (_ref2) {
	      var errors = _ref2.errors;
	      return dispatch(destroyAccountError(errors, endpoint));
	    });
	  };
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _authenticate = __webpack_require__(70);

	var A = _interopRequireWildcard(_authenticate);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = _immutable2.default.fromJS({
	  loading: false,
	  valid: false,
	  errors: null
	});

	exports.default = (0, _reduxImmutablejs.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, A.AUTHENTICATE_START, function (state) {
	  return state.set("loading", true);
	}), _defineProperty(_createReducer, A.AUTHENTICATE_COMPLETE, function (state) {
	  return state.merge({
	    loading: false,
	    errors: null,
	    valid: true
	  });
	}), _defineProperty(_createReducer, A.AUTHENTICATE_ERROR, function (state) {
	  return state.merge({
	    loading: false,
	    errors: "Invalid token",
	    valid: false
	  });
	}), _createReducer));

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = require("redux-immutablejs");

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _configure = __webpack_require__(68);

	var A = _interopRequireWildcard(_configure);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = _immutable2.default.fromJS({
	  loading: true,
	  errors: null,
	  config: null,
	  endpointKeys: null,
	  defaultEndpointKey: null,
	  currentEndpointKey: null
	});

	exports.default = (0, _reduxImmutablejs.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, A.CONFIGURE_START, function (state) {
	  return state.set("loading", true);
	}), _defineProperty(_createReducer, A.STORE_CURRENT_ENDPOINT_KEY, function (state, _ref) {
	  var currentEndpointKey = _ref.currentEndpointKey;
	  return state.merge({ currentEndpointKey: currentEndpointKey });
	}), _defineProperty(_createReducer, A.SET_ENDPOINT_KEYS, function (state, _ref2) {
	  var endpointKeys = _ref2.endpointKeys,
	      defaultEndpointKey = _ref2.defaultEndpointKey,
	      currentEndpointKey = _ref2.currentEndpointKey;
	  return state.merge({
	    endpointKeys: endpointKeys, defaultEndpointKey: defaultEndpointKey, currentEndpointKey: currentEndpointKey
	  });
	}), _defineProperty(_createReducer, A.CONFIGURE_COMPLETE, function (state, _ref3) {
	  var config = _ref3.config;
	  return state.merge({
	    loading: false,
	    errors: null,
	    config: config
	  });
	}), _defineProperty(_createReducer, A.CONFIGURE_ERROR, function (state, _ref4) {
	  var errors = _ref4.errors;
	  return state.merge({
	    loading: false,
	    errors: errors
	  });
	}), _createReducer));

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _sessionStorage = __webpack_require__(76);

	var _authenticate = __webpack_require__(70);

	var authActions = _interopRequireWildcard(_authenticate);

	var _emailSignIn = __webpack_require__(85);

	var _emailSignUp = __webpack_require__(88);

	var _signOut = __webpack_require__(87);

	var _oauthSignIn = __webpack_require__(89);

	var _destroyAccount = __webpack_require__(94);

	var _server = __webpack_require__(72);

	var ssActions = _interopRequireWildcard(_server);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = _immutable2.default.fromJS({
	  attributes: null,
	  isSignedIn: false,
	  firstTimeLogin: false,
	  mustResetPassword: false,
	  endpointKey: null
	});

	exports.default = (0, _reduxImmutablejs.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, authActions.AUTHENTICATE_COMPLETE, function (state, _ref) {
	  var user = _ref.user;
	  return state.merge({
	    attributes: user,
	    isSignedIn: true,
	    endpointKey: (0, _sessionStorage.getCurrentEndpointKey)()
	  });
	}), _defineProperty(_createReducer, ssActions.SS_TOKEN_VALIDATION_COMPLETE, function (state, _ref2) {
	  var user = _ref2.user,
	      mustResetPassword = _ref2.mustResetPassword,
	      firstTimeLogin = _ref2.firstTimeLogin;

	  return state.merge({
	    attributes: user,
	    isSignedIn: true,
	    firstTimeLogin: firstTimeLogin,
	    mustResetPassword: mustResetPassword
	  });
	}), _defineProperty(_createReducer, _configure.STORE_CURRENT_ENDPOINT_KEY, function (state, _ref3) {
	  var currentEndpointKey = _ref3.currentEndpointKey;
	  return state.set("endpointKey", currentEndpointKey);
	}), _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref4) {
	  var currentEndpointKey = _ref4.currentEndpointKey;
	  return state.set("endpointKey", currentEndpointKey);
	}), _defineProperty(_createReducer, _emailSignIn.EMAIL_SIGN_IN_COMPLETE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint,
	      user = _ref5.user;
	  return state.merge({
	    attributes: user.data,
	    isSignedIn: true,
	    endpointKey: endpoint
	  });
	}), _defineProperty(_createReducer, _emailSignUp.EMAIL_SIGN_UP_COMPLETE, function (state, _ref6) {
	  var endpoint = _ref6.endpoint,
	      user = _ref6.user;

	  // if registration does not require confirmation, user will be signed in at
	  // this point.
	  return user.uid ? state.merge({
	    attributes: user,
	    isSignedIn: true,
	    endpointKey: endpoint
	  }) : state;
	}), _defineProperty(_createReducer, _oauthSignIn.OAUTH_SIGN_IN_COMPLETE, function (state, _ref7) {
	  var endpoint = _ref7.endpoint,
	      user = _ref7.user;
	  return state.merge({
	    attributes: user,
	    isSignedIn: true,
	    endpointKey: endpoint
	  });
	}), _defineProperty(_createReducer, ssActions.SS_AUTH_TOKEN_UPDATE, function (state, _ref8) {
	  var user = _ref8.user,
	      mustResetPassword = _ref8.mustResetPassword,
	      firstTimeLogin = _ref8.firstTimeLogin;

	  return state.merge({
	    mustResetPassword: mustResetPassword,
	    firstTimeLogin: firstTimeLogin,
	    isSignedIn: !!user,
	    attributes: user
	  });
	}), _defineProperty(_createReducer, authActions.AUTHENTICATE_FAILURE, function (state) {
	  return state.merge(initialState);
	}), _defineProperty(_createReducer, ssActions.SS_TOKEN_VALIDATION_ERROR, function (state) {
	  return state.merge(initialState);
	}), _defineProperty(_createReducer, _signOut.SIGN_OUT_COMPLETE, function (state) {
	  return state.merge(initialState);
	}), _defineProperty(_createReducer, _signOut.SIGN_OUT_ERROR, function (state) {
	  return state.merge(initialState);
	}), _defineProperty(_createReducer, _destroyAccount.DESTROY_ACCOUNT_COMPLETE, function (state) {
	  return state.merge(initialState);
	}), _createReducer));

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _ui = __webpack_require__(71);

	var uiActions = _interopRequireWildcard(_ui);

	var _emailSignIn = __webpack_require__(85);

	var emailSignInActions = _interopRequireWildcard(_emailSignIn);

	var _emailSignUp = __webpack_require__(88);

	var emailSignUpActions = _interopRequireWildcard(_emailSignUp);

	var _signOut = __webpack_require__(87);

	var signOutActions = _interopRequireWildcard(_signOut);

	var _requestPasswordReset = __webpack_require__(91);

	var requestPasswordResetActions = _interopRequireWildcard(_requestPasswordReset);

	var _oauthSignIn = __webpack_require__(89);

	var oAuthSignInActions = _interopRequireWildcard(_oauthSignIn);

	var _updatePassword = __webpack_require__(92);

	var updatePasswordActions = _interopRequireWildcard(_updatePassword);

	var _destroyAccount = __webpack_require__(94);

	var destroyAccountActions = _interopRequireWildcard(_destroyAccount);

	var _updatePasswordModal = __webpack_require__(93);

	var updatePasswordModalActions = _interopRequireWildcard(_updatePasswordModal);

	var _server = __webpack_require__(72);

	var serverActions = _interopRequireWildcard(_server);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = _immutable2.default.fromJS({
	  emailSignInSuccessModalVisible: false,
	  emailSignInErrorModalVisible: false,
	  oAuthSignInSuccessModalVisible: false,
	  oAuthSignInErrorModalVisible: false,
	  oAuthSignInLoadingProvider: null,
	  signOutSuccessModalVisible: false,
	  signOutErrorModalVisible: false,
	  emailSignUpSuccessModalVisible: false,
	  emailSignUpAddress: null,
	  firstTimeLoginSuccessModalVisible: false,
	  firstTimeLoginErrorModalVisible: false,
	  requestPasswordResetSuccessModalVisible: false,
	  requestPasswordResetErrorModalVisible: false,
	  requestPasswordResetSuccessMessage: null,
	  updatePasswordSuccessModalVisible: false,
	  updatePasswordErrorModalVisible: false,
	  destroyAccountSuccessModalVisible: false,
	  destroyAccountErrorModalVisible: false,
	  destroyAccountMessage: null,
	  passwordResetSuccessModalVisible: false,
	  passwordResetErrorModalVisible: false
	});

	exports.default = (0, _reduxImmutablejs.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, emailSignInActions.EMAIL_SIGN_IN_COMPLETE, function (state) {
	  return state.set("emailSignInSuccessModalVisible", true);
	}), _defineProperty(_createReducer, emailSignInActions.EMAIL_SIGN_IN_ERROR, function (state) {
	  return state.set("emailSignInErrorModalVisible", true);
	}), _defineProperty(_createReducer, oAuthSignInActions.OAUTH_SIGN_IN_COMPLETE, function (state) {
	  return state.merge({
	    oAuthSignInSuccessModalVisible: true,
	    oAuthSignInLoadingProvider: null
	  });
	}), _defineProperty(_createReducer, oAuthSignInActions.OAUTH_SIGN_IN_ERROR, function (state) {
	  return state.merge({
	    oAuthSignInErrorModalVisible: true,
	    oAuthSignInLoadingProvider: null
	  });
	}), _defineProperty(_createReducer, oAuthSignInActions.OAUTH_SIGN_IN_START, function (state, _ref) {
	  var provider = _ref.provider;
	  return state.merge({
	    oAuthSignInLoadingProvider: provider
	  });
	}), _defineProperty(_createReducer, uiActions.HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL, function (state) {
	  return state.set("emailSignInSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_EMAIL_SIGN_IN_ERROR_MODAL, function (state) {
	  return state.set("emailSignInErrorModalVisible", false);
	}), _defineProperty(_createReducer, signOutActions.SIGN_OUT_COMPLETE, function (state) {
	  return state.set("signOutSuccessModalVisible", true);
	}), _defineProperty(_createReducer, signOutActions.SIGN_OUT_ERROR, function (state) {
	  return state.set("signOutErrorModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_SIGN_OUT_SUCCESS_MODAL, function (state) {
	  return state.set("signOutSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_SIGN_OUT_ERROR_MODAL, function (state) {
	  return state.set("signOutErrorModalVisible", false);
	}), _defineProperty(_createReducer, emailSignUpActions.EMAIL_SIGN_UP_COMPLETE, function (state, _ref2) {
	  var user = _ref2.user;
	  return state.merge({
	    emailSignUpSuccessModalVisible: true,
	    emailSignUpAddress: user.email
	  });
	}), _defineProperty(_createReducer, emailSignUpActions.EMAIL_SIGN_UP_ERROR, function (state) {
	  return state.set("emailSignUpErrorModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL, function (state) {
	  return state.merge({
	    emailSignUpSuccessModalVisible: false,
	    emailSignUpAddress: null
	  });
	}), _defineProperty(_createReducer, uiActions.HIDE_EMAIL_SIGN_UP_ERROR_MODAL, function (state) {
	  return state.set("emailSignUpErrorModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL, function (state) {
	  return state.set("firstTimeLoginSuccessModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL, function (state) {
	  return state.set("firstTimeLoginSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_PASSWORD_RESET_SUCCESS_MODAL, function (state) {
	  return state.set("passwordResetSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.SHOW_PASSWORD_RESET_SUCCESS_MODAL, function (state) {
	  return state.set("passwordResetSuccessModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.SHOW_FIRST_TIME_LOGIN_ERROR_MODAL, function (state) {
	  return state.set("firstTimeLoginErrorModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_FIRST_TIME_LOGIN_ERROR_MODAL, function (state) {
	  return state.set("firstTimeLoginErrorModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_PASSWORD_RESET_ERROR_MODAL, function (state) {
	  return state.set("passwordResetErrorModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.SHOW_PASSWORD_RESET_ERROR_MODAL, function (state) {
	  return state.set("passwordResetErrorModalVisible", true);
	}), _defineProperty(_createReducer, requestPasswordResetActions.REQUEST_PASSWORD_RESET_COMPLETE, function (state, _ref3) {
	  var message = _ref3.message;

	  return state.merge({
	    requestPasswordResetSuccessModalVisible: true,
	    requestPasswordResetSuccessMessage: message
	  });
	}), _defineProperty(_createReducer, requestPasswordResetActions.REQUEST_PASSWORD_RESET_ERROR, function (state) {
	  return state.set("requestPasswordResetErrorModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL, function (state) {
	  return state.merge({
	    requestPasswordResetSuccessModalVisible: false,
	    requestPasswordResetSuccessMessage: null
	  });
	}), _defineProperty(_createReducer, uiActions.HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL, function (state) {
	  return state.set("requestPasswordResetErrorModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL, function (state) {
	  return state.set("oAuthSignInSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_OAUTH_SIGN_IN_ERROR_MODAL, function (state) {
	  return state.set("oAuthSignInErrorModalVisible", false);
	}), _defineProperty(_createReducer, updatePasswordActions.UPDATE_PASSWORD_COMPLETE, function (state) {
	  return state.set("updatePasswordSuccessModalVisible", true);
	}), _defineProperty(_createReducer, updatePasswordActions.UPDATE_PASSWORD_ERROR, function (state) {
	  return state.set("updatePasswordErrorModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_UPDATE_PASSWORD_SUCCESS_MODAL, function (state) {
	  return state.set("updatePasswordSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_UPDATE_PASSWORD_ERROR_MODAL, function (state) {
	  return state.set("updatePasswordErrorModalVisible", false);
	}), _defineProperty(_createReducer, destroyAccountActions.DESTROY_ACCOUNT_COMPLETE, function (state, _ref4) {
	  var message = _ref4.message;
	  return state.merge({
	    destroyAccountSuccessModalVisible: true,
	    destroyAccountMessage: message
	  });
	}), _defineProperty(_createReducer, destroyAccountActions.DESTROY_ACCOUNT_ERROR, function (state) {
	  return state.set("destroyAccountErrorModalVisible", true);
	}), _defineProperty(_createReducer, uiActions.HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL, function (state) {
	  return state.merge({
	    destroyAccountSuccessModalVisible: false,
	    destroyAccountMessage: null
	  });
	}), _defineProperty(_createReducer, uiActions.HIDE_DESTROY_ACCOUNT_ERROR_MODAL, function (state) {
	  return state.set("destroyAccountErrorModalVisible", false);
	}), _defineProperty(_createReducer, serverActions.SS_AUTH_TOKEN_UPDATE, function (state, _ref5) {
	  var mustResetPassword = _ref5.mustResetPassword,
	      firstTimeLogin = _ref5.firstTimeLogin;
	  return state.merge({
	    passwordResetSuccessModalVisible: mustResetPassword,
	    firstTimeLoginSuccessModalVisible: firstTimeLogin
	  });
	}), _defineProperty(_createReducer, uiActions.HIDE_PASSWORD_RESET_SUCCESS_MODAL, function (state) {
	  return state.set("passwordResetSuccessModalVisible", false);
	}), _defineProperty(_createReducer, uiActions.HIDE_PASSWORD_RESET_ERROR_MODAL, function (state) {
	  return state.set("passwordResetSuccessModalVisible", false);
	}), _defineProperty(_createReducer, updatePasswordModalActions.UPDATE_PASSWORD_MODAL_COMPLETE, function (state) {
	  return state.merge({
	    passwordResetSuccessModalVisible: false,
	    updatePasswordSuccessModalVisible: true
	  });
	}), _createReducer));

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _emailSignIn = __webpack_require__(85);

	var A = _interopRequireWildcard(_emailSignIn);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null,
	  form: {}
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_IN_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_IN_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_IN_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_IN_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint,
	      key = _ref5.key,
	      value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _emailSignUp = __webpack_require__(88);

	var A = _interopRequireWildcard(_emailSignUp);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null,
	  form: {
	    password_confirmation: ""
	  }
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.merge(_defineProperty({}, endpoint, {
	    loading: false,
	    form: state.getIn([endpoint, "form"]),
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint,
	      key = _ref5.key,
	      value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _oauthSignIn = __webpack_require__(89);

	var A = _interopRequireWildcard(_oauthSignIn);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.OAUTH_SIGN_IN_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.OAUTH_SIGN_IN_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: null
	  }));
	}), _defineProperty(_createReducer, A.OAUTH_SIGN_IN_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _createReducer));

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _requestPasswordReset = __webpack_require__(91);

	var A = _interopRequireWildcard(_requestPasswordReset);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null,
	  form: {}
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.REQUEST_PASSWORD_RESET_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.REQUEST_PASSWORD_RESET_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.REQUEST_PASSWORD_RESET_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.REQUEST_PASSWORD_RESET_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint,
	      key = _ref5.key,
	      value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _updatePassword = __webpack_require__(92);

	var A = _interopRequireWildcard(_updatePassword);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null,
	  form: {}
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint,
	      key = _ref5.key,
	      value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _updatePasswordModal = __webpack_require__(93);

	var A = _interopRequireWildcard(_updatePasswordModal);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null,
	  form: {}
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_MODAL_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_MODAL_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_MODAL_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_MODAL_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint,
	      key = _ref5.key,
	      value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _server = __webpack_require__(72);

	var A = _interopRequireWildcard(_server);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = _immutable2.default.fromJS({
	  user: null,
	  headers: null,
	  firstTimeLogin: false,
	  mustResetPassword: false
	});

	exports.default = (0, _reduxImmutablejs.createReducer)(initialState, _defineProperty({}, A.SS_AUTH_TOKEN_UPDATE, function (state, _ref) {
	  var _ref$user = _ref.user,
	      user = _ref$user === undefined ? null : _ref$user,
	      _ref$headers = _ref.headers,
	      headers = _ref$headers === undefined ? null : _ref$headers,
	      _ref$mustResetPasswor = _ref.mustResetPassword,
	      mustResetPassword = _ref$mustResetPasswor === undefined ? false : _ref$mustResetPasswor,
	      _ref$firstTimeLogin = _ref.firstTimeLogin,
	      firstTimeLogin = _ref$firstTimeLogin === undefined ? false : _ref$firstTimeLogin;

	  return state.merge({
	    user: user,
	    headers: headers,
	    mustResetPassword: mustResetPassword,
	    firstTimeLogin: firstTimeLogin
	  });
	}));

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _signOut = __webpack_require__(87);

	var A = _interopRequireWildcard(_signOut);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.SIGN_OUT_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.SIGN_OUT_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: null
	  }));
	}), _defineProperty(_createReducer, A.SIGN_OUT_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _createReducer));

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer;

	var _immutable = __webpack_require__(9);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(96);

	var _destroyAccount = __webpack_require__(94);

	var A = _interopRequireWildcard(_destroyAccount);

	var _configure = __webpack_require__(68);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  loading: false,
	  errors: null
	};

	exports.default = (0, _reduxImmutablejs.createReducer)(_immutable2.default.fromJS({}), (_createReducer = {}, _defineProperty(_createReducer, _configure.SET_ENDPOINT_KEYS, function (state, _ref) {
	  var endpoints = _ref.endpoints;
	  return state.merge(endpoints.reduce(function (coll, k) {
	    coll[k] = _immutable2.default.fromJS(initialState);
	    return coll;
	  }, {}));
	}), _defineProperty(_createReducer, A.DESTROY_ACCOUNT_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.DESTROY_ACCOUNT_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.DESTROY_ACCOUNT_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint,
	      errors = _ref4.errors;
	  return state.merge(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _createReducer));

/***/ }
/******/ ])));