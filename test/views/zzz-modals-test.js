import jsdomify from "jsdomify";

var React,
    TestUtils,
    expect,
    resetConfig,
    renderConnectedComponent,
    AuthGlobals;

/*
 * Batch test the functionality shared by the 18 or so modals.
 */


describe("Modals", () => {
  [
    "bootstrap",
    "material-ui"
  ].forEach((theme) => {

    describe(`${theme} theme`, () => {
      before(() => {
        jsdomify.create();
      });

      after(() => {
        jsdomify.destroy();
      });

      [
        ["DestroyAccountErrorModal",         "destroyAccountErrorModalVisible",         "destroy-account-error-modal"],
        ["DestroyAccountSuccessModal",       "destroyAccountSuccessModalVisible",       "destroy-account-success-modal"],
        ["EmailSignUpSuccessModal",          "emailSignUpSuccessModalVisible",          "email-sign-up-success-modal"],
        ["FirstTimeLoginErrorModal",         "firstTimeLoginErrorModalVisible",         "first-time-login-error-modal"],
        ["FirstTimeLoginSuccessModal",       "firstTimeLoginSuccessModalVisible",       "first-time-login-success-modal"],
        ["OAuthSignInErrorModal",            "oAuthSignInErrorModalVisible",            "oauth-sign-in-error-modal"],
        ["OAuthSignInSuccessModal",          "oAuthSignInSuccessModalVisible",          "oauth-sign-in-success-modal"],
        ["PasswordResetSuccessModal",        "passwordResetSuccessModalVisible",        "password-reset-success-modal"],
        ["RequestPasswordResetErrorModal",   "requestPasswordResetErrorModalVisible",   "request-password-reset-error-modal"],
        ["RequestPasswordResetSuccessModal", "requestPasswordResetSuccessModalVisible", "request-password-reset-success-modal"],
        ["SignOutErrorModal",                "signOutErrorModalVisible",                "sign-out-error-modal"],
        ["SignOutSuccessModal",              "signOutSuccessModalVisible",              "sign-out-success-modal"],
        ["EmailSignInErrorModal",            "emailSignInErrorModalVisible",            "email-sign-in-error-modal"],
        ["EmailSignInSuccessModal",          "emailSignInSuccessModalVisible",          "email-sign-in-success-modal"],
        ["UpdatePasswordErrorModal",         "updatePasswordErrorModalVisible",         "update-password-error-modal"],
        ["UpdatePasswordSuccessModal",       "updatePasswordSuccessModalVisible",       "update-password-success-modal"]
      ].forEach(([componentName, vizProp, modalClass]) => {

        var modalContainerClass = "redux-auth-modal";
        if (theme === "bootstrap") {
          modalContainerClass = "modal";
        }

        /*
        * Note that we can't use TestUtils to find the rendered components
        * because modals are rendered outside of the instance tree.
        */
        function findClass (className) {
          let matches = jsdomify.getDocument().getElementsByClassName(className);

          if (matches.length !== 1) {
            throw `Expected 1 match to ${className}, instead got ${matches.length}`;
          }

          return matches[0];
        };

        //if (theme === "default") {
          //let Modal = require("react-modal");
          //Modal.setAppElement(document.body);
        //}

        describe(componentName, () => {
          beforeEach(() => {
            jsdomify.clear();

            // this is necessary for material ui to render
            global.navigator = {
              userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36"
            };

            if (typeof(window) !== "undefined") {
              window.navigator = global.navigator;
            }

            React = require("react");
            require("react-tap-event-plugin")();
            TestUtils = require("react-addons-test-utils");
            ({expect} = require ("chai"));
            ({resetConfig} = require("../../src/utils/session-storage"));
            ({renderConnectedComponent} = require("../helper"));
            AuthGlobals = require(`../../src/views/${theme}/AuthGlobals`);

            resetConfig();
          });

          it(`modal visibility should correlate with ui.${vizProp} value`, done => {
            let initialState = {ui: {[vizProp]: true}};

            renderConnectedComponent(<AuthGlobals />, undefined, initialState).then(({store}) => {
              // ensure modal is visible
              expect(findClass(modalClass)).to.be.ok;
              expect(findClass(modalContainerClass)).to.be.ok;

              // ensure close button is present
              let closeBtnEl = findClass(`${modalClass}-close`);

              // ensure close button closes modal
              TestUtils.Simulate.click(closeBtnEl);
              expect(store.getState().auth.getIn(["ui", vizProp])).to.equal(false);

              done();
            }).catch(e => console.log("error:", e.stack));
          });
        });
      });
    })
  });
});
