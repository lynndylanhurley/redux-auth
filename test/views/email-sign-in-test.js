import React from "react";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import {resetConfig, retrieveData, getCurrentEndpointKey} from "../../src/utils/session-storage";
import * as C from "../../src/utils/constants";
import mockery, {registerMock} from "mockery";
import {mockFetchResponse} from "../helper";

describe("EmailSignInForm", () => {

  jsdom();

  var EmailSignInForm,
      TestUtils,
      findClass,
      renderConnectedComponent,
      successRespSpy,
      errorRespSpy,
      testUid = "test@test.com",
      successRespHeaders = {
        "Content-Type": "application/json",
        "access-token": "abc"
      },
      errorResp = {"errors":["Invalid login credentials. Please try again."]};

  [
    "material-ui",
    "bootstrap",
    "default"
  ].forEach((theme) => {
    var requirePath = `../../src/views/${theme}/EmailSignInForm`;

    beforeEach(() => {
      resetConfig();

      mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
      });

      mockery.resetCache();
      global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
    });

    afterEach(() => {
      mockery.deregisterAll();
      mockery.disable();
    });

    describe(`${theme} params`, () => {
      it("should accept styling params", done => {
        EmailSignInForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

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

        // mock success response
        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, {data: {uid: testUid}}, successRespHeaders);
        });

        registerMock("isomorphic-fetch", successRespSpy);
        EmailSignInForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

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

            // ensure request was sent to alt url
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${testUrl}/auth/sign_in`);

            done();
          }, 0);

        }).catch(e => console.log("errors:", e));
      });
    });

    describe(`${theme} success`, () => {
      beforeEach(() => {
        // mock succes response
        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, {data: {uid: testUid}}, successRespHeaders);
        });

        registerMock("isomorphic-fetch", successRespSpy);
        EmailSignInForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle successful sign in", done => {
        var testEmail    = "test@test.com";
        var testPassword = "test@test.com";
        var apiUrl       = "http://api.dev";

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

          console.log("checking form", store.getState().auth.getIn(["emailSignIn", "default", "form", "email"]));

          // ensure store is updated when inputs are changed
          expect(store.getState().auth.getIn(["emailSignIn", "default", "form", "email"])).to.equal(testEmail);
          expect(store.getState().auth.getIn(["emailSignIn", "default", "form", "password"])).to.equal(testPassword);

          // submit the form
          let submitEl = findClass(instance, "email-sign-in-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure auth headers were updated
            let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
            expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

            // ensure user was set
            let uid = store.getState().auth.getIn(["user", "attributes", "uid"]);
            expect(uid).to.equal(testUid)

            // ensure success modal is present
            let modalVisible = store.getState().auth.getIn(["ui", "emailSignInSuccessModalVisible"]);
            expect(modalVisible).to.equal(true);

            // ensure default url was used
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${apiUrl}/auth/sign_in`);

            // ensure configuration is set to default
            expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("default");
            expect(getCurrentEndpointKey()).to.equal("default");

            done();
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });


    describe(`${theme} error`, () => {
      beforeEach(() => {
        // mock succes response
        errorRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 401, errorResp, {});
        });

        registerMock("isomorphic-fetch", errorRespSpy);
        EmailSignInForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle failed sign in", done => {
        var apiUrl = "http://api.dev";

        renderConnectedComponent(
          <EmailSignInForm />, {apiUrl}
        ).then(({instance, store}) => {
          // submit the form
          let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "email-sign-in-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
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
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });
  });
});
