import chai, { expect } from "chai";
import sinon, { spy } from "sinon";
import sinonChai from "sinon-chai";
import Auth from "j-toker";
import {configure} from "../../src/auth/actions/configure";
import {getStore} from "./helper";

chai.use(sinonChai);

var store, server;

describe("configuration", () => {
  beforeEach(() => {
    Auth.reset();
    store = getStore();
    server = sinon.fakeServer.create();
    spy(Auth, "validateToken");
    spy(Auth, "configure");
  });

  afterEach(() => {
    server.restore();
    Auth.validateToken.restore();
    Auth.configure.restore();
  });

  describe("success", () => {
    it("should call configure and then update the store", (done) => {
      var currentToken = {"access-token": "xxx"},
          newToken     = "yyy",
          validEmail   = "test@test.com",
          validUid     = validEmail,
          userObj      = {
            email:    validEmail,
            uid:      validUid
          };

      // mock success response
      server.respondWith("GET", "/api/auth/validate_token", [
        200, {
          "access-token": newToken,
          "Content-Type": "application/json"
        }, JSON.stringify({
          data: userObj
        })]);

      // add cookie so config has token
      Auth.configure();
      Auth.persistData("authHeaders", currentToken);

      // this is what we actually want to test
      store.dispatch(configure({}, true)).then(() => {
        expect(Auth.configure.called);
        expect(Auth.validateToken.called);

        // ensure state was updated
        let state = store.getState().toJS(),
            userState = state.user,
            authState = state.authentication;

        expect(userState).to.deep.equal({
          attributes: {
            email: "test@test.com",
            uid: "test@test.com"
          },
          isSignedIn: true,
          firstTimeLogin: false,
          mustResetPassword: false
        });

        expect(authState).to.deep.equal({
          loading: false,
          valid: true,
          errors: null
        });

        done();
      });

      // tell sinon mock server to issue response
      server.respond();
    });
  });

  describe("failure", () => {
    it("should not try to validate the token if cookie isn't present", (done) => {
      store.dispatch(configure({}, true)).catch(() => {
        // ensure state was updated
        let state = store.getState().toJS(),
            userState = state.user,
            authState = state.authentication;

        expect(userState).to.deep.equal({
          attributes: null,
          isSignedIn: false,
          firstTimeLogin: false,
          mustResetPassword: false
        });

        expect(authState).to.deep.equal({
          loading: false,
          valid: false,
          errors: "Invalid token"
        });

        expect(Auth.configure.called);
        expect(Auth.validateToken.notCalled);

        done();
      });
    });
  });


  it("should should handle failed auth requests", (done) => {
    // mock success response
    server.respondWith("GET", "/api/auth/validate_token", [
      401, {}, JSON.stringify({
        message: "invalid token"
      })
    ]);

    store.dispatch(configure({}, true)).catch(() => {
      // ensure state was updated
      let state = store.getState().toJS(),
          userState = state.user,
          authState = state.authentication;

      expect(userState).to.deep.equal({
        attributes: null,
        isSignedIn: false,
        firstTimeLogin: false,
        mustResetPassword: false
      });

      expect(authState).to.deep.equal({
        loading: false,
        valid: false,
        errors: "Invalid token"
      });

      expect(Auth.configure.called);
      expect(Auth.validateToken.called);

      done();
    });

    // tell sinon mock server to issue response
    server.respond();
  });
});
