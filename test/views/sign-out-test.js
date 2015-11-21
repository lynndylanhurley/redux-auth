import React from "react";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import {resetConfig, persistData, retrieveData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import * as C from "../../src/utils/constants";
import mockery, {registerMock} from "mockery";
import {mockFetchResponse} from "../helper";


describe("SignOutButton", () => {

  jsdom();

  var SignOutButton,
      TestUtils,
      findClass,
      requirePath,
      renderConnectedComponent,
      successRespSpy,
      errorRespSpy,
      successResp = {
        "success": true,
        "message": "Account with uid test@test.com has been destroyed."
      },
      errorResp = {
        "errors":["User was not found or was not logged in."]
      };

  [
    "bootstrap",
    "material-ui",
    "default"
  ].forEach((theme) => {
    requirePath = `../../src/views/${theme}/SignOutButton`;

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
        SignOutButton = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let inputProps = {className: "sign-out-class-override"};

        renderConnectedComponent(
          <SignOutButton {...inputProps} />
        ).then(({instance}) => {
          findClass(instance, "sign-out-class-override");
          done();
        }).catch(e => console.log("error:", e));
      });

      it("should allow configuration of endpoint", done => {
        var testUrl = "http://alt.dev";

        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, successResp, {});
        });

        registerMock("isomorphic-fetch", successRespSpy);
        SignOutButton = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let endpointConfig = [
          {default: {apiUrl: "http://default.dev"}},
          {alt: {apiUrl: testUrl}}
        ];

        renderConnectedComponent((
          <SignOutButton  />
        ), endpointConfig, {user: {isSignedIn: true}}).then(({instance, store}) => {
          // establish that we're using the "alt" endpoint config
          store.dispatch(storeCurrentEndpointKey("alt"));
          persistData(C.SAVED_CONFIG_KEY, "alt");

          let submitEl = findClass(instance, "sign-out-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // expect response to have been made to alt endpoint url
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${testUrl}/auth/sign_out`);

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
        SignOutButton = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle successful account destruction", done => {
        var apiUrl    = "http://api.dev";

        renderConnectedComponent((
          <SignOutButton />
        ), {apiUrl}, {user: {isSignedIn: true}}).then(({instance, store}) => {
          // submit the form
          let submitEl = findClass(instance, "sign-out-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure success modal is present
            let modalVisible = store.getState().auth.getIn(["ui", "signOutSuccessModalVisible"]);
            expect(modalVisible).to.equal(true);

            let isSignedIn = store.getState().auth.getIn(["user", "isSignedIn"]);
            expect(isSignedIn).to.equal(false);

            // ensure default url was used
            let [[url, ]] = successRespSpy.args;
            expect(url).to.equal(`${apiUrl}/auth/sign_out`);

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
        SignOutButton = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle failed account destruction", done => {
        var apiUrl = "http://api.dev";

        renderConnectedComponent(
          <SignOutButton />, {apiUrl}, {user: {isSignedIn: true}}
        ).then(({instance, store}) => {
          // establish that we're using the "default" endpoint config
          store.dispatch(storeCurrentEndpointKey("default"));
          persistData(C.SAVED_CONFIG_KEY, "default");

          // submit the form
          let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "sign-out-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            let errors = store.getState().auth.getIn(["signOut", "default", "errors"]).toJS();
            expect(errors).to.deep.equal(errorResp["errors"]);

            // ensure modal is to be shown
            let modalVisible = store.getState().auth.getIn(["ui", "signOutErrorModalVisible"]);
            expect(modalVisible).to.equal(true);

            let isSignedIn = store.getState().auth.getIn(["user", "isSignedIn"]);
            expect(isSignedIn).to.equal(false);

            let creds = retrieveData(C.SAVED_CREDS_KEY);
            expect(creds).to.equal(undefined);

            done();
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });
  });
});
