import React from "react";
import {Provider} from "react-redux";
import {Route, IndexRoute} from "react-router";
import {configure, authStateReducer} from "../../src";
import {createStore, compose, applyMiddleware} from "redux";
import {Router, createMemoryHistory, browserHistory} from "react-router";
import { routerReducer, syncHistoryWithStore } from "react-router-redux";
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

function requireAuth (store, nextState, replace, next) {
  if (!store.getState().auth.getIn(["user", "isSignedIn"])) {
    replace("/login");
  }
  next();
}

export function initialize({cookies, isServer, currentLocation, userAgent} = {}) {
  const reducer = combineReducers({
    auth: authStateReducer,
    routing: routerReducer,
    demoButtons,
    demoUi
  });

  // create the redux store
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk)
    )
  );

  let history = (isServer)
    ? createMemoryHistory(currentLocation)
    : browserHistory;

  history = syncHistoryWithStore(history, store);

  // define app routes
  var routes = (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="login" component={SignIn} />
        <Route
          path="account"
          component={Account}
          onEnter={requireAuth.bind(this, store)} />
      </Route>
    </Router>
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
        <Provider store={store} key="provider" children={routes} />
      )
    });
  });
}
