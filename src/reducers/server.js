import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/server";

const initialState = Immutable.fromJS({
  nextHeaders: null,
  firstTimeLogin: false,
  mustResetPassword: false
});

export default createReducer(initialState, {
  [A.SS_AUTH_TOKEN_UPDATE]: (state, {headers, mustResetPassword = false, firstTimeLogin = false}) => {
    return state.merge({
      nextHeaders: headers,
      mustResetPassword,
      firstTimeLogin
    });
  }
});
