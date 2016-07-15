import React from "react";
import {Provider} from "react-redux";
import {Route, IndexRoute} from "react-router";
import {configure, authStateReducer} from "../../src";
import {createStore, compose, applyMiddleware} from "redux";
import {Router, createMemoryHistory, browserHistory} from "react-router";
import {routeReducer, routerMiddleware} from "react-router-redux";
import {combineReducers} from "redux";
import demoButtons from "./reducers/request-test-buttons";
import demoUi from "./reducers/demo-ui";
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

export function initialize({cookies, isServer, currentLocation, userAgent} = {}) {
  var reducer = combineReducers({
    auth:   authStateReducer,
    routing: routeReducer,
    demoButtons,
    demoUi
  });

  var store;

  // these methods will differ from server to client
  var history = browserHistory;
  if (isServer) {
    history = createMemoryHistory(currentLocation);
  }


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


  // create the redux store
  store = createStore(
    reducer,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      ),
      typeof(window) !== "undefined" && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
    )
  );


  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(configure([
    {
      default: {
        apiUrl: __API_URL__
      }
    }, {
      evilUser: {
        apiUrl:                __API_URL__,
        signOutPath:           "/mangs/sign_out",
        emailSignInPath:       "/mangs/sign_in",
        emailRegistrationPath: "/mangs",
        accountUpdatePath:     "/mangs",
        accountDeletePath:     "/mangs",
        passwordResetPath:     "/mangs/password",
        passwordUpdatePath:    "/mangs/password",
        tokenValidationPath:   "/mangs/validate_token",
        authProviderPaths: {
          github:    "/mangs/github",
          facebook:  "/mangs/facebook",
          google:    "/mangs/google_oauth2"
        }
      }
    }
  ], {
    cookies,
    isServer,
    currentLocation
  })).then(({redirectPath, blank} = {}) => {
    // hack for material-ui server-side rendering.
    // see https://github.com/callemall/material-ui/pull/2007
    if (userAgent) {
      global.navigator = {userAgent};
    }

    return ({
      blank,
      store,
      history,
      routes,
      redirectPath,
      provider: (
        <Provider store={store} key="provider">
          <Router routes={routes} history={history} />
        </Provider>
      )
    });
  });
}
