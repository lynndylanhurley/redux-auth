import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as authActions from "../actions/authenticate";
import { EMAIL_SIGN_IN_COMPLETE } from "../actions/email-sign-in";
import { SIGN_OUT_COMPLETE } from "../actions/sign-out";

const initialState = Immutable.fromJS({
  attributes: null,
  isSignedIn: false,
  firstTimeLogin: false,
  mustResetPassword: false
});

export default createReducer(initialState, {
  [authActions.AUTHENTICATE_COMPLETE]: (state, { user }) => state.merge({
    attributes: user,
    isSignedIn: true
  }),

  [EMAIL_SIGN_IN_COMPLETE]: (state, { user }) => state.merge({
    attributes: user.data,
    isSignedIn: true
  }),

  [authActions.AUTHENTICATE_FAILURE]: (state) => state.merge(initialState),
  [SIGN_OUT_COMPLETE]: state => state.merge(initialState)
});
