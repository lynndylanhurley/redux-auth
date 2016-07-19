import React from "react";
import TestUtils from "react-addons-test-utils";
import sinon from "sinon";
import {expect} from "chai";
import {retrieveData} from "../../src/utils/session-storage";
import * as C from "../../src/utils/constants";
import {renderConnectedComponent} from "../helper";
import nock from "nock";

var findClass = TestUtils.findRenderedDOMComponentWithClass,
    findTag = TestUtils.scryRenderedDOMComponentsWithTag;


var requirePath,
    successRespSpy,
    errorRespSpy,
    testUid = "test@test.com",
    testPassword = "secret123",
      successRespHeaders = {
        "Content-Type": "application/json",
        "access-token": "abc"
      },
      errorResp = {
        "status":"error",
        "data": {
          "uid": testUid,
          "email": testUid
        },
        "errors": {
          "password_confirmation": ["doesn't match Password"],
          "password": ["is too short (minimum is 8 characters)"],
          "email": ["is not an email"],
          "full_messages":[
            "Password confirmation doesn't match Password",
            "Password is too short (minimum is 8 characters)",
            "Email is not an email"
          ]
        }
      };

export default function() {
  describe("EmailSignUpForm", () => {

    [
      "/views/default",
      "/views/material-ui",
      "/views/bootstrap"
    ].forEach((theme) => {
      requirePath = `../../src${theme}`;
      var {EmailSignUpForm} = require(requirePath);

      describe(`${theme} theme`, () => {
        describe(`params`, () => {
          it("should accept styling params", done => {
            let classNameProp = (theme === '/views/bootstrap') ? 'groupClassName' : 'className';

            let inputProps = {
              email: {style: {color: "red"}, [classNameProp]: "email-class-override"},
              password: {style: {color: "green"}, [classNameProp]: "password-class-override"},
              passwordConfirmation: {style: {color: "purple"}, [classNameProp]: "password-confirmation-class-override"},
              submit: {className: "submit-class-override"}
            };

            renderConnectedComponent(
              <EmailSignUpForm inputProps={inputProps} />
            ).then(({instance}) => {
              let emailEl                = findClass(instance, "email-class-override");
              let passwordEl             = findClass(instance, "password-class-override");
              let passwordConfirmationEl = findClass(instance, "password-confirmation-class-override");
              findClass(instance, "submit-class-override");
              expect(emailEl.getAttribute("style")).to.match(/color:\s?red/);
              expect(passwordEl.getAttribute("style")).to.match(/color:\s?green/);
              expect(passwordConfirmationEl.getAttribute("style")).to.match(/color:\s?purple/);
              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            var testUrl = "http://alt.dev";

            successRespSpy = sinon.spy(() => {
              return [200, {data: {uid: testUid, email: testUid}}];
            });

            nock(testUrl)
              .post("/auth?config_name=alt")
              .reply(200, successRespSpy, successRespHeaders);

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent((
              <EmailSignUpForm endpoint="alt" />
            ), endpointConfig).then(({instance}) => {
              let formEl = findClass(instance, "email-sign-up-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: sinon.spy()});

              setTimeout(() => {
                // expect response to have been made to alt endpoint url
                expect(successRespSpy.called).to.be.ok;
                done();
              }, 0);

            }).catch(e => console.log("errors:", e.stack));
          });
        });

        describe(`success`, () => {
          beforeEach(() => {
            // mock succes response
            successRespSpy = sinon.spy((url) => {
              return mockFetchResponse(url, 200, {data: {uid: testUid, email: testUid}}, successRespHeaders);
            });
          });

          it("should handle successful sign up", done => {
            var testEmail = testUid;
            var apiUrl    = "http://api.dev";
            var nextSpy   = sinon.spy();

            successRespSpy = sinon.spy(() => {
              return [200, {data: {uid: testUid, email: testUid}}];
            });

            nock(apiUrl)
              .post("/auth?config_name=default")
              .reply(200, successRespSpy, successRespHeaders);

            renderConnectedComponent((
              <EmailSignUpForm next={nextSpy} />
            ), {apiUrl}).then(({instance, store}) => {
              let emailEl = findTag(instance, "input")[0];
              let passwordEl = findTag(instance, "input")[1];
              let passwordConfirmEl = TestUtils.scryRenderedDOMComponentsWithTag(instance, "input")[2];

              // change input values
              emailEl.value = testEmail;
              passwordEl.value = testPassword;
              passwordConfirmEl.value = testPassword;

              // trigger dom change event
              TestUtils.Simulate.change(emailEl);
              TestUtils.Simulate.change(passwordEl);
              TestUtils.Simulate.change(passwordConfirmEl);

              // ensure store is updated when inputs are changed
              expect(store.getState().auth.getIn(["emailSignUp", "default", "form", "email"])).to.equal(testEmail);
              expect(store.getState().auth.getIn(["emailSignUp", "default", "form", "password"])).to.equal(testPassword);
              expect(store.getState().auth.getIn(["emailSignUp", "default", "form", "password_confirmation"])).to.equal(testPassword);

              // submit the form
              let formEl = findClass(instance, "email-sign-up-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: sinon.spy()});

              setTimeout(() => {
                // ensure user was set
                let sentAddress = store.getState().auth.getIn(["ui", "emailSignUpAddress"]);
                expect(sentAddress).to.equal(testEmail)

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "emailSignUpSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure default url was used
                expect(successRespSpy.called).to.be.ok;

                // ensure `next` method was called
                expect(nextSpy.called).to.be.ok;

                done();
              }, 100);
            }).catch(e => console.log("errors", e.stack));
          });
        });

        describe(`error`, () => {
          it("should handle failed sign in", done => {
            var apiUrl  = "http://api.dev";
            var nextSpy = sinon.spy();

            errorRespSpy = sinon.spy(() => {
              return [401, errorResp];
            });

            nock(apiUrl)
              .post("/auth?config_name=default")
              .reply(401, errorRespSpy);

            renderConnectedComponent(
              <EmailSignUpForm next={nextSpy} />, {apiUrl}
            ).then(({instance, store}) => {
              // submit the form
              let formEl = findClass(instance, "email-sign-up-form");
              TestUtils.Simulate.submit(formEl, {preventDefault: sinon.spy()});

              setTimeout(() => {
                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders).to.equal(null);

                let errors = store.getState().auth.getIn(["emailSignUp", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure user was not set
                let user = store.getState().auth.getIn(["user", "attributes"]);
                expect(user).to.equal(null)

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "emailSignUpErrorModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure errors show up in form
                let errorItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, "inline-error-item");
                expect(errorItems.length).to.equal(3);

                // ensure `next` method was not called
                expect(nextSpy.called).to.equal(false);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });
      });
    });
  });
}
