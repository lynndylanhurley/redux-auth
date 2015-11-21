import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/server";

const initialState = Immutable.fromJS({
  user: null,
  headers: null,
  firstTimeLogin: false,
  mustResetPassword: false
});

export default createReducer(initialState, {
  [A.SS_AUTH_TOKEN_UPDATE]: (state, {
    user = null,
    headers = null,
    mustResetPassword = false,
    firstTimeLogin = false
  }) => {
    return state.merge({
      user,
      headers,
      mustResetPassword,
      firstTimeLogin
    });
  }
});
