import {getPasswordUpdateUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import fetch from "../utils/fetch";

export const UPDATE_PASSWORD_START       = "UPDATE_PASSWORD_START";
export const UPDATE_PASSWORD_COMPLETE    = "UPDATE_PASSWORD_COMPLETE";
export const UPDATE_PASSWORD_ERROR       = "UPDATE_PASSWORD_ERROR";
export const UPDATE_PASSWORD_FORM_UPDATE = "UPDATE_PASSWORD_FORM_UPDATE";

export function updatePasswordFormUpdate(key, value) {
  return { type: UPDATE_PASSWORD_FORM_UPDATE, key, value };
}
export function updatePasswordStart() {
  return { type: UPDATE_PASSWORD_START };
}
export function updatePasswordComplete(user) {
  return { type: UPDATE_PASSWORD_COMPLETE, user };
}
export function updatePasswordError(errors) {
  return { type: UPDATE_PASSWORD_ERROR, errors };
}
export function updatePassword(body, endpointKey) {
  return dispatch => {
    dispatch(updatePasswordStart());

    return fetch(getPasswordUpdateUrl(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(body)
    })
      .then(parseResponse)
      .then(({user}) => dispatch(updatePasswordComplete(user)))
      .catch(({errors}) => dispatch(updatePasswordError(errors)));
  };
}
