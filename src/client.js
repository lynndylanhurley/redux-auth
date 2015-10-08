import React from "react";
import ReactDOM from "react-dom";
import {createHistory} from "history";
import {createStore, compose, applyMiddleware} from "redux";
import {reduxReactRouter, ReduxRouter} from "redux-router";
import { routes, reducer } from "./views/routes";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

var store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    createHistory,
    getRoutes: (args) => {
      // dispatch + getState are needed for the route resolvers / redirects. this
      // is the only place to get a reference to them before the app is initialized.
      //dispatch = args.dispatch;
      //getState = args.getState;
      return routes;
    }
  })
)(createStore)(reducer);


/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById("react-root");
ReactDOM.render(
  <Provider store={store} key="provider">
    <ReduxRouter children={routes} />
  </Provider>
, reactRoot);


/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if (process.env.NODE_ENV !== "production") {
  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
      !reactRoot.firstChild.attributes["data-react-checksum"]) {
    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
  }
}

