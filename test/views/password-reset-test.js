import React from "react";
import TestUtils from "react-addons-test-utils";
import {spy} from "sinon";
import {expect} from "chai";
import {persistData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import * as C from "../../src/utils/constants";
import {renderConnectedComponent} from "../helper";
import nock from "nock";

var findClass = TestUtils.findRenderedDOMComponentWithClass,
    findTag = TestUtils.scryRenderedDOMComponentsWithTag;

var requirePath,
    successRespSpy,
    errorRespSpy,
    testUid = "test@test.com",
    successResp = {
      message: "An email has been sent to test@test.com containing "+
        "instructions for resetting your password."
    },
    errorResp = {
      errors :["Unable to find user with email 'aoeu'."]
    };

export default function() {
  describe("RequestPasswordResetForm", () => {
    [
      "/views/default",
      "/views/bootstrap",
      "/views/material-ui"
    ].forEach((theme) => {
      requirePath = `../../src${theme}`;
      var {RequestPasswordResetForm} = require(requirePath);

      describe(`${theme || "default"} theme`, () => {
        describe(`params`, () => {
          it("should accept styling params", done => {
            let classNameProp = (theme === '/views/bootstrap') ? 'groupClassName' : 'className';
            let inputProps = {
              email: {style: {color: "red"}, [classNameProp]: "email-class-override"},
              submit: {className: "submit-class-override"}
            };

            renderConnectedComponent(
              <RequestPasswordResetForm inputProps={inputProps} />
            ).then(({instance}) => {
              let emailEl = findClass(instance, "email-class-override")
              findClass(instance, "submit-class-override")
              expect(emailEl.getAttribute("style")).to.match(/color:\s?red/)
              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            var testUrl = "http://alt.dev";

            successRespSpy = spy(() => [200, successResp]);

            nock(testUrl)
              .post("/auth/password?config_name=alt")
              .reply(successRespSpy);

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent((
              <RequestPasswordResetForm />
            ), endpointConfig).then(({instance, store}) => {
              // establish that we're using the "alt" endpoint config
              store.dispatch(storeCurrentEndpointKey("alt"));
              persistData(C.SAVED_CONFIG_KEY, "alt");

              // change input values
              let emailEl = findTag(instance, "input")[0];
              emailEl.value = "whatever";
              TestUtils.Simulate.change(emailEl);

              let formEl = findClass(instance, "request-password-reset-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: spy()});

              setTimeout(() => {
                // expect response to have been made to alt endpoint url
                expect(successRespSpy.called).to.be.ok;

                done();
              }, 0);

            }).catch(e => console.log("errors:", e));
          });
        });

        describe(`success`, () => {
          it("should handle successful sign in", done => {
            var testEmail = testUid;
            var apiUrl    = "http://api.dev";

            successRespSpy = spy(() => [200, successResp]);

            nock(apiUrl)
              .post("/auth/password?config_name=default")
              .reply(successRespSpy);

            renderConnectedComponent((
              <RequestPasswordResetForm />
            ), {apiUrl}).then(({instance, store}) => {
              let emailEl = findTag(instance, "input")[0];

              // change input values
              emailEl.value = testEmail;

              // trigger dom change event
              TestUtils.Simulate.change(emailEl);

              // ensure store is updated when inputs are changed
              expect(store.getState().auth.getIn(["requestPasswordReset", "default", "form", "email"])).to.equal(testEmail);

              // submit the form
              let formEl = findClass(instance, "request-password-reset-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: spy()});

              setTimeout(() => {
                // ensure default url was used
                expect(successRespSpy.called).to.be.ok;

                // ensure user was set
                let sentMessage = store.getState().auth.getIn(["ui", "requestPasswordResetSuccessMessage"]);
                expect(sentMessage).to.equal(successResp["message"]);

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });

        describe(`error`, () => {
          it("should handle failed sign in", done => {
            var apiUrl = "http://api.dev";

            errorRespSpy = spy(() => [401, errorResp]);

            nock(apiUrl)
              .post("/auth/password?config_name=default")
              .reply(errorRespSpy);

            renderConnectedComponent(
              <RequestPasswordResetForm />, {apiUrl}
            ).then(({instance, store}) => {
              // change input values
              let emailEl = findTag(instance, "input")[0];

              emailEl.value = testUid;
              TestUtils.Simulate.change(emailEl);

              // submit the form
              let formEl =TestUtils.findRenderedDOMComponentWithClass(instance, "request-password-reset-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: spy()});

              setTimeout(() => {
                // ensure endpoint was hit
                expect(errorRespSpy.called).to.be.ok;

                // ensure errors are parsed
                let errors = store.getState().auth.getIn(["requestPasswordReset", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "requestPasswordResetErrorModalVisible"]);
                expect(modalVisible).to.equal(true);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });
      })
    });
  });
}
