import Auth from "j-toker";

export const REQUEST_PASSWORD_RESET_START       = "REQUEST_PASSWORD_RESET_START";
export const REQUEST_PASSWORD_RESET_COMPLETE    = "REQUEST_PASSWORD_RESET_COMPLETE";
export const REQUEST_PASSWORD_RESET_ERROR       = "REQUEST_PASSWORD_RESET_ERROR";
export const REQUEST_PASSWORD_RESET_FORM_UPDATE = "REQUEST_PASSWORD_RESET_FORM_UPDATE";

export function requestPasswordResetFormUpdate(key, value) {
  return { type: REQUEST_PASSWORD_RESET_FORM_UPDATE, key, value };
}
export function requestPasswordResetStart() {
  return { type: REQUEST_PASSWORD_RESET_START };
}
export function requestPasswordResetComplete(message) {
  console.log("request password reset complete", message);
  return { type: REQUEST_PASSWORD_RESET_COMPLETE, message };
}
export function requestPasswordResetError(errors) {
  return { type: REQUEST_PASSWORD_RESET_ERROR, errors };
}
export function requestPasswordReset(opts) {
  return dispatch => {
    dispatch(requestPasswordResetStart());

    let jqPromise = Auth.requestPasswordReset(opts);

    jqPromise.then(({message}) => dispatch(requestPasswordResetComplete(message)));

    return Promise
      .resolve(jqPromise)
      .catch(({data}) => dispatch(requestPasswordResetError(data.errors)));
  };
}
