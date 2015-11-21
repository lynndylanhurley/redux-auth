import {getPasswordResetRequestUrl, getPasswordResetRedirectUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import extend from "extend";
import fetch from "../utils/fetch";

export const REQUEST_PASSWORD_RESET_START       = "REQUEST_PASSWORD_RESET_START";
export const REQUEST_PASSWORD_RESET_COMPLETE    = "REQUEST_PASSWORD_RESET_COMPLETE";
export const REQUEST_PASSWORD_RESET_ERROR       = "REQUEST_PASSWORD_RESET_ERROR";
export const REQUEST_PASSWORD_RESET_FORM_UPDATE = "REQUEST_PASSWORD_RESET_FORM_UPDATE";

export function requestPasswordResetFormUpdate(endpoint, key, value) {
  return { type: REQUEST_PASSWORD_RESET_FORM_UPDATE, endpoint, key, value };
}
export function requestPasswordResetStart(endpoint) {
  return { type: REQUEST_PASSWORD_RESET_START, endpoint };
}
export function requestPasswordResetComplete(endpoint, message) {
  return { type: REQUEST_PASSWORD_RESET_COMPLETE, endpoint, message };
}
export function requestPasswordResetError(endpoint, errors) {
  return { type: REQUEST_PASSWORD_RESET_ERROR, endpoint, errors };
}
export function requestPasswordReset(body, endpoint) {
  return dispatch => {
    dispatch(requestPasswordResetStart(endpoint));

    return fetch(getPasswordResetRequestUrl(endpoint), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(extend(body, {
        redirect_url: getPasswordResetRedirectUrl(endpoint)
      }))
    })
      .then(parseResponse)
      .then(({message}) => dispatch(requestPasswordResetComplete(endpoint, message)))
      .catch(({errors}) => dispatch(requestPasswordResetError(endpoint, errors)));
  };
}
