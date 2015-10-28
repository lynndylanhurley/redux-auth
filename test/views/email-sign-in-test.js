import React from "react";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import {resetConfig, retrieveData} from "../../src/utils/session-storage";
import * as C from "../../src/utils/constants";
import mockery, {registerMock, deregisterMock} from "mockery";
import {mockFetchResponse} from "../helper";

describe("EmailSignInForm", () => {

  jsdom();

  var EmailSignInForm,
      TestUtils,
      renderConnectedComponent,
      successRespSpy,
      testUid = "test@test.com",
      successRespHeaders = {
        "Content-Type": "application/json",
        "access-token": "abc"
      },
      errorResp = {"errors":["Invalid login credentials. Please try again."]};

    [
      ["bootstrap", "../../src/views/bootstrap/EmailSignInForm"]
    ].forEach(([theme, requirePath]) => {

    beforeEach(() => {
      resetConfig();
    });

    describe.only(`${theme} params`, () => {
      beforeEach(() => {
        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });
      });

      afterEach(() => {
        mockery.disable();
      });

      it("should accept styling params", done => {
        EmailSignInForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        ({renderConnectedComponent} = require("../helper"));

        let inputProps = {
          email: {style: {color: "red"}, className: "email-class-override"},
          password: {style: {color: "green"}, className: "password-class-override"},
          submit: {style: {color: "orange"}, className: "submit-class-override"}
        };

        renderConnectedComponent(
          <EmailSignInForm inputProps={inputProps} />
        ).then(({instance}) => {
          let emailEl    = TestUtils.findRenderedDOMComponentWithClass(instance, "email-class-override")
          let passwordEl = TestUtils.findRenderedDOMComponentWithClass(instance, "password-class-override")
          let submitEl   = TestUtils.findRenderedDOMComponentWithClass(instance, "submit-class-override")
          expect(emailEl.getAttribute("style")).to.equal("color:red;")
          expect(passwordEl.getAttribute("style")).to.equal("color:green;")
          expect(submitEl.getAttribute("style")).to.equal("color:orange;")
          done();
        }).catch(e => console.log("error:", e));
      });
      // it should accept endpointConfig

      it("should allow configuration of endpoint", done => {
        var testUrl = "http://alt.dev";

        successRespSpy = sinon.spy((url) => {
          expect(url).to.equal(`${testUrl}/auth/sign_in`);
          return mockFetchResponse(url, 200, {data: {uid: testUid}}, successRespHeaders);
        });

        registerMock("isomorphic-fetch", successRespSpy);
        EmailSignInForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        ({renderConnectedComponent} = require("../helper"));

        let endpointConfig = [
          {default: {apiUrl: "http://default.dev"}},
          {alt: {apiUrl: testUrl}}
        ];

        renderConnectedComponent(
          <EmailSignInForm endpoint="alt" />, endpointConfig
        ).then(({instance, store}) => {
          let submitEl = TestUtils.findRenderedDOMComponentWithTag(instance, "button");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure auth headers were updated
            let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
            expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

            // ensure user was set
            let uid = store.getState().auth.getIn(["user", "attributes", "uid"]);
            expect(uid).to.equal(testUid)

            done();
          }, 0);

        }).catch(e => console.log("errors:", e));
      });
      // it should accept endpointConfig
    });

    describe(`${theme} functionality`, () => {
      beforeEach(() => {
        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });
      });

      afterEach(() => {
        mockery.disable();
      })
    })

    describe(`${theme} success`, () => {
      beforeEach(() => {
        // mock succes response
      });
    });


    describe(`${theme} error`, () => {
      beforeEach(() => {

        // mock error response
      })

    });

  });
});
