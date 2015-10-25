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
