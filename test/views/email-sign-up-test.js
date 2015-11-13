import React from "react";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import {resetConfig, retrieveData} from "../../src/utils/session-storage";
import * as C from "../../src/utils/constants";
import mockery, {registerMock} from "mockery";
import {mockFetchResponse} from "../helper";

describe("EmailSignUpForm", () => {

  jsdom();

  var EmailSignUpForm,
      TestUtils,
      findClass,
      requirePath,
      renderConnectedComponent,
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

  [
    "bootstrap"
  ].forEach((theme) => {
    requirePath = `../../src/views/${theme}/EmailSignUpForm`;

    beforeEach(() => {
      resetConfig();
    });

    describe(`${theme} params`, () => {
      beforeEach(() => {
        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });
      });

      afterEach(() => {
        mockery.deregisterAll();
        mockery.disable();
      });

      it("should accept styling params", done => {
        EmailSignUpForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let inputProps = {
          email: {style: {color: "red"}, className: "email-class-override"},
          password: {style: {color: "green"}, className: "password-class-override"},
          passwordConfirmation: {style: {color: "purple"}, className: "password-confirmation-class-override"},
          submit: {style: {color: "orange"}, className: "submit-class-override"}
        };

        renderConnectedComponent(
          <EmailSignUpForm inputProps={inputProps} />
        ).then(({instance}) => {
          let emailEl    = findClass(instance, "email-class-override")
          let passwordEl = findClass(instance, "password-class-override")
          let passwordConfirmationEl = findClass(instance, "password-confirmation-class-override")
          let submitEl   = findClass(instance, "submit-class-override")
          expect(emailEl.getAttribute("style")).to.equal("color:red;")
          expect(passwordEl.getAttribute("style")).to.equal("color:green;")
          expect(passwordConfirmationEl.getAttribute("style")).to.equal("color:purple;")
          expect(submitEl.getAttribute("style")).to.equal("color:orange;")
          done();
        }).catch(e => console.log("error:", e));
      });

      it("should allow configuration of endpoint", done => {
        var testUrl = "http://alt.dev";

        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, {data: {uid: testUid, email: testUid}}, successRespHeaders);
        });

        registerMock("isomorphic-fetch", successRespSpy);
        EmailSignUpForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let endpointConfig = [
          {default: {apiUrl: "http://default.dev"}},
          {alt: {apiUrl: testUrl}}
        ];

        renderConnectedComponent((
          <EmailSignUpForm endpoint="alt" />
        ), endpointConfig).then(({instance}) => {
          let submitEl = findClass(instance, "email-sign-up-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // expect response to have been made to alt endpoint url
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${testUrl}/auth`);

            done();
          }, 0);

        }).catch(e => console.log("errors:", e));
      });
    });

    describe(`${theme} success`, () => {
      beforeEach(() => {
        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });

        // mock succes response
        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, {data: {uid: testUid, email: testUid}}, successRespHeaders);
        });

        registerMock("isomorphic-fetch", successRespSpy);
        EmailSignUpForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));
      });

      afterEach(() => {
        mockery.deregisterAll();
        mockery.disable();
      });

      it("should handle successful sign in", done => {
        var testEmail = testUid;
        var apiUrl    = "http://api.dev";

        renderConnectedComponent((
          <EmailSignUpForm />
        ), {apiUrl}).then(({instance, store}) => {
          let emailEl = findClass(instance, "email-sign-up-email")
          let passwordEl = findClass(instance, "email-sign-up-password")
          let passwordConfirmEl = findClass(instance, "email-sign-up-password-confirmation")

          // change input values
          emailEl.value = testEmail;
          passwordEl.value = testPassword;
          passwordConfirmEl.value = testPassword;

          // trigger dom change event
          TestUtils.Simulate.change(emailEl);
          TestUtils.Simulate.change(passwordEl);
          TestUtils.Simulate.change(passwordConfirmEl);

          // ensure store is updated when inputs are changed
          expect(store.getState().auth.getIn(["emailSignUp", "form", "email"])).to.equal(testEmail);
          expect(store.getState().auth.getIn(["emailSignUp", "form", "password"])).to.equal(testPassword);
          expect(store.getState().auth.getIn(["emailSignUp", "form", "password_confirmation"])).to.equal(testPassword);

          // submit the form
          let submitEl = findClass(instance, "email-sign-up-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure user was set
            let sentAddress = store.getState().auth.getIn(["ui", "emailSignUpAddress"]);
            expect(sentAddress).to.equal(testEmail)

            // ensure success modal is present
            let modalVisible = store.getState().auth.getIn(["ui", "emailSignUpSuccessModalVisible"]);
            expect(modalVisible).to.equal(true);

            // ensure default url was used
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${apiUrl}/auth`);

            done();
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });

    describe(`${theme} error`, () => {
      beforeEach(() => {
        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });

        // mock succes response
        errorRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 401, errorResp, {});
        });

        registerMock("isomorphic-fetch", errorRespSpy);
        EmailSignUpForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        ({renderConnectedComponent} = require("../helper"));
      });

      afterEach(() => {
        mockery.deregisterAll();
        mockery.disable();
      });

      it("should handle failed sign in", done => {
        var apiUrl = "http://api.dev";

        renderConnectedComponent(
          <EmailSignUpForm />, {apiUrl}
        ).then(({instance, store}) => {
          // submit the form
          let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "email-sign-up-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure auth headers were updated
            let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
            expect(authHeaders).to.equal(undefined);

            let errors = store.getState().auth.getIn(["emailSignUp", "errors"]).toJS();
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

            done();
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });
  });
});
