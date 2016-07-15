import React from "react";
import ReactDOM from "react-dom";
import {retrieveData, getCurrentEndpointKey} from "../../src/utils/session-storage";
import {push} from "react-router-redux";
import {expect} from "chai";
import {fetch} from "../../src";
import nock from "nock";

var testUid        = "test@test.com",
    apiUrl         = "http://api.default.com",
    altApiUrl      = "http://api.alt.com",
      tokenBridge,
      app;

function createTokenBridge(creds) {
  let credStr = JSON.stringify(creds);
  tokenBridge = document.createElement("DIV");
  tokenBridge.setAttribute("id", "token-bridge");
  tokenBridge.textContent = credStr;
  document.body.appendChild(tokenBridge);
}

function destroyTokenBridge() {
  document.body.removeChild(tokenBridge);
}

function renderApp(provider) {
  if (app) {
    destroyApp();
  }
  app = document.createElement("DIV");
  app.setAttribute("id", "app");
  document.body.appendChild(app);
  ReactDOM.render(provider, app);
}

function destroyApp() {
  document.body.removeChild(app);
}

export default function() {
  var {initialize} = require("../helper");

  describe("client configuration", () => {
    describe("unauthenticated user", () => {
      it("should handle unauthenticated users", done => {
        initialize()
          .then(({store}) => {
            let user = store.getState().auth.get("user");
            expect(user.get("isSignedIn")).to.equal(false);
            expect(user.get("attributes")).to.equal(null);
            done();
          })
          .catch(e => console.log("caught error:", e));
      });

      it("should redirect unauthenticated users to login page", done => {
        initialize()
          .then(({provider, store}) => {
            renderApp(provider);
            store.dispatch(push({pathname: "/account"}));
            setTimeout(() => {
              destroyApp();
              expect(store.getState().routing.location.pathname).to.equal("/login");
              done();
            }, 0)
          })
          .catch(e => console.log("e", e.stack));
      });

      it("should show error modal for failed account confirmations", done => {
        createTokenBridge({
          headers: undefined,
          firstTimeLogin: true,
        });

        initialize()
          .then(({store}) => {
            let user = store.getState().auth.get("user");
            let ui = store.getState().auth.get("ui");
            expect(user.get("isSignedIn")).to.equal(false);
            expect(user.get("attributes")).to.equal(undefined);
            expect(ui.get("firstTimeLoginErrorModalVisible")).to.equal(true);
            destroyTokenBridge();
            done();
          }).catch(e => console.log("error:", e.stack));
      });


      it("should show error modal for failed password resets", done => {
        createTokenBridge({
          headers: undefined,
          mustResetPassword: true
        });

        initialize()
          .then(({store}) => {
            let user = store.getState().auth.get("user");
            let ui = store.getState().auth.get("ui");
            expect(user.get("isSignedIn")).to.equal(false);
            expect(user.get("attributes")).to.equal(undefined);
            expect(ui.get("passwordResetErrorModalVisible")).to.equal(true);
            destroyTokenBridge();
            done();
          }).catch(e => console.log("error:", e.stack));
      });
    });

    describe("authenticated user", () => {
      var headers = {
            "access-token": "xyz",
            client: "123",
            uid: "test@test.com"
          },
          user = {
            uid: "test@test.com"
          };

      afterEach(() => {
        // remove "token bridge" element from the DOM
        destroyTokenBridge();
      });

      it("should handle authenticated users", done => {
        const nextToken = "abc";

        nock(`${altApiUrl}`)
          .get("/api/hello")
          .reply(200, {
            success: true,
            data: {uid: testUid}
          }, {
            "Content-Type": "application/json",
            "access-token": "abc"
          });

        createTokenBridge({
          user,
          headers,
          currentEndpointKey: "alt",
          defaultEndpointKey: "default",
          mustResetPassword: false,
          firstTimeLogin: true
        });

        initialize([
          {default: {apiUrl: apiUrl}},
          {alt: {apiUrl: altApiUrl}}
        ])
          .then(({store}) => {
            let user = store.getState().auth.get("user");
            expect(user.get("isSignedIn")).to.equal(true);
            expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("alt");
            expect(getCurrentEndpointKey()).to.equal("alt");
            expect(store.getState().auth.getIn(["configure", "defaultEndpointKey"])).to.equal("default");
            expect(user.getIn(["attributes", "uid"])).to.equal("test@test.com");

            // next request should include auth headers
            fetch(`${altApiUrl}/api/hello`).then(() => {
              // cookie should have been updated to latest
              expect(retrieveData("authHeaders")["access-token"]).to.equal(nextToken);
              done();
            });
          })
          .catch(err => console.log("@-->error", err.stack));

      });

      describe("confirmation modals", () => {
        ["default", "alt"].forEach(endpoint => {
          describe(`${endpoint} endpoint config`, () => {
            it("should show success modal for account confirmations", done => {
              createTokenBridge({
                user,
                headers,
                currentEndpointKey: endpoint,
                defaultEndpointKey: "default",
                firstTimeLogin: true
              });

              initialize()
                .then(({store}) => {
                  let user = store.getState().auth.get("user");
                  let config = store.getState().auth.get("configure");
                  let ui = store.getState().auth.get("ui");
                  expect(user.get("isSignedIn")).to.equal(true);
                  expect(config.get("currentEndpointKey")).to.equal(endpoint);
                  expect(config.get("defaultEndpointKey")).to.equal("default");
                  expect(getCurrentEndpointKey()).to.equal(endpoint);
                  expect(user.getIn(["attributes", "uid"])).to.equal("test@test.com");
                  expect(ui.get("firstTimeLoginSuccessModalVisible")).to.equal(true);
                  done();
                }).catch(e => console.log("error:", e.stack));
            });

            it("should show success modal for password resets", done => {
              createTokenBridge({
                user,
                headers,
                currentEndpointKey: endpoint,
                defaultEndpointKey: "default",
                mustResetPassword: true
              });

              initialize()
                .then(({store}) => {
                  let user = store.getState().auth.get("user");
                  let ui = store.getState().auth.get("ui");
                  let config = store.getState().auth.get("configure");
                  expect(config.get("currentEndpointKey")).to.equal(endpoint);
                  expect(config.get("defaultEndpointKey")).to.equal("default");
                  expect(getCurrentEndpointKey()).to.equal(endpoint);
                  expect(user.get("isSignedIn")).to.equal(true);
                  expect(user.getIn(["attributes", "uid"])).to.equal("test@test.com");
                  expect(ui.get("passwordResetSuccessModalVisible")).to.equal(true);
                  done();
                }).catch(e => console.log("error:", e.stack));
            });
          });
        });
      });
    });
  });
}
