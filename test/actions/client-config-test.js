import React from "react";
import sinon from "sinon";
import {resetConfig, retrieveData} from "../../src/utils/session-storage";
import {match} from "redux-router/server";
import {expect} from "chai";
import jsdom from "mocha-jsdom";
import mockery, {registerMock} from "mockery";

global.__TEST__ = true;

var testUid        = "test@test.com",
    apiUrl         = "http://api.site.com",
    tokenBridge,
    fetch,
    initialize;

function fetchSuccessResp () {
  var respHeaders = {
    "Content-Type": "application/json",
    "access-token": "abc"
  };

  return Promise.resolve({
    url: `${apiUrl}/api/hello`,
    json: () => ({
      success: true,
      data: {uid: testUid}
    }),
    headers: {
      get: (key) => respHeaders[key]
    }
  });
};

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

describe("client configuration", () => {
  jsdom();

  beforeEach(() => {
    resetConfig();
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    registerMock("isomorphic-fetch", sinon.spy(fetchSuccessResp));
    ({initialize} = require("../helper"));
  });

  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
  });

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
        .then((resp) => {
          resp.store.dispatch(match("/account", (err, {pathname}) => {
            expect(pathname).to.equal("/login");
            done();
          }));
        });
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
          expect(user.get("attributes")).to.equal(null);
          expect(ui.get("firstTimeLoginErrorModalVisible")).to.equal(true);
          destroyTokenBridge();
          done();
        });
    });


    it("should show error modal for failed password resets", done => {
      createTokenBridge({
        headers: undefined,
        mustResetPassword: true,
      });

      initialize()
        .then(({store}) => {
          let user = store.getState().auth.get("user");
          let ui = store.getState().auth.get("ui");
          expect(user.get("isSignedIn")).to.equal(false);
          expect(user.get("attributes")).to.equal(null);
          expect(ui.get("passwordResetErrorModalVisible")).to.equal(true);
          destroyTokenBridge();
          done();
        });
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

      fetch = require("../../src/utils/fetch");

      createTokenBridge({
        user,
        headers,
        mustResetPassword: false,
        firstTimeLogin: true
      });

      initialize()
        .then(({store}) => {
          let user = store.getState().auth.get("user");
          expect(user.get("isSignedIn")).to.equal(true);
          expect(user.getIn(["attributes", "uid"])).to.equal("test@test.com");

          // next request should include auth headers
          fetch(`${apiUrl}/api/hello`).then(() => {
            // cookie should have been updated to latest
            expect(retrieveData("authHeaders")["access-token"]).to.equal(nextToken);
            done();
          });
        });
    });

    it("should show success modal for account confirmations", done => {
      createTokenBridge({
        user,
        headers,
        firstTimeLogin: true
      });

      initialize()
        .then(({store}) => {
          let user = store.getState().auth.get("user");
          let ui = store.getState().auth.get("ui");
          expect(user.get("isSignedIn")).to.equal(true);
          expect(user.getIn(["attributes", "uid"])).to.equal("test@test.com");
          expect(ui.get("firstTimeLoginSuccessModalVisible")).to.equal(true);
          done();
        });
    });

    it("should show success modal for password resets", done => {
      createTokenBridge({
        user,
        headers,
        mustResetPassword: true
      });

      initialize()
        .then(({store}) => {
          let user = store.getState().auth.get("user");
          let ui = store.getState().auth.get("ui");
          expect(user.get("isSignedIn")).to.equal(true);
          expect(user.getIn(["attributes", "uid"])).to.equal("test@test.com");
          expect(ui.get("passwordResetSuccessModalVisible")).to.equal(true);
          done();
        });
    });
  });
});
