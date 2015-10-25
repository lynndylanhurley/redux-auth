import {getPasswordUpdateUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import fetch from "../utils/fetch";

export const UPDATE_PASSWORD_MODAL_START       = "UPDATE_PASSWORD_MODAL_START";
export const UPDATE_PASSWORD_MODAL_COMPLETE    = "UPDATE_PASSWORD_MODAL_COMPLETE";
export const UPDATE_PASSWORD_MODAL_ERROR       = "UPDATE_PASSWORD_MODAL_ERROR";
export const UPDATE_PASSWORD_MODAL_FORM_UPDATE = "UPDATE_PASSWORD_MODAL_FORM_UPDATE";

export function updatePasswordModalFormUpdate(key, value) {
  return { type: UPDATE_PASSWORD_MODAL_FORM_UPDATE, key, value };
}
export function updatePasswordModalStart() {
  return { type: UPDATE_PASSWORD_MODAL_START };
}
export function updatePasswordModalComplete(user) {
  return { type: UPDATE_PASSWORD_MODAL_COMPLETE, user };
}
export function updatePasswordModalError(errors) {
  return { type: UPDATE_PASSWORD_MODAL_ERROR, errors };
}
export function updatePasswordModal(body, endpointKey) {
  return dispatch => {
    dispatch(updatePasswordModalStart());

    return fetch(getPasswordUpdateUrl(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(body)
    })
      .then(parseResponse)
      .then(({user}) => dispatch(updatePasswordModalComplete(user)))
      .catch(({errors}) => dispatch(updatePasswordModalError(errors)));
  };
}
