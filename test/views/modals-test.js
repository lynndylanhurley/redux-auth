import React from "react";
import TestUtils from "react-addons-test-utils";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import {resetConfig} from "../../src/utils/session-storage";
import {renderConnectedComponent} from "../helper";

var AuthGlobals;

/*
 * Batch test the functionality shared by the 18 or so modals.
 */

describe.only("Modals", () => {

  jsdom();

  [
    //"bootstrap",
    "material-ui"
  ].forEach((theme) => {
    beforeEach(() => {
      resetConfig();
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
      ["UpdatePasswordErrorModal",         "updatePasswordErrorModalVisible",         "update-password-error-modal"],
      ["EmailSignInErrorModal",            "emailSignInErrorModalVisible",            "email-sign-in-error-modal"],
      ["EmailSignInSuccessModal",          "emailSignInSuccessModalVisible",          "email-sign-in-success-modal"],
      ["UpdatePasswordSuccessModal",       "updatePasswordSuccessModalVisible",       "update-password-success-modal"]
    ].forEach(([componentName, vizProp, modalClass]) => {

      let modalContainerClass = "redux-auth-modal";
      if (theme === "bootstrap") {
        modalContainerClass = "modal";
      }

      describe(`${theme} ${componentName}`, () => {
        beforeEach(() => {
          let Modal = require("react-modal");
          Modal.setAppElement(document.body);
          AuthGlobals = require(`../../src/views/${theme}/AuthGlobals`);
        })

        afterEach(() => {
          let modals = document.getElementsByClassName(modalContainerClass);
          for (var m in modals) {
            modals[m].parentNode.removeChild(modals[m]);
          }
        });

        it(`${theme} modal visibility should correlate with ui.${vizProp} value`, done => {
          let initialState = {ui: {[vizProp]: true}};

          /*
           * Note that we can't use TestUtils to find the rendered components
           * because modals are rendered outside of the instance tree.
           */
          renderConnectedComponent(<AuthGlobals />, undefined, initialState).then(({store}) => {
            // ensure modal is visible
            expect(document.getElementsByClassName(modalClass)).to.be.ok;
            expect(document.getElementsByClassName(modalContainerClass)).to.be.ok;

            // ensure close button is present
            let closeBtnEl = document.getElementsByClassName(`${modalClass}-close`);
            expect(closeBtnEl.length).to.equal(1);

            // ensure close button closes modal
            TestUtils.Simulate.click(closeBtnEl[0]);
            expect(store.getState().auth.getIn(["ui", vizProp])).to.equal(false);

            done();
          }).catch(e => console.log("error:", e.stack));
        });
      });
    });
  });
});
