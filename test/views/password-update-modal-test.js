import jsdomify from "jsdomify";

var React,
    TestUtils,
    sinon,
    expect,
    resetConfig,
    persistData,
    C,
    mockery,
    registerMock,
    retrieveData,
    storeCurrentEndpointKey,
    mockFetchResponse;

describe("PasswordResetSuccessModal update form", () => {
  before(() => {
    jsdomify.create();
  });

  after(() => {
    jsdomify.destroy();
  });

  var PasswordResetSuccessModal,
      findClass = (className) => document.getElementsByClassName(className)[0],
      findTag = (tagName, i) => document.getElementsByTagName(tagName)[i],
      requirePath,
      renderConnectedComponent,
      successRespSpy,
      errorRespSpy,
      testUid = "test@test.com",
      initialState = {
        user: {
          isSignedIn: true,
          attributes: {
            provider: "email"
          }
        },
        ui: {
          passwordResetSuccessModalVisible: true
        }
      },
      successRespHeaders = {
        "Content-Type": "application/json",
        "access-token": "abc"
      },
      successResp = {
        "success":true,
        "data": {
          "user":{"email":"test@test.com"},
          "message":"Your password has been successfully updated."
        }
      },
      errorResp = {
        "success":false,
        "errors":{
          "password_confirmation":["doesn't match Password"],
          "password":["is too short (minimum is 8 characters)"],
          "full_messages":[
            "Password confirmation doesn't match Password",
            "Password is too short (minimum is 8 characters)"
          ]
        }
      };

  [
    "bootstrap",
    "default",
    "material-ui"
  ].forEach((theme) => {
    requirePath = `../../src/views/${theme}/modals/PasswordResetSuccessModal`;

    describe(`${theme} theme`, () => {
      beforeEach(() => {
        jsdomify.clear();

        React = require("react");
        sinon = require("sinon");
        ({expect} = require ("chai"));
        ({retrieveData, persistData, resetConfig} = require("../../src/utils/session-storage"));
        ({storeCurrentEndpointKey} = require("../../src/actions/configure"));
        C = require("../../src/utils/constants");
        mockery = require("mockery");
        ({registerMock} = mockery);
        ({mockFetchResponse} = require ("../helper"));

        mockery.enable({
          warnOnReplace: false,
          warnOnUnregistered: false,
          useCleanCache: true
        });

        // disable react devtools warnings
        global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};

        resetConfig();
      });

      afterEach(() => {
        mockery.deregisterAll();
        mockery.disable();
      });

      describe(`params`, () => {
        it("should accept styling params", done => {
          TestUtils = require("react-addons-test-utils");
          PasswordResetSuccessModal = require(requirePath);
          ({renderConnectedComponent} = require ("../helper"));

          let inputProps = {
            password: {className: "password-class-override"},
            passwordConfirmation: {className: "password-confirmation-class-override"},
            submit: {className: "submit-class-override"}
          };

          renderConnectedComponent(
            <PasswordResetSuccessModal inputProps={inputProps} show={true} />, undefined, initialState
          ).then(() => {
            expect(findClass("password-class-override")).to.be.ok;
            expect(findClass("password-confirmation-class-override")).to.be.ok;
            expect(findClass("submit-class-override")).to.be.ok;

            done();
          }).catch(e => console.log("error:", e));
        });

        it("should allow configuration of endpoint", done => {
          var testUrl = "http://alt.dev";

          successRespSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, successRespHeaders);
          });

          registerMock("isomorphic-fetch", successRespSpy);
          TestUtils = require("react-addons-test-utils");
          ({renderConnectedComponent} = require ("../helper"));
          PasswordResetSuccessModal = require(requirePath);

          let endpointConfig = [
            {default: {apiUrl: "http://default.dev"}},
            {alt: {apiUrl: testUrl}}
          ];

          renderConnectedComponent(
            <PasswordResetSuccessModal show={true} />, endpointConfig, initialState
          ).then(({store}) => {
            // establish that we're using the "alt" endpoint config
            store.dispatch(storeCurrentEndpointKey("alt"));
            persistData(C.SAVED_CONFIG_KEY, "alt");

            // change input values
            let passwordEl = findTag("input", 0);
            let passwordConfirmationEl = findTag("input", 1);

            passwordEl.value = "whatever";
            passwordConfirmationEl.value = "whatever";

            TestUtils.Simulate.change(passwordEl);
            TestUtils.Simulate.change(passwordConfirmationEl);

            // submit changed password
            let submitEl = findClass("password-reset-success-modal-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // expect response to have been made to alt endpoint url
              let [[url, ]] = successRespSpy.args;
              expect(url).to.equal(`${testUrl}/auth/password`);

              done();
            }, 0);
          }).catch(e => console.log("errors:", e));
        });
      });

      describe(`success`, () => {
        beforeEach(() => {
          // mock succes response
          successRespSpy = sinon.spy((url) => {
            return mockFetchResponse(url, 200, successResp, successRespHeaders);
          });

          registerMock("isomorphic-fetch", successRespSpy);
          TestUtils = require("react-addons-test-utils");
          ({renderConnectedComponent} = require ("../helper"));
          PasswordResetSuccessModal = require(requirePath);
        });

        it("should handle successful password update", done => {
          var testPassword = "secret123";
          var apiUrl       = "http://api.dev";

          renderConnectedComponent((
            <PasswordResetSuccessModal show={true} />
          ), {apiUrl}, initialState).then(({store}) => {
            let passwordEl = findTag("input", 0);
            let passwordConfirmationEl = findTag("input", 1);

            // change input values
            passwordEl.value = testPassword;
            passwordConfirmationEl.value = testPassword;

            // trigger dom change event
            TestUtils.Simulate.change(passwordEl);
            TestUtils.Simulate.change(passwordConfirmationEl);

            // ensure store is updated when inputs are changed
            expect(store.getState().auth.getIn(["updatePasswordModal", "default", "form", "password"])).to.equal(testPassword);
            expect(store.getState().auth.getIn(["updatePasswordModal", "default", "form", "password_confirmation"])).to.equal(testPassword);

            // submit the form
            let submitEl = findClass("password-reset-success-modal-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              // ensure auth headers were updated
              let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
              expect(authHeaders["access-token"]).to.equal(successRespHeaders["access-token"]);

              // ensure success modal is present
              let modalVisible = store.getState().auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);
              expect(modalVisible).to.equal(true);

              // ensure default url was used
              let [[url, ]] = successRespSpy.args;
              expect(url).to.equal(`${apiUrl}/auth/password`);

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
          TestUtils = require("react-addons-test-utils");
          ({renderConnectedComponent} = require ("../helper"));
          PasswordResetSuccessModal = require(requirePath);
        });

        it("should handle failed sign in", done => {
          var apiUrl = "http://api.dev";

          renderConnectedComponent(
            <PasswordResetSuccessModal show={true} />, {apiUrl}, initialState
          ).then(({store}) => {
            // change input values
            let passwordEl = findTag("input", 0);
            passwordEl.value = testUid;
            TestUtils.Simulate.change(passwordEl);

            // submit the form
            let submitEl = findClass("password-reset-success-modal-submit");
            TestUtils.Simulate.click(submitEl);

            setTimeout(() => {
              let errors = store.getState().auth.getIn(["updatePasswordModal", "default", "errors"]).toJS();
              expect(errors).to.deep.equal(errorResp["errors"]);

              // ensure modal is to be shown
              let modalVisible = store.getState().auth.getIn(["ui", "passwordResetSuccessModalVisible"]);
              expect(modalVisible).to.equal(true);

              // ensure errors show up in form
              let errorItems = document.getElementsByClassName("inline-error-item");
              expect(errorItems.length).to.equal(2);

              done();
            }, 0);
          }).catch(e => console.log("errors", e));
        });
      });
    });
  });
});
