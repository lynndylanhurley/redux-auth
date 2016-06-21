import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import { getCurrentEndpointKey } from "../utils/session-storage.js"
import * as authActions from "../actions/authenticate";
import { EMAIL_SIGN_IN_COMPLETE } from "../actions/email-sign-in";
import { EMAIL_SIGN_UP_COMPLETE } from "../actions/email-sign-up";
import { SIGN_OUT_COMPLETE, SIGN_OUT_ERROR } from "../actions/sign-out";
import { OAUTH_SIGN_IN_COMPLETE } from "../actions/oauth-sign-in";
import { STORE_CURRENT_ENDPOINT_KEY, SET_ENDPOINT_KEYS } from "../actions/configure";

const initialState = Immutable.fromJS({
  attributes: null,
  isSignedIn: false,
  firstTimeLogin: false,
  mustResetPassword: false,
  endpointKey: null
});

export default createReducer(initialState, {
  [authActions.AUTHENTICATE_COMPLETE]: (state, { user }) => state.merge({
    attributes: user,
    isSignedIn: true,
    endpointKey: getCurrentEndpointKey()
  }),

  [STORE_CURRENT_ENDPOINT_KEY]: (state, {currentEndpointKey}) => state.set("endpointKey", currentEndpointKey),
  [SET_ENDPOINT_KEYS]: (state, {currentEndpointKey}) => state.set("endpointKey", currentEndpointKey),

  [EMAIL_SIGN_IN_COMPLETE]: (state, { endpoint, user }) => state.merge({
    attributes: user.data,
    isSignedIn: true,
    endpointKey: endpoint
  }),

  [EMAIL_SIGN_UP_COMPLETE]: (state, { endpoint, user }) => state.merge({
    attributes: user,
    isSignedIn: true,
    endpointKey: endpoint
  }),

  [OAUTH_SIGN_IN_COMPLETE]: (state, { endpoint, user }) => state.merge({
    attributes: user,
    isSignedIn: true,
    endpointKey: endpoint
  }),

  [authActions.AUTHENTICATE_FAILURE]:    state => state.merge(initialState),
  [SIGN_OUT_COMPLETE]:                   state => state.merge(initialState),
  [SIGN_OUT_ERROR]:                      state => state.merge(initialState)
});
