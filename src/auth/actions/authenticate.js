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
export function authenticate(config) {
  return dispatch => {
    dispatch(authenticateStart());

    var jqPromise = Auth.configure(config);

    jqPromise.then(
      (user) => dispatch(authenticateComplete(user)),
      ({reason}) => dispatch(authenticateError([reason]))
    );

    return Promise.resolve(jqPromise);
  };
}
