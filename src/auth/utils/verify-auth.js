import Auth from "j-toker";
import fetch from "node-fetch";
import cookie from "cookie";

function parseHeaders (headers) {
  // set header for each key in `tokenFormat` config
  var newHeaders = {};

  // set flag to ensure that we don't accidentally nuke the headers
  // if the response tokens aren't sent back from the API
  var blankHeaders = true;

  // set header key + val for each key in `tokenFormat` config
  // TODO: get actual config value
  for (var key of ["access-token", "token-type", "client", "expiry", "uid"]) {
    newHeaders[key] = headers[key];

    if (newHeaders[key]) {
      // normalize -- sometimes headers come back in array form
      if (typeof newHeaders[key] === "object") {
        newHeaders[key] = newHeaders[key][0];
      }

      blankHeaders = false;
    }
  }

  // persist headers for next request
  if (!blankHeaders) {
    return newHeaders;
  }
}


export function fetchToken({cookies, apiUrl}) {
  console.log("@-->fetching token");
  let serverAuthPromise = new Promise((resolve, reject) => {
    if (!cookies) {
      reject("No cookies");
    } else if (cookies) {
      let rawCookies = cookie.parse(cookies);
      let parsedCookies = JSON.parse(rawCookies.authHeaders);
      var newHeaders;

      return fetch(`http:${apiUrl}/auth/validate_token`, {
        headers: parsedCookies
      }).then((resp) => {
        newHeaders = parseHeaders(resp.headers._headers);
        return resp.json();
      })
      .then((json) => {
        if (json.success) {
          resolve({newHeaders, user: json.data});
        } else {
          console.log("rejecting token", json);
          reject(json.errors);
        }
      }).catch((err) => {
        reject(err);
      });

    } else {
      console.log("rejecting token");
      reject("No tokens.");
    }
  });

  return serverAuthPromise;
}

function verifyAuth({isServer, cookies, apiUrl}) {
  return new Promise((resolve, reject) => {
    if (isServer) {
      console.log("fetching token");
      fetchToken({cookies, apiUrl})
        .then(({user, newHeaders}) => {
          resolve({user, newHeaders});
        })
        .catch((err) => {
          console.log("@-->err", err);
          reject({reason: err});
        });
    } else {
      Auth.validateToken().then((user) => resolve(user.data), (err) => reject({reason: err}));
    }
  });
}

export default verifyAuth;
