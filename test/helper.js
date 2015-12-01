import React from "react";
import {Provider} from "react-redux";
import {Route, IndexRoute} from "react-router";
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {createHistory, createMemoryHistory} from "history";
import {ReduxRouter, routerStateReducer, reduxReactRouter as clientRouter} from "redux-router";
import thunk from "redux-thunk";
import { reduxReactRouter as serverRouter } from "redux-router/server";
import { configure, authStateReducer } from "../src/index";
import Immutable from "immutable";

/* dummy components */
import demoButtons from "../dummy/src/reducers/request-test-buttons";
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
        {console.log("rendering children")}
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
    router: routerStateReducer,
    demoButtons
  });

  var store;

  // access control method, used above in the "account" route
  var requireAuth = (nextState, transition, cb) => {
    // the setTimeout is necessary because of this bug:
    // https://github.com/rackt/redux-router/pull/62
    // this will result in a bunch of warnings, but it's not a show stopper
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
  if (isServer || global.__TEST__) {
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

  // this is necessary for material ui to render
  global.navigator = {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36"
  };

  if (typeof(window) !== "undefined") {
    window.navigator = global.navigator;
  }

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
      redirectPath,
      provider: (
        <Provider store={store} key="provider">
          <ReduxRouter children={routes} />
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
  var TestUtils = require("react-addons-test-utils");
  var store = genStore(initialState);

  // this is necessary for material ui to render
  global.navigator = {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36"
  };

  if (typeof(window) !== "undefined") {
    window.navigator = global.navigator;
  }

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
