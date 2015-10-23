import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as uiActions from "../actions/ui";
import * as emailSignInActions from "../actions/email-sign-in";
import * as emailSignUpActions from "../actions/email-sign-up";
import * as signOutActions from "../actions/sign-out";
import * as requestPasswordResetActions from "../actions/request-password-reset";
import * as oAuthSignInActions from "../actions/oauth-sign-in";
import * as updatePasswordActions from "../actions/update-password";
import * as destroyAccountActions from "../actions/destroy-account";
import * as updatePasswordModalActions from "../actions/update-password-modal";
import * as serverActions from "../actions/server";

const initialState = Immutable.fromJS({
  emailSignInSuccessModalVisible:          false,
  emailSignInErrorModalVisible:            false,
  oAuthSignInSuccessModalVisible:          false,
  oAuthSignInErrorModalVisible:            false,
  oAuthSignInLoadingProvider:              null,
  signOutSuccessModalVisible:              false,
  signOutErrorModalVisible:                false,
  emailSignUpSuccessModalVisible:          false,
  emailSignUpAddress:                      null,
  firstTimeLoginSuccessModalVisible:       false,
  firstTimeLoginErrorModalVisible:         false,
  requestPasswordResetSuccessModalVisible: false,
  requestPasswordResetErrorModalVisible:   false,
  requestPasswordResetSuccessMessage:      null,
  updatePasswordSuccessModalVisible:       false,
  updatePasswordErrorModalVisible:         false,
  destroyAccountSuccessModalVisible:       false,
  destroyAccountErrorModalVisible:         false,
  destroyAccountMessage:                   null,
  passwordResetSuccessModalVisible:        false,
  passwordResetErrorModalVisible:          false
});

export default createReducer(initialState, {
  [emailSignInActions.EMAIL_SIGN_IN_COMPLETE]: state => state.set(
    "emailSignInSuccessModalVisible", true
  ),

  [emailSignInActions.EMAIL_SIGN_IN_ERROR]: state => state.set(
    "emailSignInErrorModalVisible", true
  ),

  [oAuthSignInActions.OAUTH_SIGN_IN_COMPLETE]: state => state.merge({
    oAuthSignInSuccessModalVisible: true,
    oAuthSignInLoadingProvider: null
  }),

  [oAuthSignInActions.OAUTH_SIGN_IN_ERROR]: state => state.merge({
    oAuthSignInErrorModalVisible: true,
    oAuthSignInLoadingProvider: null
  }),

  [oAuthSignInActions.OAUTH_SIGN_IN_START]: (state, { provider }) => state.merge({
    oAuthSignInLoadingProvider: provider
  }),

  [uiActions.HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL]: state => state.set(
    "emailSignInSuccessModalVisible", false
  ),

  [uiActions.HIDE_EMAIL_SIGN_IN_ERROR_MODAL]: state => state.set(
    "emailSignInErrorModalVisible", false
  ),

  [signOutActions.SIGN_OUT_COMPLETE]: state => state.set(
    "signOutSuccessModalVisible", true
  ),

  [signOutActions.SIGN_OUT_ERROR]: state => state.set(
    "signOutErrorModalVisible", true
  ),

  [uiActions.HIDE_SIGN_OUT_SUCCESS_MODAL]: state => state.set(
    "signOutSuccessModalVisible", false
  ),

  [uiActions.HIDE_SIGN_OUT_ERROR_MODAL]: state => state.set(
    "signOutErrorModalVisible", false
  ),

  [emailSignUpActions.EMAIL_SIGN_UP_COMPLETE]: (state, {user}) => state.merge({
    emailSignUpSuccessModalVisible: true,
    emailSignUpAddress: user.email
  }),

  [emailSignUpActions.EMAIL_SIGN_UP_ERROR]: state => state.set(
    "emailSignUpErrorModalVisible", true
  ),

  [uiActions.HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL]: state => state.merge({
    emailSignUpSuccessModalVisible: false,
    emailSignUpAddress: null
  }),

  [uiActions.HIDE_EMAIL_SIGN_UP_ERROR_MODAL]: state => state.set(
    "emailSignUpErrorModalVisible", false
  ),

  [uiActions.SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL]: state => state.set(
    "firstTimeLoginSuccessModalVisible", true
  ),

  [uiActions.HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL]: state => state.set(
    "firstTimeLoginSuccessModalVisible", false
  ),

  [uiActions.HIDE_PASSWORD_RESET_SUCCESS_MODAL]: state => state.set(
    "passwordResetSuccessModalVisible", false
  ),

  [uiActions.SHOW_PASSWORD_RESET_SUCCESS_MODAL]: state => state.set(
    "passwordResetSuccessModalVisible", true
  ),

  [uiActions.SHOW_FIRST_TIME_LOGIN_ERROR_MODAL]: state => state.set(
    "firstTimeLoginErrorModalVisible", true
  ),

  [uiActions.HIDE_FIRST_TIME_LOGIN_ERROR_MODAL]: state => state.set(
    "firstTimeLoginErrorModalVisible", false
  ),

  [uiActions.HIDE_PASSWORD_RESET_ERROR_MODAL]: state => state.set(
    "passwordResetErrorModalVisible", false
  ),

  [uiActions.SHOW_PASSWORD_RESET_ERROR_MODAL]: state => state.set(
    "passwordResetErrorModalVisible", true
  ),

  [requestPasswordResetActions.REQUEST_PASSWORD_RESET_COMPLETE]: (state, {message}) => {
    return state.merge({
      requestPasswordResetSuccessModalVisible: true,
      requestPasswordResetSuccessMessage: message
    });
  },

  [requestPasswordResetActions.REQUEST_PASSWORD_RESET_ERROR]: state => state.set(
    "requestPasswordResetErrorModalVisible", true
  ),

  [uiActions.HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL]: state => state.merge({
    requestPasswordResetSuccessModalVisible: false,
    requestPasswordResetSuccessMessage: null
  }),

  [uiActions.HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL]: state => state.set(
    "requestPasswordResetErrorModalVisible", false
  ),

  [uiActions.HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL]: state => state.set(
    "oAuthSignInSuccessModalVisible", false
  ),

  [uiActions.HIDE_OAUTH_SIGN_IN_ERROR_MODAL]: state => state.set(
    "oAuthSignInErrorModalVisible", false
  ),

  [updatePasswordActions.UPDATE_PASSWORD_COMPLETE]: state => state.set(
    "updatePasswordSuccessModalVisible", true
  ),

  [updatePasswordActions.UPDATE_PASSWORD_ERROR]: state => state.set(
    "updatePasswordErrorModalVisible", true
  ),

  [uiActions.HIDE_UPDATE_PASSWORD_SUCCESS_MODAL]: state => state.set(
    "updatePasswordSuccessModalVisible", false
  ),

  [uiActions.HIDE_UPDATE_PASSWORD_ERROR_MODAL]: state => state.set(
    "updatePasswordErrorModalVisible", false
  ),

  [destroyAccountActions.DESTROY_ACCOUNT_COMPLETE]: (state, { message }) => state.merge({
    destroyAccountSuccessModalVisible: true,
    destroyAccountMessage: message
  }),

  [destroyAccountActions.DESTROY_ACCOUNT_ERROR]: state => state.set(
    "destroyAccountErrorModalVisible", true
  ),

  [uiActions.HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL]: state => state.merge({
    destroyAccountSuccessModalVisible: false,
    destroyAccountMessage: null
  }),

  [uiActions.HIDE_DESTROY_ACCOUNT_ERROR_MODAL]: state => state.set(
    "destroyAccountErrorModalVisible", false
  ),

  [serverActions.SS_AUTH_TOKEN_UPDATE]: (state, {mustResetPassword, firstTimeLogin}) => state.merge({
    passwordResetSuccessModalVisible: mustResetPassword,
    firstTimeLoginSuccessModalVisible: firstTimeLogin
  }),

  [uiActions.HIDE_PASSWORD_RESET_SUCCESS_MODAL]: state => state.set(
    "passwordResetSuccessModalVisible", false
  ),

  [uiActions.HIDE_PASSWORD_RESET_ERROR_MODAL]: state => state.set(
    "passwordResetSuccessModalVisible", false
  ),

  [updatePasswordModalActions.UPDATE_PASSWORD_MODAL_COMPLETE]: state => state.merge({
    passwordResetSuccessModalVisible: false,
    updatePasswordSuccessModalVisible: true
  })
});
