jest.autoMockOff();

var React = require("react");

var initialize;

var testUid        = "test@test.com",
    testToken      = "xyz",
    testClient     = "123",
    apiUrl         = "http://api.site.com",
    testExpiry     = new Date().getTime() + 500,
    rawTestCookies = "currentConfigName=%22default%22; authHeaders=%7B%22"+
      "access-token%22%3A%22"+testToken+"%22%2C%22token"+
      "-type%22%3A%22Bearer%22%2C%22client%22%3A%22"+testClient+
      "%22%2C%22expiry%22%3A%22"+testExpiry+"%22%2C%22uid%22%3A%22"+testUid+"%22%7D;"+
      " mustResetPassword=false; firstTimeLogin=false";


const fakeErrorResponse = function(url, headers) {
  return Promise.resolve({
    json: () => ({
      success: false,
      errors: "Invalid credentials"
    }),
    headers: {_headers: {}}
  });
}

const fakeSuccessResponse = function(url) {
  console.log("returning success resp");
  return Promise.resolve({
    json: () => ({
      success: true,
      data: {uid: testUid}
    }),
    headers: {_headers: {
      "Content-Type": "application/json",
      "access-token": testToken,
      "client": testClient,
      "uid": testUid,
      "expiry": testExpiry
    }}
  });
}


describe("server configuration", () => {
  var {pushState} = require ("redux-router"),
      {match}     = require("redux-router/server");

  afterEach(() => {
    initialize = null;
  });

  describe("unauthenticated user", () => {
    var errRespMock;

    beforeEach(() => {
      errRespMock = jest.genMockFn().mockImpl(fakeErrorResponse);
      jest.setMock("node-fetch", errRespMock);
      ({initialize} = require("../test/helper"));
    });

    afterEach(() => {
      jest.dontMock("node-fetch");
    });

    pit("should not make request for users with no credentials", () => {
      return new Promise((res, rej) => {
        initialize({
          apiUrl,
          isServer: true,
          cookies: "",
          currentLocation: "/"
        }).then(({provider, store}) => {
          let user = store.getState().auth.get("user");

          console.log("@-->user", user);

          // user should not be signed in
          expect(user.get("isSignedIn")).toBe(false);
          expect(user.get("attributes")).toBe(null);

          // ensure that no calls were made to the API
          expect(errRespMock.mock.calls.length).toBe(0);
          res();
        });

        jest.runAllTimers();
      })
    });

    pit("should handle failed validations from the API", () => {
      return new Promise((res, rej) => {
        initialize({
          apiUrl,
          isServer: true,
          currentLocation: "/",
          cookies: rawTestCookies
        }).then(({provider, store}) => {
          let user = store.getState().auth.get("user");

          // user should not be signed in
          expect(user.get("isSignedIn")).toBe(false);
          expect(user.get("attributes")).toBe(null);

          // one call should have been made to API
          expect(errRespMock.mock.calls.length).toBe(1);

          let [[url, {headers}]] = errRespMock.mock.calls;

          // ensure that API call has credentials as defined in cookies
          expect(headers).toEqual({
            "access-token": testToken,
            "token-type": "Bearer",
            client: testClient,
            uid: testUid,
            expiry: `${testExpiry}`
          });

          // ensure that correct url was visited
          expect(url).toEqual(`${apiUrl}/auth/validate_token`);

          res();
        });
      })
    });

    pit("should redirect unauthenticated users trying to access restricted pages", () => {
      return new Promise((res, rej) => {
        initialize({
          apiUrl,
          isServer: true,
          currentLocation: "/account",
          cookies: rawTestCookies
        })
          .then(({provider, store}) => {
            store.dispatch(match("/account", (error, {pathname, action}, renderProps) => {
              // one call should have been made to API
              expect(errRespMock.mock.calls.length).toBe(1);

              // should be redirected to login page
              expect(pathname).toBe("/login");
              expect(action).toBe("REPLACE");

              res();
            }));

            jest.runAllTimers();
          });
      });
    });
  });

  describe("authenticated user", () => {
    var successRespMock;

    beforeEach(() => {
      successRespMock = jest.genMockFn().mockImpl(fakeSuccessResponse);
      jest.setMock("node-fetch", successRespMock);
      ({initialize} = require("../test/helper"));
    });

    afterEach(() => {
      jest.dontMock("node-fetch");
    });

    pit("allows authenticated users to access restricted pages", () => {
      return new Promise(res => {
        initialize({
          apiUrl,
          isServer: true,
          currentLocation: "/account",
          cookies: rawTestCookies
        })
          .then(({provider, store}) => {
            // user should be signed in
            let user = store.getState().auth.get("user");
            expect(user.get("isSignedIn")).toBe(true);
            expect(user.getIn(["attributes", "uid"])).toBe(testUid);

            console.log("@-->user", user);

            // one call should have been made to API
            expect(successRespMock.mock.calls.length).toBe(1);

            let [[url, {headers}]] = successRespMock.mock.calls;

            // ensure that API call has credentials as defined in cookies
            expect(headers).toEqual({
              "access-token": testToken,
              "token-type": "Bearer",
              client: testClient,
              uid: testUid,
              expiry: `${testExpiry}`
            });

            console.log("@-->dispatching account page");

            store.dispatch(match("/account", (error, redirect, renderProps) => {
              // authorized user should not be redirected
              expect(redirect).toBe(null);
              res();
            }));

            jest.runAllTimers();
          });

        jest.runAllTimers();
      });
    });
  });
});
