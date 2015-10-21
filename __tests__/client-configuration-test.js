jest.autoMockOff();

var initialize,
    server;

describe("client configuration", () => {
  var React       = require("react");
      sinon       = require("sinon"),
      $           = require("jquery"),
      Auth        = require("j-toker"),
      {pushState} = require ("redux-router"),
      {match}     = require("redux-router/server");

  beforeEach(() => {
    ({initialize} = require("../test/helper"));
  });

  afterEach(() => {
    initialize = null;
    Auth.reset();
  });

  describe("unauthenticated user", () => {
    it("should handle unauthenticated users", () => {
      initialize()
        .then(({provider, store}) => {
          let user = store.getState().auth.get("user");
          expect(user.get("isSignedIn")).toBe(false);
          expect(user.get("attributes")).toBe(null);
        });

      jest.runAllTimers();

      // TODO: test that existing cookies were cleared?
    });

    pit("should redirect unauthenticated users to login page", () => {
      return new Promise((res, rej) => {
        initialize()
          .then(({provider, store}) => {
            store.dispatch(match("/account", (err, {pathname}, renderProps) => {
              expect(pathname).toBe("/login");
              res();
            }));

            jest.runAllTimers();
          })
          .catch(e => rej(e));

        jest.runAllTimers();
      });
    });
  });

  describe("authenticated user", () => {
    var credentials,
        tokenBridge,
        headers = {
          "access-token": "xyz",
          client: "123",
          uid: "test@test.com"
        },
        user = {
          uid: "test@test.com"
        };

    beforeEach(() => {
      server = sinon.fakeServer.create();

      // create "token bridge" element containing credentials
      credentials = {
        user,
        headers,
        mustResetPassword: false,
        firstTimeLogin: true
      };

      let credStr = JSON.stringify(credentials);

      tokenBridge = document.createElement("DIV");
      tokenBridge.setAttribute("id", "token-bridge");
      tokenBridge.textContent = credStr;
      document.body.appendChild(tokenBridge);
    });

    afterEach(() => {
      // remove "token bridge" element from the DOM
      document.body.removeChild(tokenBridge);
      server.restore();
    });

    pit("should handle authenticated users", () => {
      const nextToken = "abc";

      server.respondWith("GET", "/api/hello", (request) => {
        let reqHeaders = request.requestHeaders;
        expect(reqHeaders["access-token"]).toBe(headers["access-token"]);
        expect(reqHeaders["uid"]).toBe(headers["uid"]);
        expect(reqHeaders["client"]).toBe(headers["client"]);

        request.respond(
          200, {
            "Content-Type": "application/json",
            "access-token": nextToken
          },
          JSON.stringify([{message: "hello"}])
        );
      });

      initialize()
        .then(({provider, store}) => {
          let user = store.getState().auth.get("user");
          expect(user.get("isSignedIn")).toBe(true);
          expect(user.getIn(["attributes", "uid"])).toBe("test@test.com");
        });

      jest.runAllTimers();

      return new Promise((ok) => {
        // next request should include auth headers
        $.get("/api/hello").then(resp => {
          // cookie should have been updated to latest
          setTimeout(() => {
            expect(Auth.retrieveData("authHeaders")["access-token"]).toBe(nextToken);
            ok();
          });
        });

        server.respond();
        jest.runAllTimers();
      });
    });
  });
});
