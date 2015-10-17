import Auth from "j-toker";

export const EMAIL_SIGN_IN_START       = "EMAIL_SIGN_IN_START";
export const EMAIL_SIGN_IN_COMPLETE    = "EMAIL_SIGN_IN_COMPLETE";
export const EMAIL_SIGN_IN_ERROR       = "EMAIL_SIGN_IN_ERROR";
export const EMAIL_SIGN_IN_FORM_UPDATE = "EMAIL_SIGN_IN_FORM_UPDATE";

export function emailSignInFormUpdate(key, value) {
  return { type: EMAIL_SIGN_IN_FORM_UPDATE, key, value };
}
export function emailSignInStart() {
  return { type: EMAIL_SIGN_IN_START };
}
export function emailSignInComplete(user, showModal) {
  return { type: EMAIL_SIGN_IN_COMPLETE, user, showModal };
}
export function emailSignInError(errors) {
  return { type: EMAIL_SIGN_IN_ERROR, errors };
}
export function emailSignIn(opts) {
  return dispatch => {
    dispatch(emailSignInStart());

    let jqPromise = Auth.emailSignIn(opts);

    jqPromise.then((user) => dispatch(emailSignInComplete(user)));

    return Promise
      .resolve(jqPromise)
      .catch(({ data }) => dispatch(emailSignInError(data.errors)));
  };
}
