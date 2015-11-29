import jsdomify from "jsdomify";

var React,
    TestUtils,
    sinon,
    expect,
    resetConfig,
    retrieveData,
    C,
    mockery,
    registerMock,
    getCurrentEndpointKey,
    url,
    mockFetchResponse;


describe("OAuthSignInButton", () => {
  before(() => {
    jsdomify.create();
  });

  after(() => {
    jsdomify.destroy();
  });

  var OAuthSignInButton,
      findClass,
      renderConnectedComponent,
      testUid = "test@test.com",
      popupSuccessParams = {
        "access-token": "abc"
      },
      successResp = {
        success: true,
        data: {uid: testUid}
      },
      errorResp = {
        success: false,
        errors: ["Invalid token"]
      },
      successRespHeaders = {
        "access-token": "xyz"
      };

  function popupSuccessMock(provider, targetUrl) {
    let closed = false;

    let popup = {
      closed,
      close: () => {
        closed = true;
      },
      location: targetUrl
    };

    // change url to include token after short interval
    setTimeout(() => {
      let params = `token=${popupSuccessParams["access-token"]}&uid=${encodeURIComponent(testUid)}`;
      popup.location = url.parse(`http://api.dev?${params}`);
    }, 100);

    return popup;
  }

  function popupErrorMock(provider, targetUrl) {
    let closed = false;

    let popup = {
      closed,
      close: () => {
        closed = true;
      },
      location: targetUrl
    };

    // close window without appending credentials to url after short interval
    setTimeout(() => {
      popup.closed = true;
    }, 100);

    return popup;
  }

  [
    "bootstrap",
    "material-ui",
    "default"
  ].forEach(theme => {

    describe(`${theme}`, () => {

      beforeEach(() => {
        jsdomify.clear();

        React = require("react");
        TestUtils = require("react-addons-test-utils");
        sinon = require("sinon");
        ({expect} = require ("chai"));
        ({retrieveData, resetConfig, getCurrentEndpointKey} = require("../../src/utils/session-storage"));
        C = require("../../src/utils/constants");
        mockery = require("mockery");
        ({registerMock} = mockery);
        ({mockFetchResponse} = require ("../helper"));
        url = require("url");

        resetConfig();
        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });
        global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
      });

      afterEach(() => {
        mockery.deregisterAll();
        mockery.disable();
      });

      describe("params", () => {
        it("should accept styling params", done => {
          OAuthSignInButton = require(`../../src/views/${theme}/OAuthSignInButton`);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

          let inputProps = {className: "oauth-class-override"};

          renderConnectedComponent(
            <OAuthSignInButton provider="github" {...inputProps} />
          ).then(({instance}) => {
            findClass(instance, "oauth-class-override")
            done();
          }).catch(e => console.log("error:", e));
        });

        it("should allow the use of alternate endpoints", done => {
          let apiUrl = "http://alt.dev";

          var tokenValidationSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, successRespHeaders);
          });

          var popupSpy = sinon.spy(popupSuccessMock);

          // note that this is relative to src/actions/oauth-sign-in, not this file
          registerMock("../utils/popup", popupSpy);
          registerMock("isomorphic-fetch", tokenValidationSpy);

          OAuthSignInButton = require(`../../src/views/${theme}/OAuthSignInButton`);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

          let endpointConfig = [
            {default: {apiUrl: "http://default.dev"}},
            {alt: {apiUrl}}
          ];

          renderConnectedComponent(
            <OAuthSignInButton provider="github" endpoint="alt" />
          , endpointConfig).then(({instance, store}) => {

        // click button
            let submitEl = findClass(instance, "oauth-sign-in-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // ensure popup was created to the correct API endpoint
              let [[popupProvider, popupUrl, popupName]] = popupSpy.args;
              expect(popupName).to.equal("github");
              expect(popupProvider).to.equal("github");
              expect(popupUrl).to.match(/^http:\/\/alt.dev\/auth\/github/);

              // ensure token validation request was called with creds returned from oauth redirect
              let [[validationUrl]] = tokenValidationSpy.args;
              expect(validationUrl).to.equal(`${apiUrl}/auth/validate_token`);

              // ensure config is set to "default"
              expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("alt");
              expect(getCurrentEndpointKey()).to.equal("alt");

              // ensure user exists in store
              let currentUser = store.getState().auth.get("user");
              expect(currentUser.get("isSignedIn")).to.equal(true);

              done();
            }, 100);

          }).catch(e => console.log("error:", e));

        });
      });

      describe("success", () => {
        it("retrieves auth creds from external oauth login window, makes validation request to API", done => {
          let apiUrl = "http://api.dev";

          var tokenValidationSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, successRespHeaders);
          });

          var popupSpy = sinon.spy(popupSuccessMock);

          // note that this is relative to src/actions/oauth-sign-in, not this file
          registerMock("../utils/popup", popupSpy);
          registerMock("isomorphic-fetch", tokenValidationSpy);

          OAuthSignInButton = require(`../../src/views/${theme}/OAuthSignInButton`);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

          renderConnectedComponent(
            <OAuthSignInButton provider="github" />
          , {apiUrl}).then(({instance, store}) => {

            // click button
            let submitEl = findClass(instance, "oauth-sign-in-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // ensure popup was created to the correct API endpoint
              let [[popupProvider, popupUrl, popupName]] = popupSpy.args;
              expect(popupName).to.equal("github");
              expect(popupProvider).to.equal("github");
              expect(popupUrl).to.match(/^http:\/\/api.dev\/auth\/github/);

              // ensure token validation request was called with creds returned from oauth redirect
              let [[validationUrl, {headers}]] = tokenValidationSpy.args;
              expect(validationUrl).to.equal(`${apiUrl}/auth/validate_token`);
              expect(headers["access-token"]).to.deep.equal(popupSuccessParams["access-token"]);

              // ensure config is set to "default"
              expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("default");
              expect(getCurrentEndpointKey()).to.equal("default");

              // ensure creds were set to response of token validation request
              let currentCreds = retrieveData(C.SAVED_CREDS_KEY);
              expect(currentCreds["access-token"]).to.equal(successRespHeaders["access-token"]);

              // ensure user exists in store
              let currentUser = store.getState().auth.get("user");
              expect(currentUser.get("isSignedIn")).to.equal(true);
              expect(currentUser.getIn(["attributes", "uid"])).to.equal(testUid);

              // ensure success modal is visible
              expect(store.getState().auth.getIn(["ui", "oAuthSignInSuccessModalVisible"])).to.equal(true);
              done();
            }, 100);

          }).catch(e => console.log("error:", e));
        });
      });

      describe("failure", () => {
        it("cancels authentication when user closes popup", done => {
          let apiUrl = "http://api.dev";

          var popupSpy = sinon.spy(popupErrorMock);

          // note that this is relative to src/actions/oauth-sign-in, not this file
          registerMock("../utils/popup", popupSpy);

          OAuthSignInButton = require(`../../src/views/${theme}/OAuthSignInButton`);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

          renderConnectedComponent(
            <OAuthSignInButton provider="github" />
          , {apiUrl}).then(({instance, store}) => {

            // click button
            let submitEl = findClass(instance, "oauth-sign-in-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // ensure user is not signed in
              let currentUser = store.getState().auth.get("user");
              expect(currentUser.get("isSignedIn")).to.equal(false);
              expect(currentUser.get("attributes")).to.equal(null);

              // ensure error message is visible
              expect(store.getState().auth.getIn(["ui", "oAuthSignInErrorModalVisible"])).to.equal(true);
              done();
            }, 100);

          }).catch(e => console.log("error:", e));
        });

        it("handles token validation failure", done => {
          let apiUrl = "http://api.dev";

          var tokenValidationSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 401, errorResp, {});
          });

          var popupSpy = sinon.spy(popupSuccessMock);

          // note that this is relative to src/actions/oauth-sign-in, not this file
          registerMock("../utils/popup", popupSpy);
          registerMock("isomorphic-fetch", tokenValidationSpy);

          OAuthSignInButton = require(`../../src/views/${theme}/OAuthSignInButton`);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

          renderConnectedComponent(
            <OAuthSignInButton provider="github" />
          , {apiUrl}).then(({instance, store}) => {

            // click button
            let submitEl = findClass(instance, "oauth-sign-in-submit");

            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // ensure user is not signed in
              let currentUser = store.getState().auth.get("user");
              expect(currentUser.get("isSignedIn")).to.equal(false);
              expect(currentUser.get("attributes")).to.equal(null);

              // ensure token validation request was made
              let [[validationUrl]] = tokenValidationSpy.args;
              expect(validationUrl).to.equal(`${apiUrl}/auth/validate_token`);

              // ensure error message is visible
              expect(store.getState().auth.getIn(["ui", "oAuthSignInErrorModalVisible"])).to.equal(true);

              done();
            }, 100);
          });
        });
      });
    });
  });
});
