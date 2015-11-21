import {getPasswordUpdateUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import fetch from "../utils/fetch";

export const UPDATE_PASSWORD_MODAL_START       = "UPDATE_PASSWORD_MODAL_START";
export const UPDATE_PASSWORD_MODAL_COMPLETE    = "UPDATE_PASSWORD_MODAL_COMPLETE";
export const UPDATE_PASSWORD_MODAL_ERROR       = "UPDATE_PASSWORD_MODAL_ERROR";
export const UPDATE_PASSWORD_MODAL_FORM_UPDATE = "UPDATE_PASSWORD_MODAL_FORM_UPDATE";

export function updatePasswordModalFormUpdate(endpoint, key, value) {
  return { type: UPDATE_PASSWORD_MODAL_FORM_UPDATE, endpoint, key, value };
}
export function updatePasswordModalStart(endpoint) {
  return { type: UPDATE_PASSWORD_MODAL_START };
}
export function updatePasswordModalComplete(endpoint, user) {
  return { type: UPDATE_PASSWORD_MODAL_COMPLETE, endpoint, user };
}
export function updatePasswordModalError(endpoint, errors) {
  return { type: UPDATE_PASSWORD_MODAL_ERROR, endpoint, errors };
}
export function updatePasswordModal(body, endpointKey) {
  return dispatch => {
    dispatch(updatePasswordModalStart(endpointKey));

    return fetch(getPasswordUpdateUrl(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(body)
    })
      .then(parseResponse)
      .then(({user}) => dispatch(updatePasswordModalComplete(endpointKey, user)))
      .catch(({errors}) => dispatch(updatePasswordModalError(endpointKey, errors)));
  };
}
