import chai, { expect } from "chai";
import sinon, { spy } from "sinon";
import sinonChai from "sinon-chai";
import Auth from "j-toker";
import {authenticate} from "../../src/index";
import {getStore} from "./helper";

chai.use(sinonChai);

var store, server;

describe("authenticate", () => {
  beforeEach(() => {
    store = getStore();
    server = sinon.fakeServer.create();
    spy(Auth, "validateToken");
    spy(Auth, "configure");
  });

  afterEach(() => {
    server.restore();
    Auth.validateToken.restore();
    Auth.configure.restore();
    Auth.reset();
  });

  describe("success", () => {
    it("should call authenticate and then update the store", (done) => {
      let currentToken = {"access-token": "xxx"},
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
      Auth.configure({}, true);
      Auth.persistData("authHeaders", currentToken);

      // this is what we actually want to test
      store.dispatch(authenticate()).then(() => {
        expect(Auth.configure.calledOnce);
        expect(Auth.validateToken.calledOnce);

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
      Auth.configure({}, true);
      store.dispatch(authenticate()).catch(() => {
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
});
