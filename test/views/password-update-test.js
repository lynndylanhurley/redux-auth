import React from "react";
import {spy} from "sinon";
import {expect} from "chai";
import {retrieveData, persistData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import * as C from "../../src/utils/constants";
import TestUtils from "react-addons-test-utils";
import {renderConnectedComponent} from "../helper";
import nock from "nock";


var findClass = TestUtils.findRenderedDOMComponentWithClass,
    findTag = TestUtils.scryRenderedDOMComponentsWithTag;

var requirePath,
    successRespSpy,
    errorRespSpy,
    testUid = "test@test.com",
    initialState = {
      user: {
        isSignedIn: true,
        attributes: {
          provider: "email"
        }
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

export default function() {
  describe("UpdatePasswordForm", () => {
    [
      "",
      "/views/bootstrap",
      "/views/material-ui"
    ].forEach((theme) => {
      requirePath = `../../src${theme}`;
      var {UpdatePasswordForm} = require(requirePath);

      describe(`${theme} theme`, () => {
        describe("params", () => {
          it("should accept styling params", done => {
            let inputProps = {
              password: {style: {color: "red"}, className: "password-class-override"},
              passwordConfirmation: {style: {color: "pink"}, className: "password-confirmation-class-override"},
              submit: {className: "submit-class-override"}
            };

            renderConnectedComponent(
              <UpdatePasswordForm inputProps={inputProps} />
            ).then(({instance}) => {
              findClass(instance, "password-class-override");
              findClass(instance, "password-confirmation-class-override");
              findClass(instance, "submit-class-override");

              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            var testUrl = "http://alt.dev";

            successRespSpy = spy(() => successResp);

            nock(testUrl)
              .put("/auth/password")
              .reply(200, successRespSpy, successRespHeaders);

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent((
              <UpdatePasswordForm />
            ), endpointConfig, initialState).then(({instance, store}) => {
              // establish that we're using the "alt" endpoint config
              store.dispatch(storeCurrentEndpointKey("alt"));
              persistData(C.SAVED_CONFIG_KEY, "alt");

              // change input values
              let passwordEl = findTag(instance, "input")[0];
              let passwordConfirmationEl = findTag(instance, "input")[1];

              passwordEl.value = "whatever";
              passwordConfirmationEl.value = "whatever";

              TestUtils.Simulate.change(passwordEl);
              TestUtils.Simulate.change(passwordConfirmationEl);

              // submit changed password
              let formEl = findClass(instance, "update-password-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: spy()});

              setTimeout(() => {
                // expect response to have been made to alt endpoint url
                expect(successRespSpy.called).to.be.ok;
                done();
              }, 0);

            }).catch(e => console.log("errors:", e));
          });
        });

        describe("success", () => {
          it("should handle successful password update", done => {
            var testPassword = "secret123";
            var apiUrl       = "http://api.dev";

            successRespSpy = spy(() => successResp);

            nock(apiUrl)
              .put("/auth/password")
              .reply(200, successRespSpy, successRespHeaders);

            renderConnectedComponent((
              <UpdatePasswordForm />
            ), {apiUrl}, initialState).then(({instance, store}) => {
              let passwordEl = findTag(instance, "input")[0];
              let passwordConfirmationEl = findTag(instance, "input")[1];

              // change input values
              passwordEl.value = testPassword;
              passwordConfirmationEl.value = testPassword;

              // trigger dom change event
              TestUtils.Simulate.change(passwordEl);
              TestUtils.Simulate.change(passwordConfirmationEl);

              // ensure store is updated when inputs are changed
              expect(store.getState().auth.getIn(["updatePassword", "default", "form", "password"])).to.equal(testPassword);
              expect(store.getState().auth.getIn(["updatePassword", "default", "form", "password_confirmation"])).to.equal(testPassword);

              // submit the form
              let formEl = findClass(instance, "update-password-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: spy()});

              setTimeout(() => {
                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure default url was used
                expect(successRespSpy.called).to.be.ok;

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });

        describe("error", () => {
          it("should handle password update", done => {
            var apiUrl = "http://api.dev";

            errorRespSpy = spy(() => errorResp);

            nock(apiUrl)
              .put("/auth/password")
              .reply(401, errorRespSpy);

            renderConnectedComponent(
              <UpdatePasswordForm />, {apiUrl}, initialState
            ).then(({instance, store}) => {
              // change input values
              let passwordEl = TestUtils.scryRenderedDOMComponentsWithTag(instance, "input")[0];
              passwordEl.value = testUid;
              TestUtils.Simulate.change(passwordEl);

              // submit the form
              let formEl =TestUtils.findRenderedDOMComponentWithClass(instance, "update-password-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: spy()});

              setTimeout(() => {
                // ensure endpoint was hit
                expect(errorRespSpy.called).to.be.ok;

                let errors = store.getState().auth.getIn(["updatePassword", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "updatePasswordErrorModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure errors show up in form
                let errorItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, "inline-error-item");
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
