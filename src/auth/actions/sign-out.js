import Auth from "j-toker";

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
export function signOut(opts) {
  return dispatch => {
    dispatch(signOutStart());

    let jqPromise = Auth.signOut(opts);

    jqPromise.then(
      (user) => dispatch(signOutComplete(user)),
      ({data}) => dispatch(signOutError(data.errors))
    );

    return Promise.resolve(jqPromise);
  };
}
