import Auth from "j-toker";

export const UPDATE_PASSWORD_START       = "UPDATE_PASSWORD_START";
export const UPDATE_PASSWORD_COMPLETE    = "UPDATE_PASSWORD_COMPLETE";
export const UPDATE_PASSWORD_ERROR       = "UPDATE_PASSWORD_ERROR";
export const UPDATE_PASSWORD_FORM_UPDATE = "UPDATE_PASSWORD_FORM_UPDATE";

export function updatePasswordFormUpdate(key, value) {
  return { type: UPDATE_PASSWORD_FORM_UPDATE, key, value };
}
export function updatePasswordStart() {
  return { type: UPDATE_PASSWORD_START };
}
export function updatePasswordComplete(user) {
  return { type: UPDATE_PASSWORD_COMPLETE, user };
}
export function updatePasswordError(errors) {
  return { type: UPDATE_PASSWORD_ERROR, errors };
}
export function updatePassword(opts) {
  return dispatch => {
    dispatch(updatePasswordStart());

    let jqPromise = Auth.updatePassword(opts);
    jqPromise.then(({user}) => dispatch(updatePasswordComplete(user)));

    return Promise
      .resolve(jqPromise)
      .catch(({data}) => dispatch(updatePasswordError(data.errors)));
  };
}
