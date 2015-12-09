/******/ (function(modules) { // webpackBootstrap
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
	exports.fetch = exports.TokenBridge = exports.DestroyAccountButton = exports.UpdatePasswordForm = exports.OAuthSignInButton = exports.RequestPasswordResetForm = exports.SignOutButton = exports.EmailSignUpForm = exports.EmailSignInForm = exports.AuthGlobals = exports.verifyAuth = exports.destroyAccount = exports.updatePasswordModal = exports.updatePassword = exports.requestPasswordReset = exports.oAuthSignIn = exports.emailSignUp = exports.signOut = exports.emailSignIn = exports.authenticate = exports.configure = exports.authStateReducer = undefined;

	var _configure = __webpack_require__(5);

	Object.defineProperty(exports, "configure", {
	  enumerable: true,
	  get: function get() {
	    return _configure.configure;
	  }
	});

	var _authenticate = __webpack_require__(25);

	Object.defineProperty(exports, "authenticate", {
	  enumerable: true,
	  get: function get() {
	    return _authenticate.authenticate;
	  }
	});

	var _emailSignIn = __webpack_require__(27);

	Object.defineProperty(exports, "emailSignIn", {
	  enumerable: true,
	  get: function get() {
	    return _emailSignIn.emailSignIn;
	  }
	});

	var _signOut = __webpack_require__(30);

	Object.defineProperty(exports, "signOut", {
	  enumerable: true,
	  get: function get() {
	    return _signOut.signOut;
	  }
	});

	var _emailSignUp = __webpack_require__(32);

	Object.defineProperty(exports, "emailSignUp", {
	  enumerable: true,
	  get: function get() {
	    return _emailSignUp.emailSignUp;
	  }
	});

	var _oauthSignIn = __webpack_require__(28);

	Object.defineProperty(exports, "oAuthSignIn", {
	  enumerable: true,
	  get: function get() {
	    return _oauthSignIn.oAuthSignIn;
	  }
	});

	var _requestPasswordReset = __webpack_require__(33);

	Object.defineProperty(exports, "requestPasswordReset", {
	  enumerable: true,
	  get: function get() {
	    return _requestPasswordReset.requestPasswordReset;
	  }
	});

	var _updatePassword = __webpack_require__(36);

	Object.defineProperty(exports, "updatePassword", {
	  enumerable: true,
	  get: function get() {
	    return _updatePassword.updatePassword;
	  }
	});

	var _updatePasswordModal = __webpack_require__(35);

	Object.defineProperty(exports, "updatePasswordModal", {
	  enumerable: true,
	  get: function get() {
	    return _updatePasswordModal.updatePasswordModal;
	  }
	});

	var _destroyAccount = __webpack_require__(26);

	Object.defineProperty(exports, "destroyAccount", {
	  enumerable: true,
	  get: function get() {
	    return _destroyAccount.destroyAccount;
	  }
	});

	var _ui = __webpack_require__(34);

	for (var _key in _ui) {
	  if (_key === "default") continue;
	  Object.defineProperty(exports, _key, {
	    enumerable: true,
	    get: function get() {
	      return _ui[_key];
	    }
	  });
	}

	var _default = __webpack_require__(90);

	Object.defineProperty(exports, "AuthGlobals", {
	  enumerable: true,
	  get: function get() {
	    return _default.AuthGlobals;
	  }
	});
	Object.defineProperty(exports, "EmailSignInForm", {
	  enumerable: true,
	  get: function get() {
	    return _default.EmailSignInForm;
	  }
	});
	Object.defineProperty(exports, "EmailSignUpForm", {
	  enumerable: true,
	  get: function get() {
	    return _default.EmailSignUpForm;
	  }
	});
	Object.defineProperty(exports, "SignOutButton", {
	  enumerable: true,
	  get: function get() {
	    return _default.SignOutButton;
	  }
	});
	Object.defineProperty(exports, "RequestPasswordResetForm", {
	  enumerable: true,
	  get: function get() {
	    return _default.RequestPasswordResetForm;
	  }
	});
	Object.defineProperty(exports, "OAuthSignInButton", {
	  enumerable: true,
	  get: function get() {
	    return _default.OAuthSignInButton;
	  }
	});
	Object.defineProperty(exports, "UpdatePasswordForm", {
	  enumerable: true,
	  get: function get() {
	    return _default.UpdatePasswordForm;
	  }
	});
	Object.defineProperty(exports, "DestroyAccountButton", {
	  enumerable: true,
	  get: function get() {
	    return _default.DestroyAccountButton;
	  }
	});
	Object.defineProperty(exports, "TokenBridge", {
	  enumerable: true,
	  get: function get() {
	    return _default.TokenBridge;
	  }
	});

	var _authenticate2 = __webpack_require__(40);

	var _authenticate3 = _interopRequireDefault(_authenticate2);

	var _configure2 = __webpack_require__(41);

	var _configure3 = _interopRequireDefault(_configure2);

	var _user = __webpack_require__(52);

	var _user2 = _interopRequireDefault(_user);

	var _ui2 = __webpack_require__(49);

	var _ui3 = _interopRequireDefault(_ui2);

	var _emailSignIn2 = __webpack_require__(43);

	var _emailSignIn3 = _interopRequireDefault(_emailSignIn2);

	var _emailSignUp2 = __webpack_require__(44);

	var _emailSignUp3 = _interopRequireDefault(_emailSignUp2);

	var _oauthSignIn2 = __webpack_require__(45);

	var _oauthSignIn3 = _interopRequireDefault(_oauthSignIn2);

	var _requestPasswordReset2 = __webpack_require__(46);

	var _requestPasswordReset3 = _interopRequireDefault(_requestPasswordReset2);

	var _updatePassword2 = __webpack_require__(51);

	var _updatePassword3 = _interopRequireDefault(_updatePassword2);

	var _updatePasswordModal2 = __webpack_require__(50);

	var _updatePasswordModal3 = _interopRequireDefault(_updatePasswordModal2);

	var _server = __webpack_require__(47);

	var _server2 = _interopRequireDefault(_server);

	var _signOut2 = __webpack_require__(48);

	var _signOut3 = _interopRequireDefault(_signOut2);

	var _destroyAccount2 = __webpack_require__(42);

	var _destroyAccount3 = _interopRequireDefault(_destroyAccount2);

	var _reduxImmutablejs = __webpack_require__(11);

	var _verifyAuth2 = __webpack_require__(39);

	var _verifyAuth3 = _interopRequireDefault(_verifyAuth2);

	var _fetch2 = __webpack_require__(13);

	var _fetch3 = _interopRequireDefault(_fetch2);

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

	/* utils */

	exports.fetch = _fetch3.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ./index;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = react-redux;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = immutable;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.STORE_CURRENT_ENDPOINT_KEY = exports.SET_ENDPOINT_KEYS = undefined;
	exports.setEndpointKeys = setEndpointKeys;
	exports.storeCurrentEndpointKey = storeCurrentEndpointKey;
	exports.configure = configure;

	var _extend = __webpack_require__(19);

	var _extend2 = _interopRequireDefault(_extend);

	var _constants = __webpack_require__(20);

	var C = _interopRequireWildcard(_constants);

	var _authenticate = __webpack_require__(25);

	var _ui = __webpack_require__(34);

	var _server = __webpack_require__(29);

	var _clientSettings = __webpack_require__(53);

	var _sessionStorage = __webpack_require__(12);

	var _verifyAuth = __webpack_require__(39);

	var _verifyAuth2 = _interopRequireDefault(_verifyAuth);

	var _parseUrl = __webpack_require__(37);

	var _parseUrl2 = _interopRequireDefault(_parseUrl);

	var _reduxRouter = __webpack_require__(140);

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
	  var endpoint = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  return function (dispatch) {
	    // don't render anything for OAuth redirects
	    if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
	      return Promise.resolve({ blank: true });
	    }

	    dispatch((0, _authenticate.authenticateStart)());

	    var promise = undefined,
	        firstTimeLogin = undefined,
	        mustResetPassword = undefined,
	        user = undefined,
	        headers = undefined;

	    if (settings.isServer) {
	      promise = (0, _verifyAuth2.default)(endpoint, settings).then(function (_ref) {
	        var user = _ref.user;
	        var headers = _ref.headers;
	        var firstTimeLogin = _ref.firstTimeLogin;
	        var mustResetPassword = _ref.mustResetPassword;
	        var currentEndpoint = _ref.currentEndpoint;
	        var currentEndpointKey = _ref.currentEndpointKey;
	        var defaultEndpointKey = _ref.defaultEndpointKey;

	        dispatch((0, _server.ssAuthTokenUpdate)({
	          headers: headers,
	          user: user,
	          firstTimeLogin: firstTimeLogin,
	          mustResetPassword: mustResetPassword
	        }));

	        dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));

	        return user;
	      }).catch(function (_ref2) {
	        var reason = _ref2.reason;
	        var firstTimeLogin = _ref2.firstTimeLogin;
	        var mustResetPassword = _ref2.mustResetPassword;
	        var currentEndpoint = _ref2.currentEndpoint;
	        var defaultEndpointKey = _ref2.defaultEndpointKey;

	        dispatch((0, _server.ssAuthTokenUpdate)({ firstTimeLogin: firstTimeLogin, mustResetPassword: mustResetPassword }));
	        dispatch(setEndpointKeys(Object.keys(currentEndpoint || {}), null, defaultEndpointKey));
	        return Promise.reject({ reason: reason });
	      });
	    } else {
	      // if the authentication happened server-side, find the resulting auth
	      // credentials that were injected into the dom.
	      var tokenBridge = document.getElementById("token-bridge");

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
	      }

	      var _getRedirectInfo = (0, _parseUrl2.default)(window.location);

	      var authRedirectPath = _getRedirectInfo.authRedirectPath;
	      var authRedirectHeaders = _getRedirectInfo.authRedirectHeaders;

	      if (authRedirectPath) {
	        dispatch((0, _reduxRouter.pushState)(null, authRedirectPath));
	      }

	      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
	        settings.initialCredentials = (0, _extend2.default)({}, settings.initialCredentials, authRedirectHeaders);
	      }

	      // if tokens were invalidated by server, make sure to clear browser
	      // credentials
	      if (!settings.initialCredentials) {
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
	      var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var reason = _ref3.reason;

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
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcDialog = __webpack_require__(139);

	var _rcDialog2 = _interopRequireDefault(_rcDialog);

	var _ErrorList = __webpack_require__(85);

	var _ErrorList2 = _interopRequireDefault(_ErrorList);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseModal = (function (_React$Component) {
	  _inherits(BaseModal, _React$Component);

	  function BaseModal() {
	    _classCallCheck(this, BaseModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseModal).apply(this, arguments));
	  }

	  _createClass(BaseModal, [{
	    key: "close",
	    value: function close() {
	      this.props.dispatch(this.props.closeAction());
	    }
	  }, {
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "getErrorList",
	    value: function getErrorList() {
	      var _props$errorAddr = _toArray(this.props.errorAddr);

	      var base = _props$errorAddr[0];

	      var rest = _props$errorAddr.slice(1);

	      return _react2.default.createElement(_ErrorList2.default, { errors: this.props.auth.getIn([base, this.getEndpoint()].concat(_toConsumableArray(rest))) });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var body = this.props.errorAddr ? this.getErrorList() : this.props.children;

	      return this.props.show ? _react2.default.createElement(
	        _rcDialog2.default,
	        {
	          visible: this.props.show,
	          className: "redux-auth-modal " + this.props.containerClass,
	          title: this.props.title,
	          onClose: this.close.bind(this) },
	        _react2.default.createElement(
	          "div",
	          { className: "redux-auth-modal-body" },
	          body
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "redux-auth-modal-footer" },
	          _react2.default.createElement(
	            "button",
	            {
	              onClick: this.close.bind(this),
	              className: this.props.containerClass + "-close" },
	            this.props.closeBtnLabel
	          )
	        )
	      ) : _react2.default.createElement("span", null);
	    }
	  }]);

	  return BaseModal;
	})(_react2.default.Component);

	BaseModal.propTypes = {
	  show: _react.PropTypes.bool,
	  errorAddr: _react.PropTypes.array,
	  closeBtnLabel: _react.PropTypes.string,
	  closeAction: _react.PropTypes.func
	};
	BaseModal.defaultProps = {
	  show: false,
	  errorAddr: null,
	  closeBtnLabel: "Ok"
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(BaseModal);

/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = react-bootstrap;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = redux-immutablejs;

/***/ },
/* 12 */
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
	exports.persistData = persistData;
	exports.retrieveData = retrieveData;

	var _jsCookie = __webpack_require__(136);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var _constants = __webpack_require__(20);

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
	    _jsCookie2.default.remove(key, {
	      path: root.authState.currentSettings.cookiePath || "/"
	    });
	  }
	}

	function unescapeQuotes(val) {
	  return val && val.replace(/("|')/g, "");
	};

	function getInitialEndpointKey() {
	  return unescapeQuotes(_jsCookie2.default.get(C.SAVED_CONFIG_KEY) || root.localStorage && root.localStorage.getItem(C.SAVED_CONFIG_KEY));
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
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).passwordResetPath;
	}

	function getPasswordUpdateUrl(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).passwordUpdatePath;
	}

	function getTokenValidationPath(endpointKey) {
	  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).tokenValidationPath;
	}

	function getOAuthUrl(_ref) {
	  var provider = _ref.provider;
	  var params = _ref.params;
	  var endpointKey = _ref.endpointKey;

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

	function persistData(key, val) {
	  val = JSON.stringify(val);

	  switch (root.authState.currentSettings.storage) {
	    case "localStorage":
	      root.localStorage.setItem(key, val);
	      break;

	    default:
	      _jsCookie2.default.set(key, val, {
	        expires: root.authState.currentSettings.cookieExpiry,
	        path: root.authState.currentSettings.cookiePath
	      });
	      break;
	  }
	};

	function retrieveData(key) {
	  var val = null;

	  switch (root.authState.currentSettings.storage) {
	    case "localStorage":
	      val = root.localStorage && root.localStorage.getItem(key);
	      break;

	    default:
	      val = _jsCookie2.default.get(key);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (url) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (!options.headers) {
	    options.headers = {};
	  }
	  (0, _extend2.default)(options.headers, getAuthHeaders(url));
	  return (0, _isomorphicFetch2.default)(url, options).then(function (resp) {
	    return updateAuthCredentials(resp);
	  });
	};

	var _isomorphicFetch = __webpack_require__(135);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _constants = __webpack_require__(20);

	var C = _interopRequireWildcard(_constants);

	var _extend = __webpack_require__(19);

	var _extend2 = _interopRequireDefault(_extend);

	var _sessionStorage = __webpack_require__(12);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isApiRequest = function isApiRequest(url) {
	  return url.match((0, _sessionStorage.getApiUrl)((0, _sessionStorage.getSessionEndpointKey)()));
	};

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

	    return nextHeaders;
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
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactLoader = __webpack_require__(24);

	var _reactLoader2 = _interopRequireDefault(_reactLoader);

	var _extend = __webpack_require__(19);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonLoader = (function (_React$Component) {
	  _inherits(ButtonLoader, _React$Component);

	  function ButtonLoader() {
	    _classCallCheck(this, ButtonLoader);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonLoader).apply(this, arguments));
	  }

	  _createClass(ButtonLoader, [{
	    key: "getColor",
	    value: function getColor() {
	      if (this.props.disabled) {
	        return this.props.spinColorDisabled;
	      } else if (this.props.primary || this.props.secondary) {
	        return this.props.spinColorLight;
	      } else {
	        return this.props.spinColorDark;
	      }
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick(ev) {
	      ev.preventDefault();
	      this.props.onClick();
	    }
	  }, {
	    key: "renderIcon",
	    value: function renderIcon() {
	      var icon = undefined,
	          color = this.getColor();

	      if (this.props.loading) {
	        icon = _react2.default.createElement(_reactLoader2.default, _extends({ ref: "spinner" }, this.props.spinConfig, { color: color, loaded: false }));
	      } else {
	        icon = _react2.default.createElement(
	          "div",
	          { color: color, style: { width: 10, height: 10 } },
	          this.props.icon
	        );
	      }

	      return _react2.default.createElement(
	        "span",
	        { style: {
	            width: 15,
	            height: 15,
	            position: "absolute",
	            left: 0,
	            top: 2
	          } },
	        icon
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var color = this.getColor();
	      var style = (0, _extend2.default)({ color: color, paddingLeft: 15, position: "relative" }, this.props.style);

	      return _react2.default.createElement(
	        "button",
	        _extends({
	          disabled: this.props.disabled || this.props.loading
	        }, this.props, {
	          style: style,
	          onClick: this.handleClick.bind(this) }),
	        this.renderIcon(),
	        " ",
	        this.props.children
	      );
	    }
	  }]);

	  return ButtonLoader;
	})(_react2.default.Component);

	ButtonLoader.propTypes = {
	  icon: _react.PropTypes.string,
	  loading: _react.PropTypes.bool,
	  spinConfig: _react.PropTypes.object,
	  spinColorDark: _react.PropTypes.string,
	  spinColorLight: _react.PropTypes.string,
	  spinColorDisabled: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  onClick: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object
	};
	ButtonLoader.defaultProps = {
	  icon: "▸",
	  loading: false,
	  spinConfig: {
	    lines: 10,
	    length: 4,
	    width: 2,
	    radius: 3
	  },
	  spinColorDark: "#444",
	  spinColorLight: "#444",
	  spinColorDisabled: "#999",
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Submit"
	  ),
	  style: {}
	};
	exports.default = ButtonLoader;

/***/ },
/* 16 */,
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TokenBridge = (function (_React$Component) {
	  _inherits(TokenBridge, _React$Component);

	  function TokenBridge() {
	    _classCallCheck(this, TokenBridge);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TokenBridge).apply(this, arguments));
	  }

	  _createClass(TokenBridge, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("script", { id: "token-bridge",
	        type: "application/json",
	        dangerouslySetInnerHTML: { __html: this.props.initialCredentials } });
	    }
	  }]);

	  return TokenBridge;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;

	  var headers = auth.getIn(["server", "headers"]);

	  return {
	    initialCredentials: headers && JSON.stringify({
	      user: auth.getIn(["server", "user"]),
	      mustResetPassword: auth.getIn(["server", "mustResetPassword"]),
	      firstTimeLogin: auth.getIn(["server", "firstTimeLogin"]),
	      currentEndpointKey: auth.getIn(["configure", "currentEndpointKey"]),
	      defaultEndpointKey: auth.getIn(["configure", "defaultEndpointKey"]),
	      headers: headers
	    })
	  };
	})(TokenBridge);

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = extend;

/***/ },
/* 20 */
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
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthInput = (function (_React$Component) {
	  _inherits(AuthInput, _React$Component);

	  function AuthInput() {
	    _classCallCheck(this, AuthInput);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthInput).apply(this, arguments));
	  }

	  _createClass(AuthInput, [{
	    key: "handleInput",
	    value: function handleInput(ev) {
	      this.props.onChange(ev.target.value);
	    }
	  }, {
	    key: "renderErrorList",
	    value: function renderErrorList() {
	      var _this2 = this;

	      if (this.props.errors.size) {
	        return _react2.default.createElement(
	          "div",
	          { className: "auth-error-message" },
	          this.props.errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              { className: "inline-error-item",
	                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
	                key: i },
	              _react2.default.createElement(
	                "i",
	                { style: {
	                    position: "absolute",
	                    left: 0,
	                    top: 0 } },
	                "✗"
	              ),
	              _this2.props.label,
	              " ",
	              err
	            );
	          })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "label",
	          null,
	          this.props.label
	        ),
	        _react2.default.createElement("input", _extends({
	          placeholder: this.props.label
	        }, this.props, {
	          onChange: this.handleInput.bind(this) })),
	        this.renderErrorList()
	      );
	    }
	  }]);

	  return AuthInput;
	})(_react2.default.Component);

	AuthInput.propTypes = {
	  label: _react.PropTypes.string,
	  value: _react.PropTypes.string,
	  errors: _react.PropTypes.object
	};
	AuthInput.defaultProps = {
	  label: "",
	  value: null,
	  errors: _immutable2.default.fromJS([])
	};
	exports.default = AuthInput;

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	module.exports = react-loader;

/***/ },
/* 25 */
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
/* 26 */
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

	var _sessionStorage = __webpack_require__(12);

	var _handleFetchResponse = __webpack_require__(17);

	var _configure = __webpack_require__(5);

	var _fetch = __webpack_require__(13);

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
/* 27 */
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

	var _sessionStorage = __webpack_require__(12);

	var _configure = __webpack_require__(5);

	var _handleFetchResponse = __webpack_require__(17);

	var _fetch = __webpack_require__(13);

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
	      return dispatch(emailSignInError(currentEndpointKey, errors));
	    });
	  };
	}

/***/ },
/* 28 */
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

	var _constants = __webpack_require__(20);

	var C = _interopRequireWildcard(_constants);

	var _parseUrl = __webpack_require__(37);

	var _sessionStorage = __webpack_require__(12);

	var _configure = __webpack_require__(5);

	var _handleFetchResponse = __webpack_require__(17);

	var _fetch = __webpack_require__(13);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _popup = __webpack_require__(54);

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
	    var creds = undefined;

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
	  var endpointKey = _ref3.endpointKey;
	  var provider = _ref3.provider;
	  var url = _ref3.url;
	  var _ref3$tab = _ref3.tab;
	  var tab = _ref3$tab === undefined ? false : _ref3$tab;

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
	  var provider = _ref4.provider;
	  var params = _ref4.params;
	  var endpointKey = _ref4.endpointKey;

	  return function (dispatch) {
	    // save previous endpoint key in case of failure
	    var prevEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

	    // necessary for `fetch` to recognize the response as an api request
	    (0, _sessionStorage.setCurrentEndpointKey)(endpointKey);
	    dispatch((0, _configure.storeCurrentEndpointKey)(endpointKey));

	    var currentEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

	    dispatch(oAuthSignInStart(provider, currentEndpointKey));

	    var url = (0, _sessionStorage.getOAuthUrl)({ provider: provider, params: params, currentEndpointKey: currentEndpointKey });

	    authenticate({ endpointKey: endpointKey, provider: provider, url: url }).then(function (user) {
	      return dispatch(oAuthSignInComplete(user, currentEndpointKey));
	    }).catch(function (_ref5) {
	      var errors = _ref5.errors;

	      // revert endpoint key to what it was before failed request
	      (0, _sessionStorage.setCurrentEndpointKey)(prevEndpointKey);
	      dispatch((0, _configure.storeCurrentEndpointKey)(prevEndpointKey));
	      dispatch(oAuthSignInError(errors, currentEndpointKey));
	    });
	  };
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ssAuthTokenUpdate = ssAuthTokenUpdate;
	var SS_AUTH_TOKEN_UPDATE = exports.SS_AUTH_TOKEN_UPDATE = "SS_AUTH_TOKEN_UPDATE";

	function ssAuthTokenUpdate(_ref) {
	  var user = _ref.user;
	  var headers = _ref.headers;
	  var mustResetPassword = _ref.mustResetPassword;
	  var firstTimeLogin = _ref.firstTimeLogin;
	  var endpointKey = _ref.endpointKey;

	  return { type: SS_AUTH_TOKEN_UPDATE, user: user, headers: headers, mustResetPassword: mustResetPassword, firstTimeLogin: firstTimeLogin, endpointKey: endpointKey };
	}

/***/ },
/* 30 */
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

	var _sessionStorage = __webpack_require__(12);

	var _handleFetchResponse = __webpack_require__(17);

	var _configure = __webpack_require__(5);

	var _fetch = __webpack_require__(13);

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
	    });
	  };
	}

/***/ },
/* 31 */,
/* 32 */
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

	var _sessionStorage = __webpack_require__(12);

	var _handleFetchResponse = __webpack_require__(17);

	var _extend = __webpack_require__(19);

	var _extend2 = _interopRequireDefault(_extend);

	var _fetch = __webpack_require__(13);

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
	      return dispatch(emailSignUpError(errors, endpointKey));
	    });
	  };
	}

/***/ },
/* 33 */
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

	var _sessionStorage = __webpack_require__(12);

	var _handleFetchResponse = __webpack_require__(17);

	var _extend = __webpack_require__(19);

	var _extend2 = _interopRequireDefault(_extend);

	var _fetch = __webpack_require__(13);

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
/* 34 */
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
/* 35 */
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

	var _sessionStorage = __webpack_require__(12);

	var _handleFetchResponse = __webpack_require__(17);

	var _fetch = __webpack_require__(13);

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
	  return { type: UPDATE_PASSWORD_MODAL_START };
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
/* 36 */
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

	var _sessionStorage = __webpack_require__(12);

	var _handleFetchResponse = __webpack_require__(17);

	var _fetch = __webpack_require__(13);

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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeTokenKeys = normalizeTokenKeys;
	exports.getAllParams = getAllParams;
	exports.default = getRedirectInfo;

	var _querystring = __webpack_require__(138);

	var _querystring2 = _interopRequireDefault(_querystring);

	var _extend = __webpack_require__(19);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseEndpointConfig;

	var _constants = __webpack_require__(20);

	var C = _interopRequireWildcard(_constants);

	var _extend = __webpack_require__(19);

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
	  var defaultEndpointKey = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchToken = fetchToken;

	var _nodeFetch = __webpack_require__(137);

	var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

	var _cookie = __webpack_require__(134);

	var _cookie2 = _interopRequireDefault(_cookie);

	var _parseUrl = __webpack_require__(37);

	var _parseUrl2 = _interopRequireDefault(_parseUrl);

	var _constants = __webpack_require__(20);

	var C = _interopRequireWildcard(_constants);

	var _parseEndpointConfig3 = __webpack_require__(38);

	var _parseEndpointConfig4 = _interopRequireDefault(_parseEndpointConfig3);

	var _url = __webpack_require__(141);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function parseHeaders(headers) {
	  // set header for each key in `tokenFormat` config
	  var newHeaders = {};

	  // set flag to ensure that we don't accidentally nuke the headers
	  // if the response tokens aren't sent back from the API
	  var blankHeaders = true;

	  // set header key + val for each key in `tokenFormat` config
	  // TODO: get actual config value
	  var _arr = ["access-token", "token-type", "client", "expiry", "uid"];
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
	  var rawEndpoints = _ref.rawEndpoints;
	  var cookies = _ref.cookies;
	  var currentLocation = _ref.currentLocation;

	  var _getRedirectInfo = (0, _parseUrl2.default)(_url2.default.parse(currentLocation));

	  var authRedirectHeaders = _getRedirectInfo.authRedirectHeaders;

	  return new Promise(function (resolve, reject) {
	    if (cookies || authRedirectHeaders) {
	      var newHeaders, validationUrl, currentEndpoint, defaultEndpointKey, apiUrl, tokenValidationPath;

	      var _ret = (function () {
	        var rawCookies = _cookie2.default.parse(cookies || "{}");
	        var parsedCookies = JSON.parse(rawCookies.authHeaders || "false");
	        var firstTimeLogin = undefined,
	            mustResetPassword = undefined,
	            currentEndpointKey = undefined,
	            headers = undefined;

	        if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
	          headers = parseHeaders(authRedirectHeaders);
	          currentEndpointKey = JSON.parse(authRedirectHeaders.config || "null");
	          mustResetPassword = JSON.parse(authRedirectHeaders.reset_password || "false");
	          firstTimeLogin = JSON.parse(authRedirectHeaders.account_confirmation_success || "false");
	        } else if (rawCookies && parsedCookies) {
	          headers = parsedCookies;
	          currentEndpointKey = JSON.parse(rawCookies[C.SAVED_CONFIG_KEY] || "null");
	          mustResetPassword = JSON.parse(parsedCookies.mustResetPassword || "false");
	          firstTimeLogin = JSON.parse(parsedCookies.firstTimeLogin || "false");
	        }

	        if (!headers) {
	          return {
	            v: reject({
	              reason: "No creds",
	              currentEndpoint: currentEndpoint,
	              defaultEndpointKey: defaultEndpointKey
	            })
	          };
	        }

	        var _parseEndpointConfig = (0, _parseEndpointConfig4.default)(rawEndpoints);

	        currentEndpoint = _parseEndpointConfig.currentEndpoint;
	        defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey;
	        var _currentEndpoint = currentEndpoint[currentEndpointKey || defaultEndpointKey];
	        apiUrl = _currentEndpoint.apiUrl;
	        tokenValidationPath = _currentEndpoint.tokenValidationPath;
	        validationUrl = "" + apiUrl + tokenValidationPath + "?unbatch=true";

	        return {
	          v: (0, _nodeFetch2.default)(validationUrl, {
	            headers: headers
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
	          })
	        };
	      })();

	      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      var _parseEndpointConfig2 = (0, _parseEndpointConfig4.default)(rawEndpoints);

	      var _currentEndpoint2 = _parseEndpointConfig2.currentEndpoint;
	      var _defaultEndpointKey = _parseEndpointConfig2.defaultEndpointKey;

	      reject({
	        reason: "No creds",
	        currentEndpoint: _currentEndpoint2,
	        defaultEndpointKey: _defaultEndpointKey
	      });
	    }
	  });
	}

	function verifyAuth(rawEndpoints, _ref2) {
	  var isServer = _ref2.isServer;
	  var cookies = _ref2.cookies;
	  var currentLocation = _ref2.currentLocation;

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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _authenticate = __webpack_require__(25);

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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _configure = __webpack_require__(5);

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
	  var endpointKeys = _ref2.endpointKeys;
	  var defaultEndpointKey = _ref2.defaultEndpointKey;
	  var currentEndpointKey = _ref2.currentEndpointKey;
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _destroyAccount = __webpack_require__(26);

	var A = _interopRequireWildcard(_destroyAccount);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.merge(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _createReducer));

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _emailSignIn = __webpack_require__(27);

	var A = _interopRequireWildcard(_emailSignIn);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_IN_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint;
	  var key = _ref5.key;
	  var value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _emailSignUp = __webpack_require__(32);

	var A = _interopRequireWildcard(_emailSignUp);

	var _configure = __webpack_require__(5);

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
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_START, function (state, _ref2) {
	  var endpoint = _ref2.endpoint;
	  return state.setIn([endpoint, "loading"], true);
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_COMPLETE, function (state, _ref3) {
	  var endpoint = _ref3.endpoint;
	  return state.merge(_defineProperty({}, endpoint, initialState));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_ERROR, function (state, _ref4) {
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.EMAIL_SIGN_UP_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint;
	  var key = _ref5.key;
	  var value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _oauthSignIn = __webpack_require__(28);

	var A = _interopRequireWildcard(_oauthSignIn);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _createReducer));

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _requestPasswordReset = __webpack_require__(33);

	var A = _interopRequireWildcard(_requestPasswordReset);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.REQUEST_PASSWORD_RESET_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint;
	  var key = _ref5.key;
	  var value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _server = __webpack_require__(29);

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
	  var _ref$user = _ref.user;
	  var user = _ref$user === undefined ? null : _ref$user;
	  var _ref$headers = _ref.headers;
	  var headers = _ref$headers === undefined ? null : _ref$headers;
	  var _ref$mustResetPasswor = _ref.mustResetPassword;
	  var mustResetPassword = _ref$mustResetPasswor === undefined ? false : _ref$mustResetPasswor;
	  var _ref$firstTimeLogin = _ref.firstTimeLogin;
	  var firstTimeLogin = _ref$firstTimeLogin === undefined ? false : _ref$firstTimeLogin;

	  return state.merge({
	    user: user,
	    headers: headers,
	    mustResetPassword: mustResetPassword,
	    firstTimeLogin: firstTimeLogin
	  });
	}));

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _signOut = __webpack_require__(30);

	var A = _interopRequireWildcard(_signOut);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _createReducer));

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _ui = __webpack_require__(34);

	var uiActions = _interopRequireWildcard(_ui);

	var _emailSignIn = __webpack_require__(27);

	var emailSignInActions = _interopRequireWildcard(_emailSignIn);

	var _emailSignUp = __webpack_require__(32);

	var emailSignUpActions = _interopRequireWildcard(_emailSignUp);

	var _signOut = __webpack_require__(30);

	var signOutActions = _interopRequireWildcard(_signOut);

	var _requestPasswordReset = __webpack_require__(33);

	var requestPasswordResetActions = _interopRequireWildcard(_requestPasswordReset);

	var _oauthSignIn = __webpack_require__(28);

	var oAuthSignInActions = _interopRequireWildcard(_oauthSignIn);

	var _updatePassword = __webpack_require__(36);

	var updatePasswordActions = _interopRequireWildcard(_updatePassword);

	var _destroyAccount = __webpack_require__(26);

	var destroyAccountActions = _interopRequireWildcard(_destroyAccount);

	var _updatePasswordModal = __webpack_require__(35);

	var updatePasswordModalActions = _interopRequireWildcard(_updatePasswordModal);

	var _server = __webpack_require__(29);

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
	  var mustResetPassword = _ref5.mustResetPassword;
	  var firstTimeLogin = _ref5.firstTimeLogin;
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _updatePasswordModal = __webpack_require__(35);

	var A = _interopRequireWildcard(_updatePasswordModal);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_MODAL_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint;
	  var key = _ref5.key;
	  var value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _updatePassword = __webpack_require__(36);

	var A = _interopRequireWildcard(_updatePassword);

	var _configure = __webpack_require__(5);

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
	  var endpoint = _ref4.endpoint;
	  var errors = _ref4.errors;
	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    loading: false,
	    errors: errors
	  }));
	}), _defineProperty(_createReducer, A.UPDATE_PASSWORD_FORM_UPDATE, function (state, _ref5) {
	  var endpoint = _ref5.endpoint;
	  var key = _ref5.key;
	  var value = _ref5.value;

	  return state.mergeDeep(_defineProperty({}, endpoint, {
	    form: _defineProperty({}, key, value)
	  }));
	}), _createReducer));

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createReducer;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _reduxImmutablejs = __webpack_require__(11);

	var _sessionStorage = __webpack_require__(12);

	var _authenticate = __webpack_require__(25);

	var authActions = _interopRequireWildcard(_authenticate);

	var _emailSignIn = __webpack_require__(27);

	var _signOut = __webpack_require__(30);

	var _oauthSignIn = __webpack_require__(28);

	var _destroyAccount = __webpack_require__(26);

	var _server = __webpack_require__(29);

	var ssActions = _interopRequireWildcard(_server);

	var _configure = __webpack_require__(5);

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
	  var user = _ref2.user;
	  var mustResetPassword = _ref2.mustResetPassword;
	  var firstTimeLogin = _ref2.firstTimeLogin;

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
	  var endpoint = _ref5.endpoint;
	  var user = _ref5.user;
	  return state.merge({
	    attributes: user.data,
	    isSignedIn: true,
	    endpointKey: endpoint
	  });
	}), _defineProperty(_createReducer, _oauthSignIn.OAUTH_SIGN_IN_COMPLETE, function (state, _ref6) {
	  var endpoint = _ref6.endpoint;
	  var user = _ref6.user;
	  return state.merge({
	    attributes: user,
	    isSignedIn: true,
	    endpointKey: endpoint
	  });
	}), _defineProperty(_createReducer, ssActions.SS_AUTH_TOKEN_UPDATE, function (state, _ref7) {
	  var user = _ref7.user;
	  var mustResetPassword = _ref7.mustResetPassword;
	  var firstTimeLogin = _ref7.firstTimeLogin;

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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.applyConfig = applyConfig;

	var _constants = __webpack_require__(20);

	var C = _interopRequireWildcard(_constants);

	var _extend = __webpack_require__(19);

	var _extend2 = _interopRequireDefault(_extend);

	var _fetch = __webpack_require__(13);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _parseEndpointConfig2 = __webpack_require__(38);

	var _parseEndpointConfig3 = _interopRequireDefault(_parseEndpointConfig2);

	var _configure = __webpack_require__(5);

	var _sessionStorage = __webpack_require__(12);

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
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var dispatch = _ref.dispatch;
	  var _ref$endpoint = _ref.endpoint;
	  var endpoint = _ref$endpoint === undefined ? {} : _ref$endpoint;
	  var _ref$settings = _ref.settings;
	  var settings = _ref$settings === undefined ? {} : _ref$settings;
	  var _ref$reset = _ref.reset;
	  var reset = _ref$reset === undefined ? false : _ref$reset;

	  var currentEndpointKey = undefined;

	  if (reset) {
	    resetConfig();
	  }

	  if (settings.initialCredentials) {
	    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
	  }

	  (0, _sessionStorage.setCurrentSettings)((0, _extend2.default)({}, defaultSettings, settings));

	  var _parseEndpointConfig = (0, _parseEndpointConfig3.default)(endpoint, (0, _sessionStorage.getInitialEndpointKey)());

	  var defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey;
	  var currentEndpoint = _parseEndpointConfig.currentEndpoint;

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
	    var _getCurrentSettings$i = (0, _sessionStorage.getCurrentSettings)().initialCredentials;
	    var user = _getCurrentSettings$i.user;
	    var headers = _getCurrentSettings$i.headers;
	    var config = _getCurrentSettings$i.config;

	    (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, headers);
	    return Promise.resolve(user);
	  } else if (savedCreds) {
	    // verify session credentials with API
	    return (0, _fetch2.default)(savedCreds);
	  } else {
	    return Promise.reject({ reason: "No credentials." });
	  }
	}

/***/ },
/* 54 */
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
	  var width = _ref.width;
	  var height = _ref.height;

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
	  var _getPopupSize = getPopupSize(provider);

	  var width = _getPopupSize.width;
	  var height = _getPopupSize.height;

	  var _getPopupOffset = getPopupOffset({ width: width, height: height });

	  var top = _getPopupOffset.top;
	  var left = _getPopupOffset.left;

	  return "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
	}

	/* istanbul ignore next */
	function openPopup(provider, url, name) {
	  return window.open(url, name, settings + "," + getPopupDimensions(provider));
	}

/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _EmailSignInSuccessModal = __webpack_require__(94);

	var _EmailSignInSuccessModal2 = _interopRequireDefault(_EmailSignInSuccessModal);

	var _EmailSignInErrorModal = __webpack_require__(93);

	var _EmailSignInErrorModal2 = _interopRequireDefault(_EmailSignInErrorModal);

	var _OAuthSignInSuccessModal = __webpack_require__(100);

	var _OAuthSignInSuccessModal2 = _interopRequireDefault(_OAuthSignInSuccessModal);

	var _OAuthSignInErrorModal = __webpack_require__(99);

	var _OAuthSignInErrorModal2 = _interopRequireDefault(_OAuthSignInErrorModal);

	var _EmailSignUpSuccessModal = __webpack_require__(96);

	var _EmailSignUpSuccessModal2 = _interopRequireDefault(_EmailSignUpSuccessModal);

	var _EmailSignUpErrorModal = __webpack_require__(95);

	var _EmailSignUpErrorModal2 = _interopRequireDefault(_EmailSignUpErrorModal);

	var _SignOutSuccessModal = __webpack_require__(105);

	var _SignOutSuccessModal2 = _interopRequireDefault(_SignOutSuccessModal);

	var _SignOutErrorModal = __webpack_require__(104);

	var _SignOutErrorModal2 = _interopRequireDefault(_SignOutErrorModal);

	var _FirstTimeLoginSuccessModal = __webpack_require__(98);

	var _FirstTimeLoginSuccessModal2 = _interopRequireDefault(_FirstTimeLoginSuccessModal);

	var _FirstTimeLoginErrorModal = __webpack_require__(97);

	var _FirstTimeLoginErrorModal2 = _interopRequireDefault(_FirstTimeLoginErrorModal);

	var _RequestPasswordResetErrorModal = __webpack_require__(102);

	var _RequestPasswordResetErrorModal2 = _interopRequireDefault(_RequestPasswordResetErrorModal);

	var _RequestPasswordResetSuccessModal = __webpack_require__(103);

	var _RequestPasswordResetSuccessModal2 = _interopRequireDefault(_RequestPasswordResetSuccessModal);

	var _UpdatePasswordErrorModal = __webpack_require__(106);

	var _UpdatePasswordErrorModal2 = _interopRequireDefault(_UpdatePasswordErrorModal);

	var _UpdatePasswordSuccessModal = __webpack_require__(107);

	var _UpdatePasswordSuccessModal2 = _interopRequireDefault(_UpdatePasswordSuccessModal);

	var _DestroyAccountErrorModal = __webpack_require__(91);

	var _DestroyAccountErrorModal2 = _interopRequireDefault(_DestroyAccountErrorModal);

	var _DestroyAccountSuccessModal = __webpack_require__(92);

	var _DestroyAccountSuccessModal2 = _interopRequireDefault(_DestroyAccountSuccessModal);

	var _PasswordResetSuccessModal = __webpack_require__(101);

	var _PasswordResetSuccessModal2 = _interopRequireDefault(_PasswordResetSuccessModal);

	var _TokenBridge = __webpack_require__(18);

	var _TokenBridge2 = _interopRequireDefault(_TokenBridge);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthGlobals = (function (_React$Component) {
	  _inherits(AuthGlobals, _React$Component);

	  function AuthGlobals() {
	    _classCallCheck(this, AuthGlobals);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthGlobals).apply(this, arguments));
	  }

	  _createClass(AuthGlobals, [{
	    key: "render",
	    value: function render() {
	      var showEmailSignInSuccess = this.props.emailSignInSuccessEnabled && this.props.auth.getIn(["ui", "emailSignInSuccessModalVisible"]);

	      var showEmailSignInError = this.props.emailSignInErrorEnabled && this.props.auth.getIn(["ui", "emailSignInErrorModalVisible"]);

	      var showEmailSignUpSuccess = this.props.emailSignUpSuccessEnabled && this.props.auth.getIn(["ui", "emailSignUpSuccessModalVisible"]);

	      var showEmailSignUpError = this.props.emailSignUpErrorEnabled && this.props.auth.getIn(["ui", "emailSignUpErrorModalVisible"]);

	      var showSignOutSuccess = this.props.signOutSuccessEnabled && this.props.auth.getIn(["ui", "signOutSuccessModalVisible"]);

	      var showSignOutError = this.props.signOutErrorEnabled && this.props.auth.getIn(["ui", "signOutErrorModalVisible"]);

	      var showFirstTimeLoginSuccess = this.props.firstTimeLoginSuccessEnabled && this.props.auth.getIn(["ui", "firstTimeLoginSuccessModalVisible"]);

	      var showFirstTimeLoginError = this.props.firstTimeLoginErrorEnabled && this.props.auth.getIn(["ui", "firstTimeLoginErrorModalVisible"]);

	      var showRequestPasswordResetError = this.props.requestPasswordResetErrorEnabled && this.props.auth.getIn(["ui", "requestPasswordResetErrorModalVisible"]);

	      var showRequestPasswordResetSuccess = this.props.requestPasswordResetSuccessEnabled && this.props.auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"]);

	      var showOAuthSignInSuccess = this.props.oAuthSignInSuccessEnabled && this.props.auth.getIn(["ui", "oAuthSignInSuccessModalVisible"]);

	      var showOAuthSignInError = this.props.oAuthSignInErrorEnabled && this.props.auth.getIn(["ui", "oAuthSignInErrorModalVisible"]);

	      var updatePasswordSuccess = this.props.updatePasswordSuccessEnabled && this.props.auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);

	      var updatePasswordError = this.props.updatePasswordErrorEnabled && this.props.auth.getIn(["ui", "updatePasswordErrorModalVisible"]);

	      var destroyAccountSuccess = this.props.destroyAccountSuccessEnabled && this.props.auth.getIn(["ui", "destroyAccountSuccessModalVisible"]);

	      var destroyAccountError = this.props.destroyAccountErrorEnabled && this.props.auth.getIn(["ui", "destroyAccountErrorModalVisible"]);

	      var passwordResetSuccess = this.props.passwordResetSuccessEnabled && this.props.auth.getIn(["ui", "passwordResetSuccessModalVisible"]);

	      //let passwordResetError = (
	      //this.props.passwordResetErrorEnabled &&
	      //this.props.auth.getIn(["ui", "passwordResetErrorModalVisible"])
	      //);

	      return _react2.default.createElement(
	        "div",
	        { id: "auth-modals" },
	        _react2.default.createElement(_EmailSignInSuccessModal2.default, { show: showEmailSignInSuccess }),
	        _react2.default.createElement(_EmailSignInErrorModal2.default, { show: showEmailSignInError }),
	        _react2.default.createElement(_OAuthSignInSuccessModal2.default, { show: showOAuthSignInSuccess }),
	        _react2.default.createElement(_OAuthSignInErrorModal2.default, { show: showOAuthSignInError }),
	        _react2.default.createElement(_EmailSignUpSuccessModal2.default, { show: showEmailSignUpSuccess }),
	        _react2.default.createElement(_EmailSignUpErrorModal2.default, { show: showEmailSignUpError }),
	        _react2.default.createElement(_SignOutSuccessModal2.default, { show: showSignOutSuccess }),
	        _react2.default.createElement(_SignOutErrorModal2.default, { show: showSignOutError }),
	        _react2.default.createElement(_FirstTimeLoginSuccessModal2.default, { show: showFirstTimeLoginSuccess }),
	        _react2.default.createElement(_FirstTimeLoginErrorModal2.default, { show: showFirstTimeLoginError }),
	        _react2.default.createElement(_RequestPasswordResetErrorModal2.default, { show: showRequestPasswordResetError }),
	        _react2.default.createElement(_RequestPasswordResetSuccessModal2.default, { show: showRequestPasswordResetSuccess }),
	        _react2.default.createElement(_UpdatePasswordErrorModal2.default, { show: updatePasswordError }),
	        _react2.default.createElement(_UpdatePasswordSuccessModal2.default, { show: updatePasswordSuccess }),
	        _react2.default.createElement(_DestroyAccountErrorModal2.default, { show: destroyAccountError }),
	        _react2.default.createElement(_DestroyAccountSuccessModal2.default, { show: destroyAccountSuccess }),
	        _react2.default.createElement(_PasswordResetSuccessModal2.default, { show: passwordResetSuccess }),
	        _react2.default.createElement(_TokenBridge2.default, null)
	      );
	    }
	  }]);

	  return AuthGlobals;
	})(_react2.default.Component);

	AuthGlobals.propTypes = {
	  signOutSuccessEnabled: _react.PropTypes.bool,
	  signOutErrorEnabled: _react.PropTypes.bool,
	  emailSignInSuccessEnabled: _react.PropTypes.bool,
	  emailSignInErrorEnabled: _react.PropTypes.bool,
	  oAuthSignInSuccessEnabled: _react.PropTypes.bool,
	  oAuthSignInErrorEnabled: _react.PropTypes.bool,
	  emailSignUpSuccessEnabled: _react.PropTypes.bool,
	  emailSignUpErrorEnabled: _react.PropTypes.bool,
	  firstTimeLoginSuccessEnabled: _react.PropTypes.bool,
	  firstTimeLoginErrorEnabled: _react.PropTypes.bool,
	  requestPasswordResetErrorEnabled: _react.PropTypes.bool,
	  requestPasswordResetSuccessEnabled: _react.PropTypes.bool,
	  updatePasswordErrorEnabled: _react.PropTypes.bool,
	  updatePasswordSuccessEnabled: _react.PropTypes.bool,
	  destroyAccountErrorEnabled: _react.PropTypes.bool,
	  destroyAccountSuccessEnabled: _react.PropTypes.bool,
	  passwordResetSuccessEnabled: _react.PropTypes.bool,
	  passwordResetErrorEnabled: _react.PropTypes.bool
	};
	AuthGlobals.defaultProps = {
	  signOutSuccessEnabled: true,
	  signOutErrorEnabled: true,
	  emailSignInSuccessEnabled: true,
	  emailSignInErrorEnabled: true,
	  oAuthSignInSuccessEnabled: true,
	  oAuthSignInErrorEnabled: true,
	  emailSignUpSuccessEnabled: true,
	  emailSignUpErrorEnabled: true,
	  firstTimeLoginSuccessEnabled: true,
	  firstTimeLoginErrorEnabled: true,
	  requestPasswordResetErrorEnabled: true,
	  requestPasswordResetSuccessEnabled: true,
	  updatePasswordErrorEnabled: true,
	  updatePasswordSuccessEnabled: true,
	  destroyAccountErrorEnabled: true,
	  destroyAccountSuccessEnabled: true,
	  passwordResetSuccessEnabled: true,
	  passwordResetErrorEnabled: true
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(AuthGlobals);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _destroyAccount = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DestroyAccountButton = (function (_React$Component) {
	  _inherits(DestroyAccountButton, _React$Component);

	  function DestroyAccountButton() {
	    _classCallCheck(this, DestroyAccountButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DestroyAccountButton).apply(this, arguments));
	  }

	  _createClass(DestroyAccountButton, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick() {
	      this.props.dispatch((0, _destroyAccount.destroyAccount)(this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
	      return _react2.default.createElement(_ButtonLoader2.default, _extends({
	        loading: this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "loading"]),
	        icon: this.props.icon,
	        disabled: disabled,
	        primary: true,
	        className: "destroy-account-submit",
	        onClick: this.handleClick.bind(this)
	      }, this.props));
	    }
	  }]);

	  return DestroyAccountButton;
	})(_react2.default.Component);

	DestroyAccountButton.propTypes = {
	  endpoint: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  icon: _react.PropTypes.string
	};
	DestroyAccountButton.defaultProps = {
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Destroy Account"
	  )
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(DestroyAccountButton);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _Input = __webpack_require__(22);

	var _Input2 = _interopRequireDefault(_Input);

	var _emailSignIn = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignInForm = (function (_React$Component) {
	  _inherits(EmailSignInForm, _React$Component);

	  function EmailSignInForm() {
	    _classCallCheck(this, EmailSignInForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignInForm).apply(this, arguments));
	  }

	  _createClass(EmailSignInForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _emailSignIn.emailSignInFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _emailSignIn.emailSignIn)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = this.props.auth.getIn(["user", "isSignedIn"]) || this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"]);

	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth email-sign-in-form",
	          style: { clear: "both", overflow: "hidden" },
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({ type: "text",
	          className: "email-sign-in-email",
	          label: "Email",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"]),
	          errors: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"]),
	          onChange: this.handleInput.bind(this, "email")
	        }, this.props.inputProps.email)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password",
	          className: "email-sign-in-password",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"]),
	          errors: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"]),
	          onChange: this.handleInput.bind(this, "password")
	        }, this.props.inputProps.password)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({ loading: this.props.auth.getIn(["emailSignIn", "loading"]),
	            type: "submit",
	            style: { float: "right" },
	            icon: this.props.icon,
	            className: "email-sign-in-submit",
	            disabled: disabled,
	            onClick: this.handleSubmit.bind(this),
	            primary: true
	          }, this.props.inputProps.submit),
	          "Sign In"
	        )
	      );
	    }
	  }]);

	  return EmailSignInForm;
	})(_react2.default.Component);

	EmailSignInForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    password: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	EmailSignInForm.defaultProps = {
	  inputProps: {
	    email: {},
	    password: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignInForm);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(22);

	var _Input2 = _interopRequireDefault(_Input);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _emailSignUp = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignUpForm = (function (_React$Component) {
	  _inherits(EmailSignUpForm, _React$Component);

	  function EmailSignUpForm() {
	    _classCallCheck(this, EmailSignUpForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignUpForm).apply(this, arguments));
	  }

	  _createClass(EmailSignUpForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _emailSignUp.emailSignUpFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      console.log("submitting form to endpoint", this.getEndpoint());
	      var formData = this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _emailSignUp.emailSignUp)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = this.props.auth.getIn(["user", "isSignedIn"]) || this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"]);

	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth email-sign-up-form",
	          style: { clear: "both", overflow: "hidden" },
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({ type: "text",
	          label: "Email",
	          className: "email-sign-up-email",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "email"]),
	          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "email"]),
	          onChange: this.handleInput.bind(this, "email")
	        }, this.props.inputProps.email)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password",
	          className: "email-sign-up-password",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password"]),
	          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password"]),
	          onChange: this.handleInput.bind(this, "password")
	        }, this.props.inputProps.password)),
	        _react2.default.createElement(_Input2.default, _extends({ type: "password",
	          label: "Password Confirmation",
	          className: "email-sign-up-password-confirmation",
	          disabled: disabled,
	          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password_confirmation"]),
	          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password_confirmation"]),
	          onChange: this.handleInput.bind(this, "password_confirmation")
	        }, this.props.inputProps.passwordConfirmation)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({ loading: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"]),
	            type: "submit",
	            className: "email-sign-up-submit",
	            primary: true,
	            style: { float: "right" },
	            icon: this.props.icon,
	            disabled: disabled,
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Sign Up"
	        )
	      );
	    }
	  }]);

	  return EmailSignUpForm;
	})(_react2.default.Component);

	EmailSignUpForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  icon: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    password: _react.PropTypes.object,
	    passwordConfirmation: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	EmailSignUpForm.defaultProps = {
	  inputProps: {
	    email: {},
	    password: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignUpForm);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(4);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ErrorList = (function (_React$Component) {
	  _inherits(ErrorList, _React$Component);

	  function ErrorList() {
	    _classCallCheck(this, ErrorList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorList).apply(this, arguments));
	  }

	  _createClass(ErrorList, [{
	    key: "renderErrorList",
	    value: function renderErrorList() {
	      var errorCount = (this.props.errors || _immutable2.default.fromJS([])).size;

	      if (errorCount > 0) {
	        // pluralize message
	        var errorWord = "error";
	        errorWord += errorCount === 1 ? "" : "s";

	        return _react2.default.createElement(
	          "div",
	          { className: "has-error" },
	          _react2.default.createElement(
	            "p",
	            null,
	            "Please correct the following ",
	            errorWord,
	            ":"
	          ),
	          this.props.errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              {
	                key: i,
	                className: "control-label modal-error-item",
	                style: { paddingLeft: "20px", position: "relative" } },
	              _react2.default.createElement(
	                "i",
	                { style: {
	                    position: "absolute",
	                    left: 0,
	                    top: 2 } },
	                "✗"
	              ),
	              " ",
	              err
	            );
	          })
	        );
	      } else {
	        return _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(
	            "i",
	            { style: {
	                position: "absolute",
	                left: 0,
	                top: 2 } },
	            "✗"
	          ),
	          " There was an error processing this form. Please check each field and try again."
	        );
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "auth-error-message" },
	        this.renderErrorList()
	      );
	    }
	  }]);

	  return ErrorList;
	})(_react2.default.Component);

	ErrorList.propTypes = {
	  errors: _react.PropTypes.object
	};
	ErrorList.defaultProps = {
	  errors: _immutable2.default.fromJS([])
	};
	exports.default = ErrorList;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _oauthSignIn = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// hook for rewire
	var oAuthSignIn = _oauthSignIn.oAuthSignIn;

	var OAuthSignInButton = (function (_React$Component) {
	  _inherits(OAuthSignInButton, _React$Component);

	  function OAuthSignInButton() {
	    _classCallCheck(this, OAuthSignInButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OAuthSignInButton).apply(this, arguments));
	  }

	  _createClass(OAuthSignInButton, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick() {
	      this.props.dispatch(oAuthSignIn({
	        provider: this.props.provider,
	        params: this.props.signInParams,
	        endpointKey: this.getEndpoint()
	      }));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = this.props.auth.getIn(["user", "isSignedIn"]);
	      var loading = this.props.auth.getIn(["ui", "oAuthSignInLoadingProvider"]) === this.props.provider && this.props.auth.getIn(["oAuthSignIn", this.getEndpoint(), "loading"]);

	      return _react2.default.createElement(_ButtonLoader2.default, _extends({
	        loading: loading,
	        icon: this.props.icon,
	        className: "oauth-sign-in-submit",
	        disabled: disabled,
	        onClick: this.handleClick.bind(this)
	      }, this.props));
	    }
	  }]);

	  return OAuthSignInButton;
	})(_react2.default.Component);

	OAuthSignInButton.propTypes = {
	  provider: _react.PropTypes.string.isRequired,
	  label: _react.PropTypes.string,
	  signInParams: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  icon: _react.PropTypes.string
	};
	OAuthSignInButton.defaultProps = {
	  signInParams: {},
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "OAuth Sign In"
	  )
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(OAuthSignInButton);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(22);

	var _Input2 = _interopRequireDefault(_Input);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _reactRedux = __webpack_require__(3);

	var _requestPasswordReset = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestPasswordResetForm = (function (_React$Component) {
	  _inherits(RequestPasswordResetForm, _React$Component);

	  function RequestPasswordResetForm() {
	    _classCallCheck(this, RequestPasswordResetForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RequestPasswordResetForm).apply(this, arguments));
	  }

	  _createClass(RequestPasswordResetForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _requestPasswordReset.requestPasswordResetFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _requestPasswordReset.requestPasswordReset)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var endpoint = this.getEndpoint();
	      var loading = this.props.auth.getIn(["requestPasswordReset", endpoint, "loading"]);
	      var inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
	      var submitDisabled = !this.props.auth.getIn(["requestPasswordReset", endpoint, "form", "email"]);

	      return _react2.default.createElement(
	        "form",
	        {
	          className: "redux-auth request-password-reset-form clearfix",
	          style: { clear: "both", overflow: "hidden" },
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({
	          type: "text",
	          placeholder: "Email Address",
	          className: "request-password-reset-email",
	          disabled: loading || inputDisabled,
	          value: this.props.auth.getIn(["requestPasswordReset", endpoint, "form", "email"]),
	          errors: this.props.auth.getIn(["requestPasswordReset", endpoint, "errors", "email"]),
	          onChange: this.handleInput.bind(this, "email")
	        }, this.props.inputProps.email)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({
	            loading: loading,
	            type: "submit",
	            primary: true,
	            style: { float: "right" },
	            className: "request-password-reset-submit",
	            disabled: inputDisabled || submitDisabled,
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Request Password Reset"
	        )
	      );
	    }
	  }]);

	  return RequestPasswordResetForm;
	})(_react2.default.Component);

	RequestPasswordResetForm.propTypes = {
	  icon: _react.PropTypes.string,
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	RequestPasswordResetForm.defaultProps = {
	  inputProps: {
	    email: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(RequestPasswordResetForm);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _reactRedux = __webpack_require__(3);

	var _signOut = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignOutButton = (function (_React$Component) {
	  _inherits(SignOutButton, _React$Component);

	  function SignOutButton() {
	    _classCallCheck(this, SignOutButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignOutButton).apply(this, arguments));
	  }

	  _createClass(SignOutButton, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick() {
	      this.props.dispatch((0, _signOut.signOut)(this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
	      return _react2.default.createElement(_ButtonLoader2.default, _extends({
	        loading: this.props.auth.getIn(["signOut", this.getEndpoint(), "loading"]),
	        icon: this.props.icon,
	        disabled: disabled,
	        primary: true,
	        className: "sign-out-submit",
	        onClick: this.handleClick.bind(this)
	      }, this.props));
	    }
	  }]);

	  return SignOutButton;
	})(_react2.default.Component);

	SignOutButton.propTypes = {
	  endpoint: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  icon: _react.PropTypes.string
	};
	SignOutButton.defaultProps = {
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Sign Out"
	  )
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(SignOutButton);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(22);

	var _Input2 = _interopRequireDefault(_Input);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _updatePassword = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePasswordForm = (function (_React$Component) {
	  _inherits(UpdatePasswordForm, _React$Component);

	  function UpdatePasswordForm() {
	    _classCallCheck(this, UpdatePasswordForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordForm).apply(this, arguments));
	  }

	  _createClass(UpdatePasswordForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _updatePassword.updatePasswordFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var formData = this.props.auth.getIn(["updatePassword", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _updatePassword.updatePassword)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var endpoint = this.getEndpoint();
	      var loading = this.props.auth.getIn(["updatePassword", "loading"]);
	      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]) || loading || this.props.auth.getIn(["user", "attributes", "provider"]) !== "email";

	      return _react2.default.createElement(
	        "form",
	        {
	          className: "redux-auth update-password-form clearfix",
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(_Input2.default, _extends({
	          type: "password",
	          placeholder: "Password",
	          disabled: disabled,
	          className: "update-password-password",
	          value: this.props.auth.getIn(["updatePassword", endpoint, "form", "password"]),
	          errors: this.props.auth.getIn(["updatePassword", endpoint, "errors", "password"]),
	          onChange: this.handleInput.bind(this, "password")
	        }, this.props.inputProps.password)),
	        _react2.default.createElement(_Input2.default, _extends({
	          type: "password",
	          placeholder: "Password Confirmation",
	          className: "update-password-password-confirmation",
	          disabled: disabled,
	          value: this.props.auth.getIn(["updatePassword", endpoint, "form", "password_confirmation"]),
	          errors: this.props.auth.getIn(["updatePassword", endpoint, "errors", "password_confirmation"]),
	          onChange: this.handleInput.bind(this, "password_confirmation")
	        }, this.props.inputProps.passwordConfirmation)),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          _extends({
	            loading: loading,
	            type: "submit",
	            className: "update-password-submit",
	            icon: this.props.icon,
	            primary: true,
	            disabled: disabled,
	            style: { float: "right" },
	            onClick: this.handleSubmit.bind(this)
	          }, this.props.inputProps.submit),
	          "Update Password"
	        )
	      );
	    }
	  }]);

	  return UpdatePasswordForm;
	})(_react2.default.Component);

	UpdatePasswordForm.propTypes = {
	  icon: _react.PropTypes.string,
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    password: _react.PropTypes.object,
	    passwordConfirmation: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	UpdatePasswordForm.defaultProps = {
	  inputProps: {
	    password: {},
	    passwordConfirmation: {},
	    submit: {}
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(UpdatePasswordForm);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonLoader = exports.TokenBridge = exports.DestroyAccountButton = exports.UpdatePasswordForm = exports.OAuthSignInButton = exports.RequestPasswordResetForm = exports.SignOutButton = exports.EmailSignUpForm = exports.EmailSignInForm = exports.AuthGlobals = undefined;

	var _AuthGlobals2 = __webpack_require__(81);

	var _AuthGlobals3 = _interopRequireDefault(_AuthGlobals2);

	var _EmailSignInForm2 = __webpack_require__(83);

	var _EmailSignInForm3 = _interopRequireDefault(_EmailSignInForm2);

	var _EmailSignUpForm2 = __webpack_require__(84);

	var _EmailSignUpForm3 = _interopRequireDefault(_EmailSignUpForm2);

	var _SignOutButton2 = __webpack_require__(88);

	var _SignOutButton3 = _interopRequireDefault(_SignOutButton2);

	var _RequestPasswordResetForm2 = __webpack_require__(87);

	var _RequestPasswordResetForm3 = _interopRequireDefault(_RequestPasswordResetForm2);

	var _OAuthSignInButton2 = __webpack_require__(86);

	var _OAuthSignInButton3 = _interopRequireDefault(_OAuthSignInButton2);

	var _UpdatePasswordForm2 = __webpack_require__(89);

	var _UpdatePasswordForm3 = _interopRequireDefault(_UpdatePasswordForm2);

	var _DestroyAccountButton2 = __webpack_require__(82);

	var _DestroyAccountButton3 = _interopRequireDefault(_DestroyAccountButton2);

	var _TokenBridge2 = __webpack_require__(18);

	var _TokenBridge3 = _interopRequireDefault(_TokenBridge2);

	var _ButtonLoader2 = __webpack_require__(15);

	var _ButtonLoader3 = _interopRequireDefault(_ButtonLoader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AuthGlobals = _AuthGlobals3.default;
	exports.EmailSignInForm = _EmailSignInForm3.default;
	exports.EmailSignUpForm = _EmailSignUpForm3.default;
	exports.SignOutButton = _SignOutButton3.default;
	exports.RequestPasswordResetForm = _RequestPasswordResetForm3.default;
	exports.OAuthSignInButton = _OAuthSignInButton3.default;
	exports.UpdatePasswordForm = _UpdatePasswordForm3.default;
	exports.DestroyAccountButton = _DestroyAccountButton3.default;
	exports.TokenBridge = _TokenBridge3.default;
	exports.ButtonLoader = _ButtonLoader3.default;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DestroyAccountErrorModal = (function (_React$Component) {
	  _inherits(DestroyAccountErrorModal, _React$Component);

	  function DestroyAccountErrorModal() {
	    _classCallCheck(this, DestroyAccountErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DestroyAccountErrorModal).apply(this, arguments));
	  }

	  _createClass(DestroyAccountErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        containerClass: "destroy-account-error-modal",
	        show: this.props.show,
	        closeAction: _ui.hideDestroyAccountErrorModal,
	        title: "Error",
	        errorAddr: ["destroyAccount", "errors"] });
	    }
	  }]);

	  return DestroyAccountErrorModal;
	})(_react2.default.Component);

	exports.default = DestroyAccountErrorModal;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DestroyAccountSuccessModal = (function (_React$Component) {
	  _inherits(DestroyAccountSuccessModal, _React$Component);

	  function DestroyAccountSuccessModal() {
	    _classCallCheck(this, DestroyAccountSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DestroyAccountSuccessModal).apply(this, arguments));
	  }

	  _createClass(DestroyAccountSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "destroy-account-success-modal",
	          closeAction: _ui.hideDestroyAccountSuccessModal,
	          title: "Destroy Account Success" },
	        _react2.default.createElement(
	          "p",
	          null,
	          this.props.auth.getIn(["ui", "destroyAccountMessage"])
	        )
	      );
	    }
	  }]);

	  return DestroyAccountSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(DestroyAccountSuccessModal);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignInErrorModal = (function (_React$Component) {
	  _inherits(EmailSignInErrorModal, _React$Component);

	  function EmailSignInErrorModal() {
	    _classCallCheck(this, EmailSignInErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignInErrorModal).apply(this, arguments));
	  }

	  _createClass(EmailSignInErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "email-sign-in-error-modal",
	        closeAction: _ui.hideEmailSignInErrorModal,
	        title: "Sign In Error",
	        errorAddr: ["emailSignIn", "errors"] });
	    }
	  }]);

	  return EmailSignInErrorModal;
	})(_react2.default.Component);

	exports.default = EmailSignInErrorModal;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignInSuccessModal = (function (_React$Component) {
	  _inherits(EmailSignInSuccessModal, _React$Component);

	  function EmailSignInSuccessModal() {
	    _classCallCheck(this, EmailSignInSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignInSuccessModal).apply(this, arguments));
	  }

	  _createClass(EmailSignInSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "email-sign-in-success-modal",
	          closeAction: _ui.hideEmailSignInSuccessModal,
	          closeBtnLabel: "Close",
	          title: "Welcome Back" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "You are now signed in as ",
	          this.props.auth.getIn(["user", "attributes", "email"]),
	          "."
	        )
	      );
	    }
	  }]);

	  return EmailSignInSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignInSuccessModal);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignUpErrorModal = (function (_React$Component) {
	  _inherits(EmailSignUpErrorModal, _React$Component);

	  function EmailSignUpErrorModal() {
	    _classCallCheck(this, EmailSignUpErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignUpErrorModal).apply(this, arguments));
	  }

	  _createClass(EmailSignUpErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "email-sign-up-error-modal",
	        title: "Sign Up Error",
	        errorAddr: ["emailSignUp", "errors", "full_messages"],
	        closeAction: _ui.hideEmailSignUpErrorModal });
	    }
	  }]);

	  return EmailSignUpErrorModal;
	})(_react2.default.Component);

	exports.default = EmailSignUpErrorModal;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmailSignUpSuccessModal = (function (_React$Component) {
	  _inherits(EmailSignUpSuccessModal, _React$Component);

	  function EmailSignUpSuccessModal() {
	    _classCallCheck(this, EmailSignUpSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSignUpSuccessModal).apply(this, arguments));
	  }

	  _createClass(EmailSignUpSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          containerClass: "email-sign-up-success-modal",
	          show: this.props.show,
	          closeAction: _ui.hideEmailSignUpSuccessModal,
	          title: "Sign Up Success" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "A confirmation email was sent to your account at ",
	          this.props.auth.getIn(["ui", "emailSignUpAddress"]),
	          ". Follow the instructions in the email to complete registration."
	        )
	      );
	    }
	  }]);

	  return EmailSignUpSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(EmailSignUpSuccessModal);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FirstTimeLoginErrorModal = (function (_React$Component) {
	  _inherits(FirstTimeLoginErrorModal, _React$Component);

	  function FirstTimeLoginErrorModal() {
	    _classCallCheck(this, FirstTimeLoginErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FirstTimeLoginErrorModal).apply(this, arguments));
	  }

	  _createClass(FirstTimeLoginErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "first-time-login-error-modal",
	          closeAction: _ui.hideFirstTimeLoginErrorModal,
	          title: "Confirmation Error" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "There was a problem confirming your account. Please try again."
	        )
	      );
	    }
	  }]);

	  return FirstTimeLoginErrorModal;
	})(_react2.default.Component);

	exports.default = FirstTimeLoginErrorModal;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FirstTimeLoginSuccessModal = (function (_React$Component) {
	  _inherits(FirstTimeLoginSuccessModal, _React$Component);

	  function FirstTimeLoginSuccessModal() {
	    _classCallCheck(this, FirstTimeLoginSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FirstTimeLoginSuccessModal).apply(this, arguments));
	  }

	  _createClass(FirstTimeLoginSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "first-time-login-success-modal",
	          title: "Welcome " + this.props.auth.getIn(["user", "attributes", "email"]) + "!",
	          closeBtnLabel: "Close",
	          closeAction: _ui.hideFirstTimeLoginSuccessModal },
	        _react2.default.createElement(
	          "p",
	          null,
	          "Your account has been confirmed."
	        )
	      );
	    }
	  }]);

	  return FirstTimeLoginSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(FirstTimeLoginSuccessModal);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ui = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OAuthSignInErrorModal = (function (_React$Component) {
	  _inherits(OAuthSignInErrorModal, _React$Component);

	  function OAuthSignInErrorModal() {
	    _classCallCheck(this, OAuthSignInErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OAuthSignInErrorModal).apply(this, arguments));
	  }

	  _createClass(OAuthSignInErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "oauth-sign-in-error-modal",
	          closeAction: _ui.hideOAuthSignInErrorModal,
	          title: "OAuth Sign In Error" },
	        _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign" }),
	          " There was an error authenticating your account. Please try again."
	        )
	      );
	    }
	  }]);

	  return OAuthSignInErrorModal;
	})(_react2.default.Component);

	exports.default = OAuthSignInErrorModal;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OAuthSignInSuccessModal = (function (_React$Component) {
	  _inherits(OAuthSignInSuccessModal, _React$Component);

	  function OAuthSignInSuccessModal() {
	    _classCallCheck(this, OAuthSignInSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OAuthSignInSuccessModal).apply(this, arguments));
	  }

	  _createClass(OAuthSignInSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "oauth-sign-in-success-modal",
	          closeAction: _ui.hideOAuthSignInSuccessModal,
	          title: "Welcome" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "You are now signed in via ",
	          this.props.auth.getIn(["user", "attributes", "provider"]),
	          "."
	        )
	      );
	    }
	  }]);

	  return OAuthSignInSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(OAuthSignInSuccessModal);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _ButtonLoader = __webpack_require__(15);

	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

	var _Input = __webpack_require__(22);

	var _Input2 = _interopRequireDefault(_Input);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _updatePasswordModal = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PasswordResetSuccessModal = (function (_React$Component) {
	  _inherits(PasswordResetSuccessModal, _React$Component);

	  function PasswordResetSuccessModal() {
	    _classCallCheck(this, PasswordResetSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PasswordResetSuccessModal).apply(this, arguments));
	  }

	  _createClass(PasswordResetSuccessModal, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _updatePasswordModal.updatePasswordModalFormUpdate)(this.getEndpoint(), key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      console.log("@-->submitting");
	      var formData = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "form"]).toJS();
	      this.props.dispatch((0, _updatePasswordModal.updatePasswordModal)(formData, this.getEndpoint()));
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.props.dispatch((0, _ui.hidePasswordResetSuccessModal)(this.getEndpoint()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var loading = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "loading"]),
	          endpoint = this.getEndpoint();

	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        {
	          show: this.props.show,
	          className: "password-reset-success-modal",
	          onHide: this.close.bind(this) },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            "Reset Your Password"
	          )
	        ),
	        _react2.default.createElement(
	          "form",
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Body,
	            null,
	            _react2.default.createElement(_Input2.default, _extends({
	              type: "password",
	              label: "Password",
	              placeholder: "Password",
	              disabled: loading,
	              className: "password-reset-success-modal-password",
	              value: this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password"]),
	              errors: this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password"]),
	              onChange: this.handleInput.bind(this, "password")
	            }, this.props.inputProps.password)),
	            _react2.default.createElement(_Input2.default, _extends({
	              type: "password",
	              label: "Password Confirmation",
	              placeholder: "Password Confirmation",
	              disabled: loading,
	              className: "password-reset-success-modal-password-confirmation",
	              value: this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password_confirmation"]),
	              errors: this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password_confirmation"]),
	              onChange: this.handleInput.bind(this, "password_confirmation")
	            }, this.props.inputProps.passwordConfirmation))
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Footer,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              _extends({
	                className: "password-reset-success-modal-close",
	                onClick: this.close.bind(this)
	              }, this.props.inputProps.cancel),
	              "Cancel"
	            ),
	            _react2.default.createElement(_ButtonLoader2.default, _extends({}, this.props, {
	              loading: loading,
	              type: "submit",
	              className: "password-reset-success-modal-submit",
	              icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "lock" }),
	              onClick: this.handleSubmit.bind(this)
	            }, this.props.inputProps.submit))
	          )
	        )
	      );
	    }
	  }]);

	  return PasswordResetSuccessModal;
	})(_react2.default.Component);

	PasswordResetSuccessModal.propTypes = {
	  show: _react.PropTypes.bool,
	  inputProps: _react.PropTypes.object
	};
	PasswordResetSuccessModal.defaultProps = {
	  show: false,
	  inputProps: {}
	};
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(PasswordResetSuccessModal);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestPasswordResetErrorModal = (function (_React$Component) {
	  _inherits(RequestPasswordResetErrorModal, _React$Component);

	  function RequestPasswordResetErrorModal() {
	    _classCallCheck(this, RequestPasswordResetErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RequestPasswordResetErrorModal).apply(this, arguments));
	  }

	  _createClass(RequestPasswordResetErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "request-password-reset-error-modal",
	        closeAction: _ui.hidePasswordResetRequestErrorModal,
	        title: "Error",
	        errorAddr: ["requestPasswordReset", "errors"] });
	    }
	  }]);

	  return RequestPasswordResetErrorModal;
	})(_react2.default.Component);

	exports.default = RequestPasswordResetErrorModal;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestPasswordResetSuccessModal = (function (_React$Component) {
	  _inherits(RequestPasswordResetSuccessModal, _React$Component);

	  function RequestPasswordResetSuccessModal() {
	    _classCallCheck(this, RequestPasswordResetSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RequestPasswordResetSuccessModal).apply(this, arguments));
	  }

	  _createClass(RequestPasswordResetSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "request-password-reset-success-modal",
	          title: "Password Reset Request Success",
	          closeAction: _ui.hidePasswordResetRequestSuccessModal },
	        _react2.default.createElement(
	          "p",
	          null,
	          this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])
	        )
	      );
	    }
	  }]);

	  return RequestPasswordResetSuccessModal;
	})(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var auth = _ref.auth;
	  return { auth: auth };
	})(RequestPasswordResetSuccessModal);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignOutErrorModal = (function (_React$Component) {
	  _inherits(SignOutErrorModal, _React$Component);

	  function SignOutErrorModal() {
	    _classCallCheck(this, SignOutErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignOutErrorModal).apply(this, arguments));
	  }

	  _createClass(SignOutErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "sign-out-error-modal",
	          closeAction: _ui.hideSignOutErrorModal,
	          title: "Sign Out Error" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "The server encountered an error while trying to sign you out. Your account information has been wiped from this browser, but you may want to sign in and then sign back out again to resolve any issues."
	        )
	      );
	    }
	  }]);

	  return SignOutErrorModal;
	})(_react2.default.Component);

	exports.default = SignOutErrorModal;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignOutSuccessModal = (function (_React$Component) {
	  _inherits(SignOutSuccessModal, _React$Component);

	  function SignOutSuccessModal() {
	    _classCallCheck(this, SignOutSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignOutSuccessModal).apply(this, arguments));
	  }

	  _createClass(SignOutSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "sign-out-success-modal",
	          title: "Goodbye!",
	          closeAction: _ui.hideSignOutSuccessModal },
	        _react2.default.createElement(
	          "p",
	          null,
	          "You have been successfully signed out."
	        )
	      );
	    }
	  }]);

	  return SignOutSuccessModal;
	})(_react2.default.Component);

	exports.default = SignOutSuccessModal;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePasswordErrorModal = (function (_React$Component) {
	  _inherits(UpdatePasswordErrorModal, _React$Component);

	  function UpdatePasswordErrorModal() {
	    _classCallCheck(this, UpdatePasswordErrorModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordErrorModal).apply(this, arguments));
	  }

	  _createClass(UpdatePasswordErrorModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, {
	        show: this.props.show,
	        containerClass: "update-password-error-modal",
	        title: "Error",
	        closeAction: _ui.hideUpdatePasswordErrorModal,
	        errorAddr: ["updatePassword", "errors", "full_messages"] });
	    }
	  }]);

	  return UpdatePasswordErrorModal;
	})(_react2.default.Component);

	exports.default = UpdatePasswordErrorModal;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ui = __webpack_require__(2);

	var _Modal = __webpack_require__(7);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePasswordSuccessModal = (function (_React$Component) {
	  _inherits(UpdatePasswordSuccessModal, _React$Component);

	  function UpdatePasswordSuccessModal() {
	    _classCallCheck(this, UpdatePasswordSuccessModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordSuccessModal).apply(this, arguments));
	  }

	  _createClass(UpdatePasswordSuccessModal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          containerClass: "update-password-success-modal",
	          closeAction: _ui.hideUpdatePasswordSuccessModal,
	          title: "Success" },
	        _react2.default.createElement(
	          "p",
	          null,
	          "Your password has been successfully changed."
	        )
	      );
	    }
	  }]);

	  return UpdatePasswordSuccessModal;
	})(_react2.default.Component);

	exports.default = UpdatePasswordSuccessModal;

/***/ },
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ function(module, exports) {

	module.exports = cookie;

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = isomorphic-fetch;

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = js-cookie;

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = node-fetch;

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = querystring;

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = rc-dialog;

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = redux-router;

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = url;

/***/ }
/******/ ]);