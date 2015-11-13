import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as authActions from "../actions/authenticate";
import { EMAIL_SIGN_IN_COMPLETE } from "../actions/email-sign-in";
import { SIGN_OUT_COMPLETE, SIGN_OUT_ERROR } from "../actions/sign-out";
import { OAUTH_SIGN_IN_COMPLETE } from "../actions/oauth-sign-in";
import { DESTROY_ACCOUNT_COMPLETE } from "../actions/destroy-account";
import * as ssActions from "../actions/server";

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

  [ssActions.SS_TOKEN_VALIDATION_COMPLETE]: (state, { user, mustResetPassword, firstTimeLogin }) => {
    return state.merge({
      attributes: user,
      isSignedIn: true,
      firstTimeLogin,
      mustResetPassword
    });
  },

  [EMAIL_SIGN_IN_COMPLETE]: (state, { user }) => state.merge({
    attributes: user.data,
    isSignedIn: true
  }),

  [OAUTH_SIGN_IN_COMPLETE]: (state, { user }) => state.merge({
    attributes: user,
    isSignedIn: true
  }),

  [ssActions.SS_AUTH_TOKEN_UPDATE]: (state, {mustResetPassword, firstTimeLogin}) => {
    return state.merge({ mustResetPassword, firstTimeLogin });
  },

  [authActions.AUTHENTICATE_FAILURE]:    state => state.merge(initialState),
  [ssActions.SS_TOKEN_VALIDATION_ERROR]: state => state.merge(initialState),
  [SIGN_OUT_COMPLETE]:                   state => state.merge(initialState),
  [SIGN_OUT_ERROR]:                      state => state.merge(initialState),
  [DESTROY_ACCOUNT_COMPLETE]:            state => state.merge(initialState)
});
