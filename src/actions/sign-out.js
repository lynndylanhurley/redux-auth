import {getSignOutUrl, destroySession}  from "../utils/session-storage";
import {parseResponse} from "../utils/handle-fetch-response";
import fetch from "../utils/fetch";

export const SIGN_OUT_START    = "SIGN_OUT_START";
export const SIGN_OUT_COMPLETE = "SIGN_OUT_COMPLETE";
export const SIGN_OUT_ERROR    = "SIGN_OUT_ERROR";

export function signOutStart() {
  return { type: SIGN_OUT_START };
}
export function signOutComplete(user) {
  return { type: SIGN_OUT_COMPLETE, user };
}
export function signOutError(errors) {
  return { type: SIGN_OUT_ERROR, errors };
}
export function signOut() {
  return dispatch => {
    dispatch(signOutStart());

    return fetch(getSignOutUrl(), {method: "delete"})
      .then(parseResponse)
      .then((user) => {
        dispatch(signOutComplete(user))
        destroySession();
      })
      .catch(({errors}) => {
        dispatch(signOutError(errors))
        destroySession();
      });
  };
}
