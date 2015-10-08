import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as AuthActions from "../actions/authenticate";

const initialState = Immutable.fromJS({
  attributes: null,
  isSignedIn: false,
  firstTimeLogin: false,
  mustResetPassword: false
});

export default createReducer(initialState, {
  [AuthActions.AUTHENTICATE_COMPLETE]: (state, { user }) => state.merge({
    attributes: user,
    isSignedIn: true
  })
});
