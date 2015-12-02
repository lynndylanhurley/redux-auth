import jsdomify from "jsdomify";

var React,
    TestUtils,
    expect,
    renderConnectedComponent,
    AuthGlobals;

/*
 * Batch test the functionality shared by the 18 or so modals.
 */

export default function() {
  describe("Modals", () => {
    [
      "bootstrap",
      "material-ui"
    ].forEach((theme) => {

      describe(`${theme} theme`, () => {
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

          describe(componentName, () => {
            beforeEach(() => {
              if (typeof(window) === "undefined") {
                jsdomify.create();
              } else {
                jsdomify.clear();
              }

              React = require("react");
              require("react-tap-event-plugin")();
              TestUtils = require("react-addons-test-utils");
              ({expect} = require ("chai"));
              ({renderConnectedComponent} = require("../helper"));
              AuthGlobals = require(`../../src/views/${theme}/AuthGlobals`).default;
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
}
