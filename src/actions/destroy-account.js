import {getDestroyAccountUrl}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import fetch from "../utils/fetch";

export const DESTROY_ACCOUNT_START = "DESTROY_ACCOUNT_START";
export const DESTROY_ACCOUNT_COMPLETE = "DESTROY_ACCOUNT_COMPLETE";
export const DESTROY_ACCOUNT_ERROR = "DESTROY_ACCOUNT_ERROR";

export function destroyAccountStart() {
  return { type: DESTROY_ACCOUNT_START };
}
export function destroyAccountComplete(message) {
  console.log("destroy account message", message);
  return { type: DESTROY_ACCOUNT_COMPLETE, message };
}
export function destroyAccountError(errors) {
  return { type: DESTROY_ACCOUNT_ERROR, errors };
}
export function destroyAccount() {
  return dispatch => {
    dispatch(destroyAccountStart());

    return fetch(getDestroyAccountUrl(), {method: "delete"})
      .then(parseResponse)
      .then(({message}) => dispatch(destroyAccountComplete(message)))
      .catch(({errors}) => dispatch(destroyAccountError(errors)));
  };
}
