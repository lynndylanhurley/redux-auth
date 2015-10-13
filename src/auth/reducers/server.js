import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/server";

const initialState = Immutable.fromJS({
  nextHeaders: null,
  promise: null
});

export default createReducer(initialState, {
  [A.SS_AUTH_TOKEN_UPDATE]: (state, {headers}) => state.set("nextHeaders", headers),
  [A.SS_SET_LOADING_PROMISE]: (state, {promise}) => state.set("promise", promise)
});
