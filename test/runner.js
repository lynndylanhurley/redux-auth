import jsdomify from "jsdomify";
import clientConfig from "./actions/client-config-test";
import serverConfig from "./actions/server-config-test";
import buttonLoader from "./views/button-loader-test";
import destroyAccountButton from "./views/destroy-account-button-test";
import emailSignIn from "./views/email-sign-in-test";
import emailSignUp from "./views/email-sign-up-test";
import modals from "./views/modals-test";
import oAuthSignIn from "./views/oauth-sign-in-test";
import passwordReset from "./views/password-reset-test";
import passwordUpdateModal from "./views/password-update-modal-test";
import passwordUpdate from "./views/password-update-test";
import signOut from "./views/sign-out-test";

beforeEach(done => {
  // this is necessary for material ui to render
  global.navigator = {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36"
  };

  global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};

  if (typeof(document) !== "undefined") {
    //jsdomify.clear();
    document.body.innerHTML = ""
  } else {
    jsdomify.create();
  }

  if (typeof(window) !== "undefined") {
    window.navigator = global.navigator;
  }


  let {resetConfig} = require("../src/utils/session-storage");
  resetConfig();

  setTimeout(done, 1);
})

clientConfig();
serverConfig();
buttonLoader();
destroyAccountButton();
emailSignIn();
emailSignUp();
oAuthSignIn();
passwordReset();
passwordUpdateModal();
passwordUpdate();
signOut();
modals();
