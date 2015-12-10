import React from "react";
import TestUtils from "react-addons-test-utils";
import {spy} from "sinon";
import {expect} from "chai";
import {persistData} from "../../src/utils/session-storage";
import {storeCurrentEndpointKey} from "../../src/actions/configure";
import {getCurrentEndpointKey} from "../../src/utils/session-storage";
import {renderConnectedComponent} from "../helper";
import * as C from "../../src/utils/constants";
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
      "status": "error",
      "errors":["Unable to locate account for destruction."]
    };

export default function() {
  describe("DestroyAccountButton", () => {
    [
      "",
      "/views/material-ui",
      "/views/bootstrap"
    ].forEach((theme) => {
      requirePath = `../../src${theme}`;
      var {DestroyAccountButton} = require(requirePath);

      describe(`${theme || "default"} theme`, () => {
        describe(`params`, () => {
          it("should accept styling params", done => {

            let inputProps = {className: "destroy-account-class-override"};

            renderConnectedComponent(
              <DestroyAccountButton {...inputProps} />
            ).then(({instance}) => {
              expect(findClass(instance, "destroy-account-class-override")).to.be.ok;
              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            var testUrl = "http://alt.dev";

            successRespSpy = spy(() => [200, successResp]);

            nock(testUrl)
              .delete("/auth")
              .reply(successRespSpy);

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent((
              <DestroyAccountButton  />
            ), endpointConfig, {user: {isSignedIn: true}}).then(({instance, store}) => {
              // establish that we're using the "alt" endpoint config
              persistData(C.SAVED_CONFIG_KEY, "alt");
              store.dispatch(storeCurrentEndpointKey("alt"));

              let submitEl = findClass(instance, "destroy-account-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                expect(successRespSpy.called).to.be.ok;

                // ensure current endpoint was restored to default
                expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("default");
                expect(getCurrentEndpointKey()).to.equal("default");

                done();
              }, 100);

            }).catch(e => console.log("errors:", e));
          });
        });

        describe(`success`, () => {
          it("should handle successful account destruction", done => {
            var apiUrl    = "http://api.dev";

            successRespSpy = spy(() => [200, successResp]);

            nock(apiUrl)
              .delete("/auth")
              .reply(successRespSpy);

            renderConnectedComponent((
              <DestroyAccountButton />
            ), {apiUrl}, {user: {isSignedIn: true}}).then(({instance, store}) => {
              // submit the form
              let submitEl = findClass(instance, "destroy-account-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure default url was used
                expect(successRespSpy.called).to.be.ok;

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "destroyAccountSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure user is signed out
                expect(store.getState().auth.getIn(["user", "isSignedIn"])).to.equal(false);

                done();
              }, 100);
            }).catch(e => console.log("errors", e));
          });
        });

        describe(`error`, () => {
          beforeEach(() => {
            // mock succes response
          });

          it("should handle failed account destruction", done => {
            var apiUrl = "http://api.dev";

            errorRespSpy = spy(() => [401, errorResp]);

            nock(apiUrl)
              .delete("/auth")
              .reply(errorRespSpy);

            renderConnectedComponent(
              <DestroyAccountButton />, {apiUrl}, {user: {isSignedIn: true}}
            ).then(({instance, store}) => {
              // submit the form
              let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "destroy-account-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                expect(errorRespSpy.called).to.be.ok;

                let errors = store.getState().auth.getIn(["destroyAccount", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "destroyAccountErrorModalVisible"]);
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
