import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as AuthActions from "../actions/authenticate";
import { EMAIL_SIGN_IN_COMPLETE } from "../actions/email-sign-in";

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
  }),

  [AuthActions.AUTHENTICATE_FAILURE]: (state) => state.merge({
    attributes: null,
    isSignedIn: false,
    firstTimeLogin: false,
    mustResetPassword: false
  }),

  [EMAIL_SIGN_IN_COMPLETE]: (state, { user }) => state.merge({
    attributes: user.data,
    isSignedIn: true
  })
});
