import React from "react";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";
import {resetConfig, retrieveData, persistData} from "../../src/utils/session-storage";
import * as C from "../../src/utils/constants";
import mockery, {registerMock} from "mockery";
import {mockFetchResponse} from "../helper";


describe("UpdatePasswordForm", () => {

  jsdom();

  var UpdatePasswordForm,
      TestUtils,
      findClass,
      requirePath,
      renderConnectedComponent,
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

  [
    "bootstrap"
  ].forEach((theme) => {
    requirePath = `../../src/views/${theme}/UpdatePasswordForm`;

    beforeEach(() => {
      resetConfig();

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

    describe(`${theme} params`, () => {
      it("should accept styling params", done => {
        UpdatePasswordForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let inputProps = {
          password: {style: {color: "red"}, className: "password-class-override"},
          passwordConfirmation: {style: {color: "pink"}, className: "password-confirmation-class-override"},
          submit: {style: {color: "orange"}, className: "submit-class-override"}
        };

        renderConnectedComponent(
          <UpdatePasswordForm inputProps={inputProps} />
        ).then(({instance}) => {
          let passwordEl             = findClass(instance, "password-class-override");
          let passwordConfirmationEl = findClass(instance, "password-confirmation-class-override");
          let submitEl               = findClass(instance, "submit-class-override");
          expect(passwordEl.getAttribute("style")).to.match(/color:red/);
          expect(passwordConfirmationEl.getAttribute("style")).to.match(/color:pink/);
          expect(submitEl.getAttribute("style")).to.match(/color:orange/);
          done();
        }).catch(e => console.log("error:", e));
      });

      it("should allow configuration of endpoint", done => {
        var testUrl = "http://alt.dev";

        successRespSpy = sinon.spy((url) => {
          return mockFetchResponse(url, 200, successResp, successRespHeaders);
        });

        registerMock("isomorphic-fetch", successRespSpy);
        UpdatePasswordForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        findClass = TestUtils.findRenderedDOMComponentWithClass;
        ({renderConnectedComponent} = require("../helper"));

        let endpointConfig = [
          {default: {apiUrl: "http://default.dev"}},
          {alt: {apiUrl: testUrl}}
        ];


        renderConnectedComponent((
          <UpdatePasswordForm />
        ), endpointConfig, initialState).then(({instance}) => {
          // establish that we're using the "alt" endpoint config
          persistData(C.SAVED_CONFIG_KEY, "alt");

          // change input values
          let passwordEl = findClass(instance, "update-password-password")
          let passwordConfirmationEl = findClass(instance, "update-password-password-confirmation")

          passwordEl.value = "whatever";
          passwordConfirmationEl.value = "whatever";

          TestUtils.Simulate.change(passwordEl);
          TestUtils.Simulate.change(passwordConfirmationEl);

          // submit changed password
          let submitEl = findClass(instance, "update-password-submit");
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
        try {
          // mock succes response
          successRespSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, successRespHeaders);
          });

          registerMock("isomorphic-fetch", successRespSpy);
          UpdatePasswordForm = require(requirePath);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));
        } catch (e) {
          console.log("@-->caught error", e);
        }
      });

      it("should handle successful sign in", done => {
        var testPassword = "secret123";
        var apiUrl       = "http://api.dev";

        renderConnectedComponent((
          <UpdatePasswordForm />
        ), {apiUrl}, initialState).then(({instance, store}) => {
          let passwordEl = findClass(instance, "update-password-password")
          let passwordConfirmationEl = findClass(instance, "update-password-password-confirmation")

          // change input values
          passwordEl.value = testPassword;
          passwordConfirmationEl.value = testPassword;

          // trigger dom change event
          TestUtils.Simulate.change(passwordEl);
          TestUtils.Simulate.change(passwordConfirmationEl);

          // ensure store is updated when inputs are changed
          expect(store.getState().auth.getIn(["updatePassword", "form", "password"])).to.equal(testPassword);
          expect(store.getState().auth.getIn(["updatePassword", "form", "password_confirmation"])).to.equal(testPassword);

          // submit the form
          let submitEl = findClass(instance, "update-password-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            // ensure auth headers were updated
            let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
            expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

            // ensure success modal is present
            let modalVisible = store.getState().auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);
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
        UpdatePasswordForm = require(requirePath);
        TestUtils = require("react-addons-test-utils");
        ({renderConnectedComponent} = require("../helper"));
      });

      it("should handle failed sign in", done => {
        var apiUrl = "http://api.dev";

        renderConnectedComponent(
          <UpdatePasswordForm />, {apiUrl}, initialState
        ).then(({instance, store}) => {
          // change input values
          let passwordEl = TestUtils.findRenderedDOMComponentWithClass(instance, "update-password-password");
          passwordEl.value = testUid;
          TestUtils.Simulate.change(passwordEl);

          // submit the form
          let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "update-password-submit");
          TestUtils.Simulate.click(submitEl);

          setTimeout(() => {
            let errors = store.getState().auth.getIn(["updatePassword", "errors"]).toJS();
            expect(errors).to.deep.equal(errorResp["errors"]);

            // ensure modal is to be shown
            let modalVisible = store.getState().auth.getIn(["ui", "updatePasswordErrorModalVisible"]);
            expect(modalVisible).to.equal(true);

            // ensure errors show up in form
            let errorItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, "inline-error-item");
            expect(errorItems.length).to.equal(2);

            done();
          }, 0);
        }).catch(e => console.log("errors", e));
      });
    });
  });
});

