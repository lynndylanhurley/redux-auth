import React from "react";
import TestUtils from "react-addons-test-utils";
import {spy} from "sinon";
import {expect} from "chai";
import {retrieveData, persistData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import * as C from "../../src/utils/constants";
import {renderConnectedComponent} from "../helper";
import nock from "nock";
import jsdomify from "jsdomify";


var findClass = (className) => document.getElementsByClassName(className)[0],
    findButtonWithType = (type) => [].slice.call(document.getElementsByTagName("button")).filter(el => {
      return el.getAttribute("type") === type;
    })[0],
    findTag = (tagName, i) => document.getElementsByTagName(tagName)[i],
    requirePath,
    successRespSpy,
    errorRespSpy,
    testUid = "test@test.com",
    initialState = {
      user: {
        isSignedIn: true,
        attributes: {
          provider: "email"
        }
      },
      ui: {
        passwordResetSuccessModalVisible: true
      }
    },
    successRespHeaders = {
      "Content-Type": "application/json",
      "access-token": "abc"
    },
    successResp = {
      "success":true,
      "data": {
        "user":{"email":"test@test.com"},
        "message":"Your password has been successfully updated."
      }
    },
    errorResp = {
      "success":false,
      "errors":{
        "password_confirmation":["doesn't match Password"],
        "password":["is too short (minimum is 8 characters)"],
        "full_messages":[
          "Password confirmation doesn't match Password",
          "Password is too short (minimum is 8 characters)"
        ]
      }
    };


function wipeout () {
  jsdomify.getDocument().body.innerHTML = "";
}

export default function() {
  describe("PasswordResetSuccessModal update form", () => {
    [
      "bootstrap",
      "default",
      "material-ui"
    ].forEach((theme) => {
      requirePath = `../../src/views/${theme}/modals/PasswordResetSuccessModal`;
      var PasswordResetSuccessModal = require(requirePath).default;

      // we have to wait 1 sec to clear all the modals from the dom between
      // test suites. this is due to an issue with the Dialog implementation of
      // material-ui.
      after(done => {
        setTimeout(() => {
          wipeout();
          done();
        }, 1000);
      })

      describe(`${theme} theme`, () => {
        describe(`params`, () => {
          it("should accept styling params", done => {
            wipeout();

            let classNameProp = (theme === 'bootstrap') ? 'groupClassName' : 'className';

            let inputProps = {
              password: {[classNameProp]: "password-class-override"},
              passwordConfirmation: {[classNameProp]: "password-confirmation-class-override"},
              submit: {className: "submit-class-override"}
            };

            renderConnectedComponent(
              <PasswordResetSuccessModal inputProps={inputProps} show={true} />, undefined, initialState
            ).then(() => {
              expect(findClass("password-class-override")).to.be.ok;
              expect(findClass("password-confirmation-class-override")).to.be.ok;
              expect(findClass("submit-class-override")).to.be.ok;

              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            wipeout();

            var testUrl = "http://alt.dev";

            successRespSpy = spy(() => successResp);

            nock(testUrl)
              .put("/auth/password")
              .reply(200, successRespSpy, successRespHeaders);

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent(
              <PasswordResetSuccessModal show={true} />, endpointConfig, initialState
            ).then(({store}) => {
              // establish that we're using the "alt" endpoint config
              store.dispatch(storeCurrentEndpointKey("alt"));
              persistData(C.SAVED_CONFIG_KEY, "alt");

              // change input values
              let passwordEl = findTag("input", 0);
              let passwordConfirmationEl = findTag("input", 1);

              passwordEl.value = "whatever";
              passwordConfirmationEl.value = "whatever";

              TestUtils.Simulate.change(passwordEl);
              TestUtils.Simulate.change(passwordConfirmationEl);

              // submit changed password
              let submitEl = findButtonWithType("submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // expect response to have been made to alt endpoint url
                expect(successRespSpy.called).to.be.ok;
                done();
              }, 0);
            }).catch(e => console.log("errors:", e));
          });
        });

        describe(`success`, () => {
          it("should handle successful password update", done => {
            wipeout();

            var testPassword = "secret123";
            var apiUrl       = "http://api.dev";

            successRespSpy = spy(() => successResp);

            nock(apiUrl)
              .put("/auth/password")
              .reply(200, successRespSpy, successRespHeaders);

            renderConnectedComponent((
              <PasswordResetSuccessModal show={true} />
            ), {apiUrl}, initialState).then(({store}) => {
              let passwordEl = findTag("input", 0);
              let passwordConfirmationEl = findTag("input", 1);

              console.log("input el count", document.getElementsByTagName("input").length);

              // change input values
              passwordEl.value = testPassword;
              passwordConfirmationEl.value = testPassword;

              // trigger dom change event
              TestUtils.Simulate.change(passwordEl);
              TestUtils.Simulate.change(passwordConfirmationEl);

              // ensure store is updated when inputs are changed
              expect(store.getState().auth.getIn(["updatePasswordModal", "default", "form", "password"])).to.equal(testPassword);
              expect(store.getState().auth.getIn(["updatePasswordModal", "default", "form", "password_confirmation"])).to.equal(testPassword);

              // submit the form
              let submitEl = findButtonWithType("submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure default url was used
                expect(successRespSpy.called).to.be.ok;

                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });

        describe(`error`, () => {
          it("should handle failed sign in", done => {
            wipeout();

            var apiUrl = "http://api.dev";

            errorRespSpy = spy(() => errorResp);

            nock(apiUrl)
              .put("/auth/password")
              .reply(401, errorRespSpy);

            renderConnectedComponent(
              <PasswordResetSuccessModal show={true} />, {apiUrl}, initialState
            ).then(({store}) => {
              // change input values
              let passwordEl = findTag("input", 0);
              passwordEl.value = testUid;
              TestUtils.Simulate.change(passwordEl);

              // submit the form
              let submitEl = findButtonWithType("submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure endpoint was hit
                expect(errorRespSpy.called).to.be.ok;

                let errors = store.getState().auth.getIn(["updatePasswordModal", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "passwordResetSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure errors show up in form
                let errorItems = document.getElementsByClassName("inline-error-item");
                expect(errorItems.length).to.equal(2);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });
      });
    });
  });
}
