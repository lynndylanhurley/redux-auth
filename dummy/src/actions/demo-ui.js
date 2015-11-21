export const UPDATE_DEMO_THEME = "UPDATE_DEMO_THEME";
export const UPDATE_DEMO_ENDPOINT = "UPDATE_DEMO_ENDPOINT";

export function updateDemoTheme(theme) {
  return { type: UPDATE_DEMO_THEME, theme };
}

export function updateDemoEndpoint(endpoint) {
  return { type: UPDATE_DEMO_ENDPOINT, endpoint };
}
