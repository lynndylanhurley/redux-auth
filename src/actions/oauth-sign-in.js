import {getOAuthUrl} from "../utils/session-storage";
import authenticate from "../utils/oauth-popup";

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
export function oAuthSignIn({provider, params, endpointKey}) {
  return dispatch => {
    dispatch(oAuthSignInStart(provider));

    let url = getOAuthUrl({provider, params, endpointKey});

    authenticate({provider, url})
      .then(user => dispatch(oAuthSignInComplete(user)))
      .catch(({ errors }) => dispatch(oAuthSignInError(errors)));
  };
}
