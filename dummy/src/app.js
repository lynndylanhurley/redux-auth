import React from "react";
import {Provider} from "react-redux";
import {ReduxRouter} from "redux-router";
import {Route, IndexRoute} from "react-router";
import {configure, authStateReducer} from "../../src";
import {createStore, compose, applyMiddleware} from "redux";
import {createHistory, createMemoryHistory} from "history";
import {routerStateReducer, reduxReactRouter as clientRouter} from "redux-router";
import { reduxReactRouter as serverRouter } from "redux-router/server";
import {combineReducers} from "redux";
import demoButtons from "./reducers/request-test-buttons";
import thunk from "redux-thunk";
import Container from "./views/partials/Container";
import Main from "./views/Main";
import Account from "./views/Account";
import SignIn from "./views/SignIn";
import GlobalComponents from "./views/partials/GlobalComponents";

class App extends React.Component {
  render() {
    return (
      <Container>
        <GlobalComponents />
        {this.props.children}
      </Container>
    );
  }
}

export function initialize({cookies, isServer, currentLocation} = {}) {
  var reducer = combineReducers({
    auth:   authStateReducer,
    router: routerStateReducer,
    demoButtons
  });

  var store;

  // access control method, used above in the "account" route
  var requireAuth = (nextState, transition, cb) => {
    // the setTimeout is necessary because of this bug:
    // https://github.com/rackt/redux-router/pull/62
    // this will result in a bunch of warnings, but it doesn't seem to be a serious problem
    setTimeout(() => {
      if (!store.getState().auth.getIn(["user", "isSignedIn"])) {
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

  // these methods will differ from server to client
  var reduxReactRouter    = clientRouter;
  var createHistoryMethod = createHistory;
  if (isServer) {
    reduxReactRouter    = serverRouter;
    createHistoryMethod = createMemoryHistory;
  }

  // create the redux store
  store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      createHistory: createHistoryMethod,
      routes
    })
  )(createStore)(reducer);

  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(configure({
    apiUrl: "http://devise-token-auth.dev"
  }, {
    cookies,
    isServer,
    currentLocation
  })).then(({redirectPath, blank} = {}) => {
    return ({
      blank,
      store,
      redirectPath,
      provider: (
        <Provider store={store} key="provider">
          <ReduxRouter children={routes} />
        </Provider>
      )
    });
  });
}
