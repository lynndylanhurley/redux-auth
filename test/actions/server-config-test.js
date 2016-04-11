import React from "react";
import sinon from "sinon";
import {match} from "react-router";
import {expect} from "chai";
import {initialize} from "../helper";
import nock from "nock";

var testUid        = "test@test.com",
    testToken      = "xyz",
    testClient     = "123",
    apiUrl         = "http://api.site.com",
    altApiUrl      = "http://api.alt.com",
    testExpiry     = new Date().getTime() + 500,
    errRespSpy,
    successRespSpy,
    rawTestCookies = "currentConfigName=%22default%22; authHeaders=%7B%22"+
      "access-token%22%3A%22"+testToken+"%22%2C%22token"+
      "-type%22%3A%22Bearer%22%2C%22client%22%3A%22"+testClient+
      "%22%2C%22expiry%22%3A%22"+testExpiry+"%22%2C%22uid%22%3A%22"+testUid+"%22%7D;"+
      " mustResetPassword=false; firstTimeLogin=false";


const fakeErrorResponse = function() {
  return {
    success: false,
    errors: "Invalid credentials"
  };
}

const fakeSuccessResponse = function() {
  return {
    success: true,
    data: {uid: testUid}
  }
}

export default function() {
  describe("server configuration", () => {
    describe("unauthenticated user", () => {
      it("should not make request for users with no credentials", done => {
        let spy = sinon.spy(fakeErrorResponse);
        nock(apiUrl)
          .get("/auth/validate_token?unbatch=true")
          .reply(401, spy);

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
          expect(spy.notCalled).to.be.ok;
          done();
        })
        .catch(err => console.log("error:", err.stack));
      });

      describe("confirmation modals", () => {
        ["default", "alt"].forEach(endpoint => {
          var targetEndpointUrl = (endpoint === "default") ? apiUrl : altApiUrl;

          describe(`${endpoint} endpoint config`, () => {
            it("handles failed first time logins and password resets", done => {
              let authRedirectUrl = `${targetEndpointUrl}/?account_confirmation_success=true&client_id=oxyA2fe4WI016-i4HtiUMg&config=${endpoint}&expiry=&reset_password=true&token=DzPJc6NRLrSPD9HBCYZeVA&uid=test%40test.com`;
              let spy = sinon.spy(fakeErrorResponse);
              nock(targetEndpointUrl)
                .get("/auth/validate_token?unbatch=true")
                .reply(401, spy);

              initialize([
                {default: {apiUrl}},
                {alt: {apiUrl: altApiUrl}}
              ], {
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
                expect(spy.calledOnce).to.be.ok;
                done();
              }).catch(err => console.log("error", err.stack));
            });

            it("should handle failed validations from the API", done => {
              let reqHeaders;
              let spy = sinon.spy(function() {
                reqHeaders = this.req.headers;
                return fakeErrorResponse();
              });

              nock(apiUrl)
              .get("/auth/validate_token?unbatch=true")
              .reply(401, spy);

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
                expect(spy.calledOnce).to.be.ok;

                // ensure that API call has credentials as defined in cookies
                expect(reqHeaders["access-token"]).to.include(testToken);
                expect(reqHeaders["token-type"]).to.include("Bearer");
                expect(reqHeaders["client"]).to.include(testClient);
                expect(reqHeaders["uid"]).to.include(testUid);
                expect(reqHeaders["expiry"]).to.include(`${testExpiry}`);

                done();
              }).catch(e => console.log("error", e.stack));
            });

          });
        });

      });


      it("should redirect unauthenticated users trying to access restricted pages", done => {
        let spy = sinon.spy(fakeErrorResponse);
        nock(apiUrl)
          .get("/auth/validate_token?unbatch=true")
          .reply(401, spy);

        initialize({
          apiUrl
        }, {
          isServer: true,
          currentLocation: "/account",
          cookies: rawTestCookies
        })
          .then(({history, routes, store}) => {
            match({routes, location: "/account"}, (error, {pathname, action}) => {
              // one call should have been made to API
              expect(spy.calledOnce).to.be.ok;

              // should be redirected to login page
              expect(pathname).to.equal("/login");
              expect(action).to.equal("REPLACE");

              done();
            });
          })
          .catch(err => console.log("error:", err.stack));
      });
    });

    describe("authenticated user", () => {
      it("identifies first time logins and sets flag in store for token bridge", done => {
        // this is what urls look like when coming from email confirmation links
        let authRedirectUrl = `${apiUrl}/?account_confirmation_success=true&client_id=oLPqKS5_HvroVw4F_juY3w&config=default&expiry=&token=k5taSSIfQD4hWShkqAjzNQ&uid=z1%40test.com`;

        let spy = sinon.spy(fakeSuccessResponse);

        nock(apiUrl)
          .get("/auth/validate_token?unbatch=true")
          .reply(200, spy, {
            "Content-Type": "application/json",
            "access-token": "abc"
          });

        initialize({
          apiUrl
        }, {
          isServer: true,
          currentLocation: authRedirectUrl,
          cookies: ""
        })
          .then(({store}) => {
            //expect(spy.called).to.be.ok;

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
        let spy = sinon.spy(fakeSuccessResponse);
        nock(apiUrl)
          .get("/auth/validate_token?unbatch=true")
          .reply(200, spy, {
            "Content-Type": "application/json",
            "access-token": "abc"
          });

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
          expect(spy.called).to.be.ok;
          expect(user.get("isSignedIn")).to.equal(true);
          expect(user.getIn(["attributes", "uid"])).to.equal(testUid);
          expect(server.get("mustResetPassword")).to.equal(true);
          expect(server.get("firstTimeLogin")).to.equal(false);
          done();
        });
      });

      it("allows authenticated users to access restricted pages", done => {
        let reqHeaders;
        nock(apiUrl)
          .get("/auth/validate_token?unbatch=true")
          .reply(200, function() {
            reqHeaders = this.req.headers;
            return fakeSuccessResponse();
          }, {
            "Content-Type": "application/json",
            "access-token": "abc"
          });

        initialize({
          apiUrl
        }, {
          isServer: true,
          currentLocation: "/account",
          cookies: rawTestCookies
        })
          .then(({history, routes, store}) => {
            // user should be signed in
            let user = store.getState().auth.get("user");
            expect(user.get("isSignedIn")).to.equal(true);
            expect(user.getIn(["attributes", "uid"])).to.equal(testUid);
            expect(user.get("mustResetPassword")).to.equal(false);
            expect(user.get("firstTimeLogin")).to.equal(false);

            // ensure that API call has credentials as defined in cookies
            expect(reqHeaders["access-token"]).to.include(testToken);
            expect(reqHeaders["token-type"]).to.include("Bearer");
            expect(reqHeaders["client"]).to.include(testClient);
            expect(reqHeaders["uid"]).to.include(testUid);
            expect(reqHeaders["expiry"]).to.include(`${testExpiry}`);

            match({routes, location: "/account"}, (error, redirect) => {
              // authorized user should not be redirected
              expect(redirect).to.equal(null);
              done();
            });
          }).catch(e => console.log("error", e.stack));
      });
    });
  });
}
