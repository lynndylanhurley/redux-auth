import {getEmailSignUpUrl, getConfirmationSuccessUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import extend from "extend";
import fetch from "../utils/fetch";

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
export function emailSignUp(body, endpointKey) {
  return dispatch => {
    dispatch(emailSignUpStart());

    return fetch(getEmailSignUpUrl(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(extend(body, {
        confirm_success_url: getConfirmationSuccessUrl()
      }))
    })
      .then(parseResponse)
      .then((user) => dispatch(emailSignUpComplete(user)))
      .catch(({errors}) => dispatch(emailSignUpError(errors)));
  };
}
