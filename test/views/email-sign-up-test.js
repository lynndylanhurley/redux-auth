var React,
    TestUtils,
    sinon,
    expect,
    retrieveData,
    C,
    mockery,
    registerMock,
    mockFetchResponse;

export default function() {
  describe("EmailSignUpForm", () => {
    var EmailSignUpForm,
        findClass,
        findTag,
        requirePath,
        renderConnectedComponent,
        successRespSpy,
        errorRespSpy,
        testUid = "test@test.com",
        testPassword = "secret123",
        successRespHeaders = {
          "Content-Type": "application/json",
          "access-token": "abc"
        },
        errorResp = {
          "status":"error",
          "data": {
            "uid": testUid,
            "email": testUid
          },
          "errors": {
            "password_confirmation": ["doesn't match Password"],
            "password": ["is too short (minimum is 8 characters)"],
            "email": ["is not an email"],
            "full_messages":[
              "Password confirmation doesn't match Password",
              "Password is too short (minimum is 8 characters)",
              "Email is not an email"
            ]
          }
        };

    [
      "material-ui",
      "default",
      "bootstrap"
    ].forEach((theme) => {
      requirePath = `../../src/views/${theme}/EmailSignUpForm`;

      describe(`${theme} theme`, () => {
        beforeEach(() => {
          React = require("react");
          sinon = require("sinon");
          ({expect} = require ("chai"));
          ({retrieveData} = require("../../src/utils/session-storage"));
          C = require("../../src/utils/constants");
          mockery = require("mockery");
          ({registerMock} = mockery);
          ({mockFetchResponse} = require ("../helper"));

          mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            useCleanCache: true
          });

          mockery.resetCache();
        });

        afterEach(() => {
          mockery.deregisterAll();
          mockery.disable();
        });

        describe(`params`, () => {
          it("should accept styling params", done => {
            EmailSignUpForm = require(requirePath).default;
            TestUtils = require("react-addons-test-utils");
            findClass = TestUtils.findRenderedDOMComponentWithClass;
            ({renderConnectedComponent} = require ("../helper"));

            let inputProps = {
              email: {style: {color: "red"}, className: "email-class-override"},
              password: {style: {color: "green"}, className: "password-class-override"},
              passwordConfirmation: {style: {color: "purple"}, className: "password-confirmation-class-override"},
              submit: {className: "submit-class-override"}
            };

            renderConnectedComponent(
              <EmailSignUpForm inputProps={inputProps} />
            ).then(({instance}) => {
              let emailEl                = findClass(instance, "email-class-override");
              let passwordEl             = findClass(instance, "password-class-override");
              let passwordConfirmationEl = findClass(instance, "password-confirmation-class-override");
              findClass(instance, "submit-class-override");
              expect(emailEl.getAttribute("style")).to.match(/color:red/);
              expect(passwordEl.getAttribute("style")).to.match(/color:green/);
              expect(passwordConfirmationEl.getAttribute("style")).to.match(/color:purple/);
              done();
            }).catch(e => console.log("error:", e));
          });

          it("should allow configuration of endpoint", done => {
            var testUrl = "http://alt.dev";

            successRespSpy = sinon.spy((url) => {
              return mockFetchResponse(url, 200, {data: {uid: testUid, email: testUid}}, successRespHeaders);
            });

            registerMock("isomorphic-fetch", successRespSpy);
            TestUtils = require("react-addons-test-utils");
            ({renderConnectedComponent} = require ("../helper"));
            EmailSignUpForm = require(requirePath).default;
            findClass = TestUtils.findRenderedDOMComponentWithClass;

            let endpointConfig = [
              {default: {apiUrl: "http://default.dev"}},
              {alt: {apiUrl: testUrl}}
            ];

            renderConnectedComponent((
              <EmailSignUpForm endpoint="alt" />
            ), endpointConfig).then(({instance}) => {
              let submitEl = findClass(instance, "email-sign-up-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // expect response to have been made to alt endpoint url
                let [[url, ]] = successRespSpy.args;
                expect(url).to.equal(`${testUrl}/auth?config_name=alt`);

                done();
              }, 0);

            }).catch(e => console.log("errors:", e));
          });
        });

        describe(`success`, () => {
          beforeEach(() => {
            // mock succes response
            successRespSpy = sinon.spy((url) => {
              return mockFetchResponse(url, 200, {data: {uid: testUid, email: testUid}}, successRespHeaders);
            });

            registerMock("isomorphic-fetch", successRespSpy);
            TestUtils = require("react-addons-test-utils");
            EmailSignUpForm = require(requirePath).default;
            findClass = TestUtils.findRenderedDOMComponentWithClass;
            findTag = TestUtils.scryRenderedDOMComponentsWithTag;
            ({renderConnectedComponent} = require ("../helper"));
          });

          it("should handle successful sign up", done => {
            var testEmail = testUid;
            var apiUrl    = "http://api.dev";

            renderConnectedComponent((
              <EmailSignUpForm />
            ), {apiUrl}).then(({instance, store}) => {
              let emailEl = findTag(instance, "input")[0];
              let passwordEl = findTag(instance, "input")[1];
              let passwordConfirmEl = TestUtils.scryRenderedDOMComponentsWithTag(instance, "input")[2];

              // change input values
              emailEl.value = testEmail;
              passwordEl.value = testPassword;
              passwordConfirmEl.value = testPassword;

              // trigger dom change event
              TestUtils.Simulate.change(emailEl);
              TestUtils.Simulate.change(passwordEl);
              TestUtils.Simulate.change(passwordConfirmEl);

              // ensure store is updated when inputs are changed
              expect(store.getState().auth.getIn(["emailSignUp", "default", "form", "email"])).to.equal(testEmail);
              expect(store.getState().auth.getIn(["emailSignUp", "default", "form", "password"])).to.equal(testPassword);
              expect(store.getState().auth.getIn(["emailSignUp", "default", "form", "password_confirmation"])).to.equal(testPassword);

              // submit the form
              let submitEl = findClass(instance, "email-sign-up-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure user was set
                let sentAddress = store.getState().auth.getIn(["ui", "emailSignUpAddress"]);
                expect(sentAddress).to.equal(testEmail)

                // ensure success modal is present
                let modalVisible = store.getState().auth.getIn(["ui", "emailSignUpSuccessModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure default url was used
                let [[url, ]] = successRespSpy.args;
                expect(url).to.equal(`${apiUrl}/auth?config_name=default`);

                done();
              }, 0);
            }).catch(e => console.log("errors", e.stack));
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

            EmailSignUpForm = require(requirePath).default;
          });

          it("should handle failed sign in", done => {
            var apiUrl = "http://api.dev";

            renderConnectedComponent(
              <EmailSignUpForm />, {apiUrl}
            ).then(({instance, store}) => {
              // submit the form
              let submitEl = TestUtils.findRenderedDOMComponentWithClass(instance, "email-sign-up-submit");
              TestUtils.Simulate.click(submitEl);

              setTimeout(() => {
                // ensure auth headers were updated
                let authHeaders = retrieveData(C.SAVED_CREDS_KEY);
                expect(authHeaders).to.equal(undefined);

                let errors = store.getState().auth.getIn(["emailSignUp", "default", "errors"]).toJS();
                expect(errors).to.deep.equal(errorResp["errors"]);

                // ensure user was not set
                let user = store.getState().auth.getIn(["user", "attributes"]);
                expect(user).to.equal(null)

                // ensure modal is to be shown
                let modalVisible = store.getState().auth.getIn(["ui", "emailSignUpErrorModalVisible"]);
                expect(modalVisible).to.equal(true);

                // ensure errors show up in form
                let errorItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, "inline-error-item");
                expect(errorItems.length).to.equal(3);

                done();
              }, 0);
            }).catch(e => console.log("errors", e));
          });
        });
      });
    });
  });
}
