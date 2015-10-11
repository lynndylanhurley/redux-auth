import chai, { expect } from "chai";
import sinon, { spy } from "sinon";
import sinonChai from "sinon-chai";
import Auth from "j-toker";
import {signOut} from "../../src/auth/index";
import {getStore} from "./helper";

chai.use(sinonChai);

var store, server;

describe("sign out", () => {
  beforeEach(() => {
    Auth.configure({}, true);
    store = getStore();
    server = sinon.fakeServer.create();
    spy(Auth, "signOut");
  });

  afterEach(() => {
    server.restore();
    Auth.signOut.restore();
    Auth.reset();
  });

  describe("success", () => {
    it("should deauthenticate user upon sign out", (done) => {
      // mock success response
      server.respondWith("DELETE", "/api/auth/sign_out", [
        200, {}, JSON.stringify({
          success: true
        })
      ]);

      store.dispatch(signOut()).then(() => {
        // ensure state was updated
        let state = store.getState().toJS(),
            userState = state.user,
            signOutState = state.signOut;

        expect(userState).to.deep.equal({
          attributes: null,
          isSignedIn: false,
          firstTimeLogin: false,
          mustResetPassword: false
        });

        expect(signOutState).to.deep.equal({
          loading: false,
          errors: null
        });

        expect(Auth.signOut.called);
        done();
      });

      server.respond();
    });
  });

  describe("failure", () => {
    it("should deauthenticate user, even on sign out failure", (done) => {
      let errors = ["Server meltdown"];

      // mock success response
      server.respondWith("DELETE", "/api/auth/sign_out", [
        500, {}, JSON.stringify({errors})
      ]);

      store.dispatch(signOut()).catch(() => {
        // ensure state was updated
        let state = store.getState().toJS(),
            userState = state.user,
            signOutState = state.signOut;

        expect(userState).to.deep.equal({
          attributes: null,
          isSignedIn: false,
          firstTimeLogin: false,
          mustResetPassword: false
        });

        expect(signOutState).to.deep.equal({
          loading: false,
          errors
        });

        expect(Auth.signOut.called);
        done();
      });

      server.respond();
    });
  });
});
