import Auth from "j-toker";

export const EMAIL_SIGN_UP_START       = "EMAIL_SIGN_UP_START";
export const EMAIL_SIGN_UP_COMPLETE    = "EMAIL_SIGN_UP_COMPLETE";
export const EMAIL_SIGN_UP_ERROR       = "EMAIL_SIGN_UP_ERROR";
export const EMAIL_SIGN_UP_FORM_UPDATE = "EMAIL_SIGN_UP_FORM_UPDATE";

export function emailSignUpFormUpdate(key, value) {
  return { type: EMAIL_SIGN_UP_FORM_UPDATE, key, value };
}
export function emailSignUpStart() {
  return { type: EMAIL_SIGN_UP_START };
}
export function emailSignUpComplete(user) {
  return { type: EMAIL_SIGN_UP_COMPLETE, user };
}
export function emailSignUpError(errors) {
  return { type: EMAIL_SIGN_UP_ERROR, errors };
}
export function emailSignUp(opts) {
  return dispatch => {
    dispatch(emailSignUpStart());

    let jqPromise = Auth.emailSignUp(opts);

    jqPromise.then(({data}) => dispatch(emailSignUpComplete(data)));

    return Promise
      .resolve(jqPromise)
      .catch(({data}) => dispatch(emailSignUpError(data.errors)));
  };
}
