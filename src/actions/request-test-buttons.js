import $ from "jquery";

export const REQUEST_TEST_START    = "REQUEST_TEST_START";
export const REQUEST_TEST_COMPLETE = "REQUEST_TEST_COMPLETE";
export const REQUEST_TEST_ERROR    = "REQUEST_TEST_ERROR";
export const DISMISS_REQUEST_TEST_SUCCESS_MODAL    = "DISMISS_REQUEST_TEST_SUCCESS_MODAL";
export const DISMISS_REQUEST_TEST_ERROR_MODAL    = "DISMISS_REQUEST_TEST_ERROR_MODAL";

export function dismissRequestTestSuccessModal() {
  return { type: DISMISS_REQUEST_TEST_SUCCESS_MODAL };
}
export function dismissRequestTestErrorModal() {
  return { type: DISMISS_REQUEST_TEST_ERROR_MODAL };
}
export function requestTestStart(key) {
  return { type: REQUEST_TEST_START, key };
}
export function requestTestComplete(key) {
  return { type: REQUEST_TEST_COMPLETE, key };
}
export function requestTestError(key) {
  return { type: REQUEST_TEST_ERROR, key };
}
export function requestTest(url, key) {
  return dispatch => {
    dispatch(requestTestStart(key));

    return Promise.resolve($.get(url))
      .then(() => dispatch(requestTestComplete(key)))
      .catch(() => dispatch(requestTestError(key)));
  };
}
