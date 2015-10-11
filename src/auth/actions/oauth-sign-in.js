import Auth from "j-toker";

export const OAUTH_SIGN_IN_START    = "OAUTH_SIGN_IN_START";
export const OAUTH_SIGN_IN_COMPLETE = "OAUTH_SIGN_IN_COMPLETE";
export const OAUTH_SIGN_IN_ERROR    = "OAUTH_SIGN_IN_ERROR";

export function oAuthSignInStart(provider) {
  return { type: OAUTH_SIGN_IN_START, provider };
}
export function oAuthSignInComplete(user) {
  return { type: OAUTH_SIGN_IN_COMPLETE, user };
}
export function oAuthSignInError(errors) {
  return { type: OAUTH_SIGN_IN_ERROR, errors };
}
export function oAuthSignIn(opts) {
  return dispatch => {
    dispatch(oAuthSignInStart(opts.provider));

    let jqPromise = Auth.oAuthSignIn(opts);
    jqPromise.then((user) => {
      dispatch(oAuthSignInComplete(user));
    });

    return Promise
      .resolve(jqPromise)
      .catch(({ data }) => dispatch(oAuthSignInError(data.errors)));
  };
}
