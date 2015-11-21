import React from "react";
import sinon from "sinon";
import {match} from "redux-router/server";
import {expect} from "chai";
import mockery, {registerMock, deregisterMock} from "mockery";

var initialize;

var testUid        = "test@test.com",
    testToken      = "xyz",
    testClient     = "123",
    apiUrl         = "http://api.site.com",
    testExpiry     = new Date().getTime() + 500,
    errRespSpy,
    successRespSpy,
    rawTestCookies = "currentConfigName=%22default%22; authHeaders=%7B%22"+
      "access-token%22%3A%22"+testToken+"%22%2C%22token"+
      "-type%22%3A%22Bearer%22%2C%22client%22%3A%22"+testClient+
      "%22%2C%22expiry%22%3A%22"+testExpiry+"%22%2C%22uid%22%3A%22"+testUid+"%22%7D;"+
      " mustResetPassword=false; firstTimeLogin=false";


const fakeErrorResponse = function() {
  return Promise.resolve({
    json: () => ({
      success: false,
      errors: "Invalid credentials"
    }),
    headers: {raw: () => {}}
  });
}

const fakeSuccessResponse = function() {
  return Promise.resolve({
    json: () => ({
      success: true,
      data: {uid: testUid}
    }),
    headers: {
      raw: () => ({
        "Content-Type": "application/json",
        "access-token": testToken,
        "client": testClient,
        "uid": testUid,
        "expiry": testExpiry
      })
    }
  });
}


describe("server configuration", () => {
  describe("unauthenticated user", () => {
    beforeEach(() => {
      mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
      });

      errRespSpy = sinon.spy(fakeErrorResponse);
      registerMock("node-fetch", errRespSpy);
      ({initialize} = require("../helper"));
    });

    afterEach(() => {
      deregisterMock("node-fetch");
      mockery.disable();
    });

    it("should not make request for users with no credentials", done => {
      initialize({
        apiUrl
      }, {
        isServer: true,
        cookies: "",
        currentLocation: "/"
      }).then(({store}) => {
        let user = store.getState().auth.get("user");

        // user should not be signed in
        expect(user.get("isSignedIn")).to.equal(false);
        expect(user.get("attributes")).to.equal(undefined);

        // ensure that no calls were made to the API
        expect(errRespSpy.notCalled).to.equal(true);
        done();
      })
      .catch(err => console.log("error:", err.stack));
    });

    it("handles failed first time logins and password resets", done => {
      let authRedirectUrl = `${apiUrl}/?account_confirmation_success=true&client_id=oxyA2fe4WI016-i4HtiUMg&config=default&expiry=&reset_password=true&token=DzPJc6NRLrSPD9HBCYZeVA&uid=test%40test.com`;

      initialize({
        apiUrl
      }, {
        isServer: true,
        cookies: "",
        currentLocation: authRedirectUrl
      }).then(({store}) => {
        let user = store.getState().auth.get("user");
        let server = store.getState().auth.get("server");

        // user should not be signed in
        expect(user.get("isSignedIn")).to.equal(false);
        expect(user.get("attributes")).to.equal(undefined);

        // should still flag first time logins + password resets
        expect(server.get("mustResetPassword")).to.equal(true);
        expect(server.get("firstTimeLogin")).to.equal(true);

        // ensure that the call to the API was made
        expect(errRespSpy.calledOnce).to.equal(true);
        done();
      });
    });

    it("should handle failed validations from the API", done => {
      initialize({
        apiUrl
      }, {
        isServer: true,
        currentLocation: "/",
        cookies: rawTestCookies
      }).then(({store}) => {
        let user = store.getState().auth.get("user");

        // user should not be signed in
        expect(user.get("isSignedIn")).to.equal(false);
        expect(user.get("attributes")).to.equal(undefined);

        // one call should have been made to API
        expect(errRespSpy.calledOnce).to.equal(true);

        let [[url, {headers}]] = errRespSpy.args;

        // ensure that API call has credentials as defined in cookies
        expect(headers).to.deep.equal({
          "access-token": testToken,
          "token-type": "Bearer",
          client: testClient,
          uid: testUid,
          expiry: `${testExpiry}`
        });

        // ensure that correct url was visited
        expect(url).to.equal(`${apiUrl}/auth/validate_token?unbatch=true`);

        done();
      });
    });

    it("should redirect unauthenticated users trying to access restricted pages", done => {
      initialize({
        apiUrl
      }, {
        isServer: true,
        currentLocation: "/account",
        cookies: rawTestCookies
      })
        .then(({store}) => {
          store.dispatch(match("/account", (error, {pathname, action}) => {
            // one call should have been made to API
            expect(errRespSpy.calledOnce);

            // should be redirected to login page
            expect(pathname).to.equal("/login");
            expect(action).to.equal("REPLACE");

            done();
          }));
        })
        .catch(err => console.log("error:", err.stack));
    });
  });

  describe("authenticated user", () => {
    beforeEach(() => {
      mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
      });
      successRespSpy = sinon.spy(fakeSuccessResponse);
      registerMock("node-fetch", successRespSpy);
      ({initialize} = require("../helper"));
    });

    afterEach(() => {
      deregisterMock("node-fetch");
      mockery.disable();
    });


    it("identifies first time logins and sets flag in store for token bridge", done => {
      // this is what urls look like when coming from email confirmation links
      let authRedirectUrl = `${apiUrl}/?account_confirmation_success=true&client_id=oLPqKS5_HvroVw4F_juY3w&config=default&expiry=&token=k5taSSIfQD4hWShkqAjzNQ&uid=z1%40test.com`;

      initialize({
        apiUrl
      }, {
        isServer: true,
        currentLocation: authRedirectUrl,
        cookies: ""
      })
        .then(({store}) => {
          // user should be signed in
          let user = store.getState().auth.get("user");
          let server = store.getState().auth.get("server");

          console.log("user", user);

          expect(user.get("isSignedIn")).to.equal(true);
          expect(user.getIn(["attributes", "uid"])).to.equal(testUid);
          expect(server.get("mustResetPassword")).to.equal(false);
          expect(server.get("firstTimeLogin")).to.equal(true);
          done();
        })
        .catch(err => console.log("error:", err.stack));
    });

    it("identifies password reset redirects and sets flag in store for token bridge", done => {
      // this is what urls look like when coming from email confirmation links
      let authRedirectUrl = `${apiUrl}/?client_id=oxyA2fe4WI016-i4HtiUMg&config=default&expiry=&reset_password=true&token=DzPJc6NRLrSPD9HBCYZeVA&uid=test%40test.com`;

      initialize({
        apiUrl
      }, {
        isServer: true,
        currentLocation: authRedirectUrl,
        cookies: ""
      })
      .then(({store}) => {
        // user should be signed in
        let user = store.getState().auth.get("user");
        let server = store.getState().auth.get("server");
        expect(user.get("isSignedIn")).to.equal(true);
        expect(user.getIn(["attributes", "uid"])).to.equal(testUid);
        expect(server.get("mustResetPassword")).to.equal(true);
        expect(server.get("firstTimeLogin")).to.equal(false);
        done();
      });
    });

    it("allows authenticated users to access restricted pages", done => {
      initialize({
        apiUrl
      }, {
        isServer: true,
        currentLocation: "/account",
        cookies: rawTestCookies
      })
        .then(({store}) => {
          // user should be signed in
          let user = store.getState().auth.get("user");
          expect(user.get("isSignedIn")).to.equal(true);
          expect(user.getIn(["attributes", "uid"])).to.equal(testUid);
          expect(user.get("mustResetPassword")).to.equal(false);
          expect(user.get("firstTimeLogin")).to.equal(false);

          // one call should have been made to API
          expect(successRespSpy.calledOnce);

          let [[, {headers}]] = successRespSpy.args;

          // ensure that API call has credentials as defined in cookies
          expect(headers).to.deep.equal({
            "access-token": testToken,
            "token-type": "Bearer",
            client: testClient,
            uid: testUid,
            expiry: `${testExpiry}`
          });

          store.dispatch(match("/account", (error, redirect) => {
            // authorized user should not be redirected
            expect(redirect).to.equal(null);
            done();
          }));
        });
    });
  });
});
