export const SS_AUTH_TOKEN_UPDATE = "SS_AUTH_TOKEN_UPDATE";

export function ssAuthTokenUpdate({headers, mustResetPassword, firstTimeLogin}) {
  return { type: SS_AUTH_TOKEN_UPDATE, headers, mustResetPassword, firstTimeLogin };
}
