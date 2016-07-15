import React from "react";
import TestUtils from "react-addons-test-utils";
import {spy} from "sinon";
import {expect} from "chai";
import {persistData, retrieveData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import * as C from "../../src/utils/constants";
import {renderConnectedComponent} from "../helper";
import nock from "nock";

var findClass = TestUtils.findRenderedDOMComponentWithClass;

var requirePath,
    successRespSpy,
    errorRespSpy,
    successResp = {
      "success": true,
      "message": "Account with uid test@test.com has been destroyed."
    },
    errorResp = {
      "errors":["User was not found or was not logged in."]
    };


export default function() {
  describe("SignOutButton", () => {
    [
      "/views/default",
      "/views/bootstrap",
      "/views/material-ui"
    ].forEach((theme) => {
      requirePath = `../../src${theme}`;
      var {SignOutButton} = require(requirePath);

      describe(`${theme} theme`, () => {
        describe("params", () => {
          it("should accept styling params", done => {
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

            successRespSpy = spy(() => [200, successResp]);

            nock(testUrl)
              .delete("/auth/sign_out")
              .reply(successRespSpy);

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

              let submitEl = TestUtils.findRenderedDOMComponentWithTag(instance, "button");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // expect response to have been made to alt endpoint url
                expect(successRespSpy.called).to.be.ok;
                done();
              }, 0);

            }).catch(e => console.log("errors:", e));
          });
        });

        describe("success", () => {
          it("should handle successful account destruction", done => {
            var apiUrl    = "http://api.dev";

            successRespSpy = spy(() => [200, successResp]);

            nock(apiUrl)
              .delete("/auth/sign_out")
              .reply(successRespSpy);

            renderConnectedComponent((
              <SignOutButton />
            ), {apiUrl}, {user: {isSignedIn: true}}).then(({instance, store}) => {
              // submit the form
              let submitEl = TestUtils.findRenderedDOMComponentWithTag(instance, "button");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure default url was used
                expect(successRespSpy.called).to.be.ok;

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "signOutSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                let isSignedIn = store.getState().auth.getIn(["user", "isSignedIn"]);
                expect(isSignedIn).to.equal(false);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });

        describe("error", () => {
          it("should handle failed account destruction", done => {
            var apiUrl = "http://api.dev";

            errorRespSpy = spy(() => [401, errorResp]);

            nock(apiUrl)
              .delete("/auth/sign_out")
              .reply(errorRespSpy);

            renderConnectedComponent(
              <SignOutButton />, {apiUrl}, {user: {isSignedIn: true}}
            ).then(({instance, store}) => {
              // establish that we're using the "default" endpoint config
              store.dispatch(storeCurrentEndpointKey("default"));
              persistData(C.SAVED_CONFIG_KEY, "default");

              // submit the form
              let submitEl = TestUtils.findRenderedDOMComponentWithTag(instance, "button");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                expect(errorRespSpy.called).to.be.ok;

                let errors = store.getState().auth.getIn(["signOut", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "signOutErrorModalVisible"]);
                expect(modalVisible).to.equal(true);

                let isSignedIn = store.getState().auth.getIn(["user", "isSignedIn"]);
                expect(isSignedIn).to.equal(false);

                let creds = retrieveData(C.SAVED_CREDS_KEY);
                expect(creds).to.equal(null);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });
      });
    });
  });
}
