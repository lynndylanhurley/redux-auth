import {
  getEmailSignInUrl,
  setCurrentEndpointKey,
  getCurrentEndpointKey
} from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import fetch from "../utils/fetch";

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
export function emailSignInComplete(user) {
  return { type: EMAIL_SIGN_IN_COMPLETE, user };
}
export function emailSignInError(errors) {
  return { type: EMAIL_SIGN_IN_ERROR, errors };
}
export function emailSignIn(body, endpointKey) {
  return dispatch => {
    dispatch(emailSignInStart());

    // save previous endpoint key in case of failure
    var prevEndpointKey = getCurrentEndpointKey();

    // necessary for fetch to recognize the response as an api request
    setCurrentEndpointKey(endpointKey);

    return fetch(getEmailSignInUrl(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(body)
    })
      .then(parseResponse)
      .then((user) => dispatch(emailSignInComplete(user)))
      .catch((errors) => {
        // revert endpoint key to what it was before failed request
        setCurrentEndpointKey(prevEndpointKey);
        return dispatch(emailSignInError(errors));
      });
  };
}
