import React from "react";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import * as C from "../../src/utils/constants";
import {resetConfig, persistData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import mockery, {registerMock} from "mockery";
import {mockFetchResponse} from "../helper";


describe("RequestPasswordResetForm", () => {

  jsdom();

  var RequestPasswordResetForm,
      TestUtils,
      findClass,
      findTag,
      requirePath,
      renderConnectedComponent,
      successRespSpy,
      errorRespSpy,
      testUid = "test@test.com",
      successResp = {
        "message": "An email has been sent to test@test.com containing "+
          "instructions for resetting your password."
      },
      errorResp = {
        "errors":["Unable to find user with email 'aoeu'."]
      };

  [
    "bootstrap",
    "material-ui",
    "default"
  ].forEach((theme) => {
    requirePath = `../../src/views/${theme}/RequestPasswordResetForm`;

    beforeEach(() => {
      resetConfig();

      mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
      });
      global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
    });

    afterEach(() => {
      mockery.deregisterAll();
      mockery.disable();
    });

    describe(`${theme} params`, () => {
      it("should accept styling params", done => {
        RequestPasswordResetForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let inputProps = {
          email: {style: {color: "red"}, className: "email-class-override"},
          submit: {className: "submit-class-override"}
        };

        renderConnectedComponent(
          <RequestPasswordResetForm inputProps={inputProps} />
        ).then(({instance}) => {
          let emailEl = findClass(instance, "email-class-override")
          findClass(instance, "submit-class-override")
          expect(emailEl.getAttribute("style")).to.equal("color:red;")
          done();
        }).catch(e => console.log("error:", e));
      });

      it("should allow configuration of endpoint", done => {
        var testUrl = "http://alt.dev";

        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, successResp, {});
        });

        registerMock("isomorphic-fetch", successRespSpy);
        RequestPasswordResetForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        findTag = TestUtils.scryRenderedDOMComponentsWithTag;
        ({renderConnectedComponent} = require("../helper"));

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
          emailEl.value = "bogus";
          TestUtils.Simulate.change(emailEl);

          let submitEl = findClass(instance, "request-password-reset-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // expect response to have been made to alt endpoint url
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${testUrl}/auth/password`);

            done();
          }, 0);

        }).catch(e => console.log("errors:", e));
      });
    });

    describe(`${theme} success`, () => {
      beforeEach(() => {
        // mock succes response
        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, successResp, {});
        });

        registerMock("isomorphic-fetch", successRespSpy);
        RequestPasswordResetForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        findTag = TestUtils.scryRenderedDOMComponentsWithTag;
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle successful sign in", done => {
        var testEmail = testUid;
        var apiUrl    = "http://api.dev";

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
          let submitEl = findClass(instance, "request-password-reset-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure user was set
            let sentMessage = store.getState().auth.getIn(["ui", "requestPasswordResetSuccessMessage"]);
            expect(sentMessage).to.equal(successResp["message"]);

            // ensure success modal is present
            let modalVisible = store.getState().auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"]);
            expect(modalVisible).to.equal(true);

            // ensure default url was used
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${apiUrl}/auth/password`);

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
        RequestPasswordResetForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findTag = TestUtils.scryRenderedDOMComponentsWithTag;
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle failed sign in", done => {
        var apiUrl = "http://api.dev";

        renderConnectedComponent(
          <RequestPasswordResetForm />, {apiUrl}
        ).then(({instance, store}) => {
          // change input values
          let emailEl = findTag(instance, "input")[0];

          emailEl.value = testUid;
          TestUtils.Simulate.change(emailEl);

          // submit the form
          let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "request-password-reset-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            let errors = store.getState().auth.getIn(["requestPasswordReset", "default", "errors"]).toJS();
            expect(errors).to.deep.equal(errorResp["errors"]);

            // ensure modal is to be shown
            let modalVisible = store.getState().auth.getIn(["ui", "requestPasswordResetErrorModalVisible"]);
            expect(modalVisible).to.equal(true);

            done();
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });
  });
});
