import {getPasswordResetRequestUrl, getPasswordResetRedirectUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import extend from "extend";
import fetch from "../utils/fetch";

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
  return { type: REQUEST_PASSWORD_RESET_COMPLETE, message };
}
export function requestPasswordResetError(errors) {
  return { type: REQUEST_PASSWORD_RESET_ERROR, errors };
}
export function requestPasswordReset(body, endpointKey) {
  return dispatch => {
    dispatch(requestPasswordResetStart());

    return fetch(getPasswordResetRequestUrl(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(extend(body, {
        redirect_url: getPasswordResetRedirectUrl()
      }))
    })
      .then(parseResponse)
      .then(({message}) => dispatch(requestPasswordResetComplete(message)))
      .catch(({errors}) => dispatch(requestPasswordResetError(errors)));
  };
}
