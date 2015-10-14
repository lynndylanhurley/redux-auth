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
import Container from "./views/partials/Container";
import Main from "./views/Main";
import Account from "./views/Account";
import SignIn from "./views/SignIn";
import { AuthModals, TokenBridge } from "./auth/index";

class App extends React.Component {
  render() {
    return (
      <Container>
        <AuthModals />
        <TokenBridge />
        {this.props.children}
      </Container>
    );
  }
}

export function initialize({cookies, isServer} = {}) {
  var reducer = combineReducers({
    auth:   authStateReducer,
    authUi: authUiStateReducer,
    router: routerStateReducer
  });

  var store;

  // access control method, used above in the "account" route
  var requireAuth = (nextState, transition, cb) => {

    // the setTimeout is necessary because of this bug:
    // https://github.com/rackt/redux-router/pull/62
    // this will result in a bunch of warnings
    setTimeout(() => {
      if (!store.getState().auth.getIn(["user", "isSignedIn"])) {
        console.log("failed auth check, transitioning to /login");
        transition(null, "/login");
      }
      cb();
    }, 0);
  };

  // define app routes
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="login" component={SignIn} />
      <Route path="account" component={Account} onEnter={requireAuth} />
    </Route>
  );

  console.log("created routes", routes);

  // these methods will differ from server to client
  var reduxReactRouter    = clientRouter;
  var createHistoryMethod = createHistory;
  if (isServer) {
    reduxReactRouter    = serverRouter;
    createHistoryMethod = createMemoryHistory;
  }

  console.log("creating store...");

  // create the redux store
  store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory: createHistoryMethod
    })
  )(createStore)(reducer);

  console.log("created store", store);

  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(configure({
    apiUrl: "//devise-token-auth.dev",
    cookies,
    isServer
  })).then(() => {
    console.log("finished configure");
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
