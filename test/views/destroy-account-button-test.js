import jsdomify from "jsdomify";

var React,
    sinon,
    expect,
    resetConfig,
    persistData,
    storeCurrentEndpointKey,
    getCurrentEndpointKey,
    C,
    mockery,
    registerMock,
    mockFetchResponse;

describe("DestroyAccountButton", () => {
  before(() => {
    jsdomify.create();
  });

  after(() => {
    jsdomify.destroy();
  });

  var DestroyAccountButton,
      TestUtils,
      findClass,
      requirePath,
      renderConnectedComponent,
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

  [
    "material-ui",
    "default",
    "bootstrap"
  ].forEach((theme) => {
    requirePath = `../../src/views/${theme}/DestroyAccountButton`;

    describe(`${theme} theme`, () => {
      beforeEach(() => {
        jsdomify.clear();

        React = require("react");
        sinon = require("sinon");
        ({expect} = require("chai"));
        ({resetConfig, persistData} = require("../../src/utils/session-storage"));
        ({storeCurrentEndpointKey} = require("../../src/actions/configure"));
        ({getCurrentEndpointKey} = require("../../src/utils/session-storage"));
        C = require("../../src/utils/constants");
        mockery = require("mockery");
        ({registerMock} = mockery);
        ({mockFetchResponse} = require("../helper"));

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

      describe(`params`, () => {
        it("should accept styling params", done => {
          DestroyAccountButton = require(requirePath);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

          let inputProps = {className: "destroy-account-class-override"};

          renderConnectedComponent(
            <DestroyAccountButton {...inputProps} />
          ).then(({instance}) => {
            findClass(instance, "destroy-account-class-override");
            done();
          }).catch(e => console.log("error:", e));
        });

        it("should allow configuration of endpoint", done => {
          var testUrl = "http://alt.dev";

          successRespSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, {});
          });

          registerMock("isomorphic-fetch", successRespSpy);
          DestroyAccountButton = require(requirePath);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));

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
              // expect response to have been made to alt endpoint url
              let [[url, ]] = successRespSpy.args;
              expect(url).to.equal(`${testUrl}/auth`);

              // ensure current endpoint was restored to default
              expect(store.getState().auth.getIn(["configure", "currentEndpointKey"])).to.equal("default");
              expect(getCurrentEndpointKey()).to.equal("default");

              done();
            }, 0);

          }).catch(e => console.log("errors:", e));
        });
      });

      describe(`success`, () => {
        beforeEach(() => {
          // mock succes response
          successRespSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, {});
          });

          registerMock("isomorphic-fetch", successRespSpy);
          DestroyAccountButton = require(requirePath);
          TestUtils = require("react-addons-test-utils");
          findClass = TestUtils.findRenderedDOMComponentWithClass;
          ({renderConnectedComponent} = require("../helper"));
        });

        it("should handle successful account destruction", done => {
          var apiUrl    = "http://api.dev";

          renderConnectedComponent((
            <DestroyAccountButton />
          ), {apiUrl}, {user: {isSignedIn: true}}).then(({instance, store}) => {
            // submit the form
            let submitEl = findClass(instance, "destroy-account-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // ensure success modal is present
              let modalVisible = store.getState().auth.getIn(["ui", "destroyAccountSuccessModalVisible"]);
              expect(modalVisible).to.equal(true);

              // ensure user is signed out
              expect(store.getState().auth.getIn(["user", "isSignedIn"])).to.equal(false);

              // ensure default url was used
              let [[url, ]] = successRespSpy.args;
              expect(url).to.equal(`${apiUrl}/auth`);

              done();
            }, 0);
          }).catch(e => console.log("errors", e));
        });
      });

      describe(`error`, () => {
        beforeEach(() => {
          // mock succes response
          errorRespSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 401, errorResp, {});
          });

          registerMock("isomorphic-fetch", errorRespSpy);
          DestroyAccountButton = require(requirePath);
          TestUtils = require("react-addons-test-utils");
          ({renderConnectedComponent} = require("../helper"));
        });

        it("should handle failed account destruction", done => {
          var apiUrl = "http://api.dev";

          renderConnectedComponent(
            <DestroyAccountButton />, {apiUrl}, {user: {isSignedIn: true}}
          ).then(({instance, store}) => {
            // submit the form
            let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "destroy-account-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              let errors = store.getState().auth.getIn(["destroyAccount", "default", "errors"]).toJS();
              expect(errors).to.deep.equal(errorResp["errors"]);

              // ensure modal is to be shown
              let modalVisible = store.getState().auth.getIn(["ui", "destroyAccountErrorModalVisible"]);
              expect(modalVisible).to.equal(true);

              done();
            }, 0);
          }).catch(e => console.log("errors", e));
        });
      });
    });
  });
});
