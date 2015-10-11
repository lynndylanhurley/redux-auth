import Auth from "j-toker";

export const AUTHENTICATE_START    = "AUTHENTICATE_START";
export const AUTHENTICATE_COMPLETE = "AUTHENTICATE_COMPLETE";
export const AUTHENTICATE_ERROR    = "AUTHENTICATE_ERROR";

export function authenticateStart() {
  return { type: AUTHENTICATE_START };
}
export function authenticateComplete(user) {
  return { type: AUTHENTICATE_COMPLETE, user };
}
export function authenticateError(errors) {
  return { type: AUTHENTICATE_ERROR, errors };
}
export function authenticate(opts) {
  return dispatch => {
    dispatch(authenticateStart());

    // only allow authenticaton from client-evaluated code.
    if (window) {
      let jqPromise = Auth.validateToken(opts);

      jqPromise.then((user) => dispatch(authenticateComplete(user)));

      return Promise
        .resolve(jqPromise)
        .catch(({reason}) => dispatch(authenticateError([reason])));

    } else {
      let reason = "Must authenticate from browser.";
      dispatch(authenticateError([reason]));
      return Promise.reject(reason);
    }
  };
}
