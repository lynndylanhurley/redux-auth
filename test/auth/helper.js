import thunk from "redux-thunk";
import {createStore, compose, applyMiddleware} from "redux";
import { authStateReducer } from "../../src/index";

export function getStore() {
  return compose(applyMiddleware(thunk))(createStore)(authStateReducer);
}
