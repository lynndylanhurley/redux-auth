import React from "react";
import {Provider} from "react-redux";
import {ReduxRouter} from "redux-router";
import {Route, IndexRoute} from "react-router";
import {authStateReducer, authUiStateReducer} from "./auth/index";
import {createStore, compose, applyMiddleware} from "redux";
import {createHistory, createMemoryHistory} from "history";
import {routerStateReducer, reduxReactRouter as clientRouter} from "redux-router";
import { reduxReactRouter as serverRouter } from "redux-router/server";
import {configure} from "./auth/index";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import Main from "./views/Main";
import Account from "./views/Account";
import SignIn from "./views/SignIn";


export function initialize({cookies, isServer} = {}) {
  var reducer = combineReducers({
    auth:   authStateReducer,
    authUi: authUiStateReducer,
    router: routerStateReducer
  });

  // define app routes
  var routes = (
    <Route path="/">
      <IndexRoute component={Main} />
      <Route path="login" component={SignIn} />
      <Route path="account" component={Account} />
    </Route>
  );

  // these methods will differ from server to client
  var reduxReactRouter    = clientRouter;
  var createHistoryMethod = createHistory;
  if (isServer) {
    reduxReactRouter    = serverRouter;
    createHistoryMethod = createMemoryHistory;
  }

  // create the redux store
  var store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory: createHistoryMethod
    })
  )(createStore)(reducer);

  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(configure({
    apiUrl: "//devise-token-auth.dev",
    cookies,
    isServer
  })).then(() => {
    return ({
      store,
      provider: (
        <Provider store={store} key="provider">
          <ReduxRouter children={routes} />
        </Provider>
      )
    });
  });
}
