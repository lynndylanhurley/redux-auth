import Auth from "j-toker";

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
export function updatePasswordModal(opts) {
  return dispatch => {
    dispatch(updatePasswordModalStart());

    let jqPromise = Auth.updatePassword(opts);
    jqPromise.then(({user}) => dispatch(updatePasswordModalComplete(user)));

    return Promise
      .resolve(jqPromise)
      .catch(({data}) => dispatch(updatePasswordModalError(data.errors)));
  };
}
