export const SS_AUTH_TOKEN_UPDATE = "SS_AUTH_TOKEN_UPDATE";

export function ssAuthTokenUpdate({user, headers, mustResetPassword, firstTimeLogin, endpointKey}) {
  return { type: SS_AUTH_TOKEN_UPDATE, user, headers, mustResetPassword, firstTimeLogin, endpointKey };
}
