import jsdomify from "jsdomify";
import nock from "nock";
import {resetConfig} from "../src/utils/session-storage";

//import passwordReset from "./views/password-reset-test";
//import passwordUpdateModal from "./views/password-update-modal-test";
//import passwordUpdate from "./views/password-update-test";
//import signOut from "./views/sign-out-test";

jsdomify.create();

beforeEach(() => {
  // this is necessary for material ui to render
  global.navigator = window.navigator = {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36"
  };

  // shut up dev tools i don't want you
  global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};

  // always clear request mocks
  nock.cleanAll();

  // always clear saved credentials
  resetConfig();
});

// these must be required (not imported) AFTER jsdomify.create() so that React
// uses the global jsdom defined in this file
[
  //"./actions/client-config-test",
  //"./actions/server-config-test",
  //"./views/button-loader-test",
  //"./views/email-sign-up-test",
  //"./views/destroy-account-button-test",
  //"./views/email-sign-in-test",
  //"./views/modals-test",
  "./views/oauth-sign-in-test"
].forEach(suite => require(suite).default());
