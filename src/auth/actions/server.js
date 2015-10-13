import {fetchToken} from "../utils/verify-auth";

export const SS_AUTH_TOKEN_UPDATE         = "SS_AUTH_TOKEN_UPDATE";
export const SS_SET_LOADING_PROMISE       = "SS_SET_LOADING_PROMISE";
export const SS_TOKEN_VALIDATION_START    = "SS_TOKEN_VALIDATION_START";
export const SS_TOKEN_VALIDATION_COMPLETE = "SS_TOKEN_VALIDATION_COMPLETE";
export const SS_TOKEN_VALIDATION_ERROR    = "SS_TOKEN_VALIDATION_ERROR";

export function ssAuthTokenUpdate(headers) {
  return { type: SS_AUTH_TOKEN_UPDATE, headers };
}
export function ssSetLoadingPromise(promise) {
  return { type: SS_SET_LOADING_PROMISE, promise };
}
export function ssTokenValidationStart() {
  return { type: SS_TOKEN_VALIDATION_START };
}
export function ssTokenValidationComplete(user) {
  return { type: SS_TOKEN_VALIDATION_COMPLETE, user };
}
export function ssTokenValidationError(errors) {
  return { type: SS_TOKEN_VALIDATION_ERROR, errors };
}
export function ssTokenValidation(opts) {
  return dispatch => {
    dispatch(ssTokenValidationStart());

    return fetchToken(opts)
      .then(({user, newHeaders}) => {
        dispatch(ssAuthTokenUpdate(newHeaders));
        dispatch(ssTokenValidationComplete(user));
      })
      .catch(err => dispatch(ssTokenValidationError(err)));
  };
}
