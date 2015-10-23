jest.autoMockOff();

var initialize;


var testUid        = "test@test.com",
    testToken      = "xyz",
    testClient     = "123",
    apiUrl         = "http://api.site.com",
    testExpiry     = new Date().getTime() + 500,
    tokenBridge,
    fetch;



function fetchSuccessResp () {
  console.log("@-->fetch mock", arguments);

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
  var React       = require("react"),
      sinon       = require("sinon"),
      $           = require("jquery"),
      Auth        = require("j-toker"),
      {pushState} = require("redux-router"),
      {match}     = require("redux-router/server");

  beforeEach(() => {
    Auth.reset();
    var fetchMock = jest.genMockFn().mockImpl(fetchSuccessResp);
    jest.setMock("isomorphic-fetch", fetchMock);
    ({initialize} = require("../test/helper"));
    fetch = require("../src/utils/fetch");
  });

  afterEach(() => {
    initialize = null;
    jest.dontMock("isomorphic-fetch");
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
    });

    pit("should redirect unauthenticated users to login page", () => {
      return new Promise((res, rej) => {
        initialize()
          .then(({provider, store}) => {
            // TODO: test that existing cookies were cleared?

            //console.log("@-->remaining cookie", cookie("accessToken"));

            store.dispatch(match("/account", (err, {pathname}, renderProps) => {
              expect(pathname).toBe("/login");
              res();
            }));

            jest.runAllTimers();
          });

        jest.runAllTimers();
      });
    });

    pit("should show error modal for failed account confirmations", () => {
      return new Promise(res => {
        createTokenBridge({
          headers: undefined,
          firstTimeLogin: true,
        });

        initialize()
          .then(({provider, store}) => {
            let user = store.getState().auth.get("user");
            let ui = store.getState().auth.get("ui");
            expect(user.get("isSignedIn")).toBe(false);
            expect(user.get("attributes")).toBe(null);
            expect(ui.get("firstTimeLoginErrorModalVisible")).toBe(true);
            destroyTokenBridge();
            res();
          });

        jest.runAllTimers();
      });
    });


    pit("should show error modal for failed password resets", () => {
      return new Promise(res => {
        createTokenBridge({
          headers: undefined,
          mustResetPassword: true,
        });

        initialize()
          .then(({provider, store}) => {
            let user = store.getState().auth.get("user");
            let ui = store.getState().auth.get("ui");
            expect(user.get("isSignedIn")).toBe(false);
            expect(user.get("attributes")).toBe(null);
            expect(ui.get("passwordResetErrorModalVisible")).toBe(true);
            destroyTokenBridge();
            res();
          });

        jest.runAllTimers();
      });
    });
  });

  describe("authenticated user", () => {
    var credentials,
        headers = {
          "access-token": "xyz",
          client: "123",
          uid: "test@test.com"
        },
        user = {
          uid: "test@test.com"
        };

    beforeEach(() => {
    });

    afterEach(() => {
      // remove "token bridge" element from the DOM
      destroyTokenBridge();
    });

    pit("should handle authenticated users", () => {
      const nextToken = "abc";

      createTokenBridge({
        user,
        headers,
        mustResetPassword: false,
        firstTimeLogin: true
      });

      initialize()
        .then(({provider, store}) => {
          let user = store.getState().auth.get("user");
          expect(user.get("isSignedIn")).toBe(true);
          expect(user.getIn(["attributes", "uid"])).toBe("test@test.com");
        });

      jest.runAllTimers();

      console.log("@-->making fetch request");

      return new Promise((ok) => {
        console.log("@-->fetching results");
        // next request should include auth headers
        fetch(`${apiUrl}/api/hello`).then(resp => {
          console.log("@-->get response", resp);
          // cookie should have been updated to latest
          expect(Auth.retrieveData("authHeaders")["access-token"]).toBe(nextToken);
          ok();
        });
      });
    });

    pit("should show success modal for account confirmations", () => {
      return new Promise(res => {
        createTokenBridge({
          user,
          headers,
          firstTimeLogin: true
        });

        initialize()
          .then(({provider, store}) => {
            let user = store.getState().auth.get("user");
            let ui = store.getState().auth.get("ui");
            expect(user.get("isSignedIn")).toBe(true);
            expect(user.getIn(["attributes", "uid"])).toBe("test@test.com");
            expect(ui.get("firstTimeLoginSuccessModalVisible")).toBe(true);
            res();
          });

        jest.runAllTimers();
      });
    });

    pit("should show success modal for password resets", () => {
      return new Promise(res => {
        createTokenBridge({
          user,
          headers,
          mustResetPassword: true
        });

        initialize()
          .then(({provider, store}) => {
            let user = store.getState().auth.get("user");
            let ui = store.getState().auth.get("ui");
            expect(user.get("isSignedIn")).toBe(true);
            expect(user.getIn(["attributes", "uid"])).toBe("test@test.com");
            expect(ui.get("passwordResetSuccessModalVisible")).toBe(true);
            res();
          });

        jest.runAllTimers();
      });
    });
  });
});
