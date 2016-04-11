import React from "react";
import TestUtils from "react-addons-test-utils";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute} from "react-router";
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {createMemoryHistory} from "react-router";
import {routeReducer, syncHistory} from "react-router-redux";
import thunk from "redux-thunk";
import { configure, authStateReducer } from "../src";
import Immutable from "immutable";

/* dummy components */
import demoButtons from "../dummy/src/reducers/request-test-buttons";
import demoUi from "../dummy/src/reducers/demo-ui";
import Container from "../dummy/src/views/partials/Container";
import Main from "../dummy/src/views/Main";
import Account from "../dummy/src/views/Account";
import SignIn from "../dummy/src/views/SignIn";
import GlobalComponents from "../dummy/src/views/partials/GlobalComponents";

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


export function initialize(
  endpoint = {apiUrl: "http://api.site.com"},
  {cookies, isServer, currentLocation} = {}
) {
  var reducer = combineReducers({
    auth:   authStateReducer,
    routing: routeReducer,
    demoButtons,
    demoUi
  });

  var store;

  // access control method, used above in the "account" route
  var requireAuth = (nextState, transition, cb) => {
    // the setTimeout is necessary because of this bug:
    // https://github.com/rackt/redux-router/pull/62
    // this will result in a bunch of warnings, but it's not a show stopper
    setTimeout(() => {
      if (!store.getState().auth.getIn(["user", "isSignedIn"])) {
        transition({pathname: "/login"});
      }
      if (cb) cb();
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

  var history = createMemoryHistory('');

  // Sync dispatched route actions to the history
  var reduxRouterMiddleware = syncHistory(history)

  // create the redux store
  store = compose(
    applyMiddleware(
      thunk,
      reduxRouterMiddleware
    )
  )(createStore)(reducer);

  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(configure(endpoint, {
    cookies,
    isServer,
    currentLocation
  })).then(({redirectPath} = {}) => {
    return {
      store,
      history,
      routes,
      redirectPath,
      provider: (
        <Provider store={store} key="provider">
          <Router children={routes} history={history} />
        </Provider>
      )
    };
  })
  .catch(err => console.log("@-->init err", err));
}


export function genStore(initialState={}) {
  // merge all relevant reducers
  let reducer = combineReducers({auth: authStateReducer});

  // set initial state
  let auth = Immutable.fromJS(initialState);

  // create the redux store
  return compose(applyMiddleware(thunk))(createStore)(reducer, {auth});
}

export function p () {
  return new Promise(res => {
    setTimeout(res, 100);
  });
}

export function renderConnectedComponent(markup, endpointConfig, initialState={}) {
  // must re-require TestUtils because of mockery
  var store = genStore(initialState);

  return store.dispatch(configure(endpointConfig)).then(() => {
    return {
      store,
      instance: TestUtils.renderIntoDocument(
        <Provider store={store}>
          {markup}
        </Provider>
      )
    };
  }).catch(e => console.log("@-->render error", e.stack));
}

export function mockFetchResponse(url, status=200, body={}, headers={}) {
  return Promise.resolve({
    url,
    status,
    headers: {
      get: (key) => headers[key]
    },
    json: () => Promise.resolve(body)
  });
}
