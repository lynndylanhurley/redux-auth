import React from "react";
import TestUtils from "react-addons-test-utils";
import {spy} from "sinon";
import {expect} from "chai";
import {retrieveData} from "../../src/utils/session-storage";
import {getCurrentEndpointKey} from "../../src/utils/session-storage";
import * as C from "../../src/utils/constants";
import {renderConnectedComponent} from "../helper";
import nock from "nock";

var findClass = TestUtils.findRenderedDOMComponentWithClass;

var EmailSignInForm,
    successRespSpy,
    errorRespSpy,
    testUid = "test@test.com",
    successRespHeaders = {
      "Content-Type": "application/json",
      "access-token": "abc"
    },
    errorResp = {"errors":["Invalid login credentials. Please try again."]};

export default function() {
  describe("EmailSignInForm", () => {
    [
      "material-ui",
      "bootstrap",
      "default"
    ].forEach((theme) => {
      var requirePath = `../../src/views/${theme}/EmailSignInForm`;
      EmailSignInForm = require(requirePath).default;

      describe(`${theme} theme`, () => {
        describe(`params`, () => {
          it("should accept styling params", done => {
            let inputProps = {
              email: {style: {color: "red"}, className: "email-class-override"},
              password: {style: {color: "green"}, className: "password-class-override"},
              submit: {style: {color: "orange"}, className: "submit-class-override"}
            };

            renderConnectedComponent(
              <EmailSignInForm inputProps={inputProps} />
            ).then(({instance}) => {
              let emailEl    = findClass(instance, "email-class-override");
              let passwordEl = findClass(instance, "password-class-override");
              findClass(instance, "submit-class-override");
              expect(emailEl.getAttribute("style")).to.match(/color:red/);
              expect(passwordEl.getAttribute("style")).to.match(/color:green/);
              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            var testUrl = "http://alt.dev";

            successRespSpy = spy(() => ({data: {uid: testUid}}));

            nock(testUrl)
              .post("/auth/sign_in")
              .reply(200, successRespSpy, successRespHeaders);

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent((
              <EmailSignInForm endpoint="alt" />
            ), endpointConfig).then(({instance, store}) => {
              let submitEl = findClass(instance, "email-sign-in-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure endpoint was hit
                expect(successRespSpy.called).to.be.ok;

                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

                // ensure default endpoint key was set to "default"
                let defaultEndpoint = store.getState().auth.getIn(["configure", "defaultEndpointKey"]);
                expect(defaultEndpoint).to.equal("default");

                // ensure endpoint key was saved
                let currentEndpoint = store.getState().auth.getIn(["configure", "currentEndpointKey"]);
                expect(currentEndpoint).to.equal("alt");
                expect(getCurrentEndpointKey()).to.equal("alt");

                // ensure user was set
                let uid = store.getState().auth.getIn(["user", "attributes", "uid"]);
                expect(uid).to.equal(testUid)

                done();
              }, 100);

            }).catch(e => console.log("errors:", e));
          });
        });

        describe(`success`, () => {
          it("should handle successful sign in", done => {
            var testEmail    = "test@test.com";
            var testPassword = "test@test.com";
            var apiUrl       = "http://api.dev";

            successRespSpy = spy(() => ({data: {uid: testUid}}));

            nock(apiUrl)
              .post("/auth/sign_in")
              .reply(200, successRespSpy, successRespHeaders);

            renderConnectedComponent((
              <EmailSignInForm />
            ), {apiUrl}).then(({instance, store}) => {
              // find inputs
              let emailEl = TestUtils.scryRenderedDOMComponentsWithTag(instance, "input")[0];
              let passwordEl = TestUtils.scryRenderedDOMComponentsWithTag(instance, "input")[1];

              // change input values
              emailEl.value = testEmail;
              passwordEl.value = testPassword;

              // trigger dom change event
              TestUtils.Simulate.change(emailEl);
              TestUtils.Simulate.change(passwordEl);

              // ensure store is updated when inputs are changed
              expect(store.getState().auth.getIn(["emailSignIn", "default", "form", "email"])).to.equal(testEmail);
              expect(store.getState().auth.getIn(["emailSignIn", "default", "form", "password"])).to.equal(testPassword);

              // submit the form
              let submitEl = findClass(instance, "email-sign-in-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // was endpoint hit?
                expect(successRespSpy.called).to.be.ok;

                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

                // ensure user was set
                let uid = store.getState().auth.getIn(["user", "attributes", "uid"]);
                expect(uid).to.equal(testUid)

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "emailSignInSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure configuration is set to default
                expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("default");
                expect(getCurrentEndpointKey()).to.equal("default");

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });


        describe(`error`, () => {
          it("should handle failed sign in", done => {
            var apiUrl = "http://api.dev";

            errorRespSpy = spy(() => errorResp);

            nock(apiUrl)
              .post("/auth/sign_in")
              .reply(401, errorRespSpy);

            renderConnectedComponent(
              <EmailSignInForm />, {apiUrl}
            ).then(({instance, store}) => {
              // submit the form
              let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "email-sign-in-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // was endpoint hit?
                expect(errorRespSpy.called).to.be.ok;

                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders).to.equal(undefined);

                let errors = store.getState().auth.getIn(["emailSignIn", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp);

                // ensure user was not set
                let user = store.getState().auth.getIn(["user", "attributes"]);
                expect(user).to.equal(null)

                let modalVisible = store.getState().auth.getIn(["ui", "emailSignInErrorModalVisible"]);
                expect(modalVisible).to.equal(true);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });
      });
    });
  });
}
