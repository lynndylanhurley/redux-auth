export function parseResponse (response, cb = () => {}) {
  let json = response.json();
  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    cb()
    return json.then(err => Promise.reject(err));
  }
}
