import {getSignOutUrl, destroySession}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import {storeCurrentEndpointKey} from "./configure";
import fetch from "../utils/fetch";

export const SIGN_OUT_START    = "SIGN_OUT_START";
export const SIGN_OUT_COMPLETE = "SIGN_OUT_COMPLETE";
export const SIGN_OUT_ERROR    = "SIGN_OUT_ERROR";

export function signOutStart(endpoint) {
  return { type: SIGN_OUT_START, endpoint };
}
export function signOutComplete(endpoint, user) {
  return { type: SIGN_OUT_COMPLETE, user, endpoint };
}
export function signOutError(endpoint, errors) {
  return { type: SIGN_OUT_ERROR, endpoint, errors };
}
export function signOut(endpoint) {
  return dispatch => {
    dispatch(signOutStart(endpoint));

    return fetch(getSignOutUrl(endpoint), {method: "delete"})
      .then(parseResponse)
      .then((user) => {
        dispatch(signOutComplete(endpoint, user))
        dispatch(storeCurrentEndpointKey(null));
        destroySession();
      })
      .catch(({errors}) => {
        dispatch(signOutError(endpoint, errors))
        dispatch(storeCurrentEndpointKey(null));
        destroySession();
        throw errors;
      });
  };
}
