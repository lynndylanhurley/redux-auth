import React from "react";
import {Route, IndexRoute} from "react-router";
import {authStateReducer, authUiStateReducer, verifyAuth} from "../auth/index";
import {routerStateReducer} from "redux-router";
import {combineReducers} from "redux";
import Main from "views/Main";
import Account from "views/Account";
import SignIn from "views/SignIn";

/**
 * requireAuth
 */
function requireAuth (nextState, transition, callback) {
  return verifyAuth()
    .then(() => callback())
    .catch(() => {
      transition({ next: nextState.location.pathname }, "/login");
      callback();
    });
}

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export const routes = (
  <Route path="/">
    <IndexRoute component={Main} />
    <Route path="login" component={SignIn} />
    <Route path="account" component={Account} onEnter={requireAuth} />
  </Route>
);

export const reducer = combineReducers({
  auth:   authStateReducer,
  authUi: authUiStateReducer,
  router: routerStateReducer
});
