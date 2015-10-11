export const HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL = "HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL";
export const HIDE_EMAIL_SIGN_IN_ERROR_MODAL   = "HIDE_EMAIL_SIGN_IN_ERROR_MODAL";
export const HIDE_SIGN_OUT_ERROR_MODAL        = "HIDE_SIGN_OUT_ERROR_MODAL";
export const HIDE_SIGN_OUT_SUCCESS_MODAL      = "HIDE_SIGN_OUT_SUCCESS_MODAL";
export const HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL = "HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL";
export const HIDE_EMAIL_SIGN_UP_ERROR_MODAL   = "HIDE_EMAIL_SIGN_UP_ERROR_MODAL";

export function hideEmailSignInSuccessModal() {
  return { type: HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL };
}
export function hideEmailSignInErrorModal() {
  return { type: HIDE_EMAIL_SIGN_IN_ERROR_MODAL };
}
export function hideSignOutSuccessModal() {
  return { type: HIDE_SIGN_OUT_SUCCESS_MODAL };
}
export function hideSignOutErrorModal() {
  return { type: HIDE_SIGN_OUT_ERROR_MODAL };
}
export function hideEmailSignUpSuccessModal() {
  return { type: HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL };
}
export function hideEmailSignUpErrorModal() {
  return { type: HIDE_EMAIL_SIGN_UP_ERROR_MODAL };
}
