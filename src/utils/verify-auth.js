import Auth from "j-toker";
import fetch from "node-fetch";
import cookie from "cookie";
import getRedirectInfo from "../utils/parse-url";
import url from "url";

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


export function fetchToken({cookies, apiUrl, currentLocation}) {
  let {authRedirectHeaders} = getRedirectInfo(url.parse(currentLocation));

  let serverAuthPromise = new Promise((resolve, reject) => {
    if (cookies || authRedirectHeaders) {
      let rawCookies = cookie.parse(cookies);
      let parsedCookies = JSON.parse(rawCookies.authHeaders || "false");
      let firstTimeLogin,
          mustResetPassword,
          headers;

      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
        headers           = parseHeaders(authRedirectHeaders);
        mustResetPassword = JSON.parse(authRedirectHeaders.reset_password || "false");
        firstTimeLogin    = JSON.parse(authRedirectHeaders.account_confirmation_success || "false");
      } else {
        headers           = parsedCookies;
        mustResetPassword = JSON.parse(parsedCookies.mustResetPassword || "false");
        firstTimeLogin    = JSON.parse(parsedCookies.firstTimeLogin || "false");
      }

      if (!headers) {
        return reject({reason: "No creds"});
      }

      var newHeaders;

      return fetch(`${apiUrl}/auth/validate_token`, {
        headers
      }).then((resp) => {
        newHeaders = parseHeaders(resp.headers._headers);
        return resp.json();
      })
      .then((json) => {
        if (json.success) {
          return resolve({newHeaders, user: json.data, mustResetPassword, firstTimeLogin});
        } else {
          return reject({
            reason: json.errors,
            mustResetPassword,
            firstTimeLogin
          });
        }
      }).catch(reason => {
        return reject({reason});
      });
    } else {
      reject({reason: "No creds"});
    }
  });

  return serverAuthPromise;
}

function verifyAuth({isServer, cookies, apiUrl, currentLocation}) {
  return new Promise((resolve, reject) => {
    if (isServer) {
      return fetchToken({cookies, apiUrl, currentLocation})
        .then(({user, newHeaders, mustResetPassword, firstTimeLogin}) => {
          return resolve({user, newHeaders, mustResetPassword, firstTimeLogin});
        })
        .catch(({reason, firstTimeLogin, mustResetPassword}) => {
          return reject({reason, firstTimeLogin, mustResetPassword});
        });
    } else {
      Auth.validateToken().then((user) => resolve(user.data), (err) => reject({reason: err}));
    }
  });
}

export default verifyAuth;
