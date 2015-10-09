import chai, { expect } from "chai";
import sinon, { spy } from "sinon";
import sinonChai from "sinon-chai";
import Auth from "j-toker";
import {emailSignIn} from "../../src/auth/index";
import {getStore} from "./helper";

chai.use(sinonChai);

var store, server;

describe("email sign in", () => {
  beforeEach(() => {
    Auth.configure({}, true);
    store = getStore();
    server = sinon.fakeServer.create();
    spy(Auth, "emailSignIn");
  });

  afterEach(() => {
    server.restore();
    Auth.emailSignIn.restore();
    Auth.reset();
  });

  describe("success", () => {
    it("should authenticate user upon successful sign in", (done) => {
      let newToken     = "yyy",
          validEmail   = "test@test.com",
          validUid     = validEmail,
          userObj      = {
            email: validEmail,
            uid:   validUid
          };

      // mock success response
      server.respondWith("POST", "/api/auth/sign_in", [
        200, {
          "access-token": newToken,
          "Content-Type": "application/json"
        }, JSON.stringify({
          data: userObj
      })]);

      store.dispatch(emailSignIn({
        email: validEmail,
        password: "secret123"
      })).then(() => {
        // ensure state was updated
        let state = store.getState().toJS(),
            userState = state.user,
            signInState = state.emailSignIn;

        expect(userState).to.deep.equal({
          attributes: {
            email: "test@test.com",
            uid: "test@test.com"
          },
          isSignedIn: true,
          firstTimeLogin: false,
          mustResetPassword: false
        });

        expect(signInState).to.deep.equal({
          loading: false,
          errors: null
        });

        expect(Auth.emailSignIn.called);
        done();
      });

      server.respond();
    });
  });

  describe("failure", () => {
    it("should handle sign in failures", (done) => {
      let errors = ["Invalid login credentials. Please try again."];

      server.respondWith("POST", "/api/auth/sign_in", [
        401, {}, JSON.stringify({
          errors
        })
      ]);

      store.dispatch(emailSignIn()).catch(() => {
        // ensure state was updated
        let state = store.getState().toJS(),
            userState = state.user,
            signInState = state.emailSignIn;

        expect(userState).to.deep.equal({
          attributes: null,
          isSignedIn: false,
          firstTimeLogin: false,
          mustResetPassword: false
        });

        expect(signInState).to.deep.equal({
          loading: false,
          errors
        });

        expect(Auth.emailSignIn.called);
        done();
      });

      server.respond();
    });
  });
});
