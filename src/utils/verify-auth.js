import fetch from "isomorphic-fetch";
import cookie from "cookie";
import getRedirectInfo from "../utils/parse-url";
import * as C from "../utils/constants";
import { addAuthorizationHeader } from "../utils/fetch";
import parseEndpointConfig from "./parse-endpoint-config";
import url from "url";

function parseHeaders (headers) {
  // set header for each key in `tokenFormat` config
  var newHeaders = {};

  // set flag to ensure that we don't accidentally nuke the headers
  // if the response tokens aren't sent back from the API
  var blankHeaders = true;

  // set header key + val for each key in `tokenFormat` config
  // TODO: get actual config value
  for (var key of ["access-token", "token-type", "client", "expiry", "uid", "config", "endpointKey"]) {
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


export function fetchToken({rawEndpoints, cookies, currentLocation}) {
  let {authRedirectHeaders} = getRedirectInfo(url.parse(currentLocation));

  return new Promise((resolve, reject) => {
    if (cookies || authRedirectHeaders) {
      let rawCookies = cookie.parse(cookies || "{}");
      let parsedCookies = JSON.parse(rawCookies.authHeaders || "false");
      let firstTimeLogin,
          mustResetPassword,
          currentEndpointKey,
          headers;

      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
        headers            = parseHeaders(authRedirectHeaders);
        currentEndpointKey = authRedirectHeaders.endpointKey || null;
        mustResetPassword  = JSON.parse(authRedirectHeaders.reset_password || "false");
        firstTimeLogin     = JSON.parse(authRedirectHeaders.account_confirmation_success || "false");
      } else if (rawCookies && parsedCookies) {
        headers            = parsedCookies;
        currentEndpointKey = JSON.parse(rawCookies[C.SAVED_CONFIG_KEY] || "null");
        mustResetPassword  = JSON.parse(parsedCookies.mustResetPassword || "false");
        firstTimeLogin     = JSON.parse(parsedCookies.firstTimeLogin || "false");
      }

      if (!headers) {
        return reject({
          reason: "No creds",
          currentEndpoint,
          defaultEndpointKey
        });
      }

      var newHeaders,
          {currentEndpoint, defaultEndpointKey} = parseEndpointConfig(rawEndpoints),
          {apiUrl, tokenValidationPath} = currentEndpoint[currentEndpointKey || defaultEndpointKey],
          validationUrl = `${apiUrl}${tokenValidationPath}?unbatch=true`;

      return fetch(validationUrl, {
        headers: addAuthorizationHeader(headers['access-token'], headers)
      }).then((resp) => {
        newHeaders = parseHeaders(resp.headers.raw());
        return resp.json();
      })
      .then((json) => {
        if (json.success) {
          return resolve({
            headers: newHeaders,
            user: json.data,
            mustResetPassword,
            firstTimeLogin,
            currentEndpoint,
            currentEndpointKey,
            defaultEndpointKey
          });
        } else {
          return reject({
            reason: json.errors,
            mustResetPassword,
            firstTimeLogin,
            currentEndpoint,
            defaultEndpointKey
          });
        }
      }).catch(reason => {
        return reject({
          reason,
          firstTimeLogin,
          mustResetPassword,
          currentEndpoint,
          defaultEndpointKey
        });
      });
    } else {
      let {currentEndpoint, defaultEndpointKey} = parseEndpointConfig(rawEndpoints);
      reject({
        reason: "No creds",
        currentEndpoint,
        defaultEndpointKey
      });
    }
  });
}

function verifyAuth(rawEndpoints, {isServer, cookies, currentLocation}) {
  return new Promise((resolve, reject) => {
    if (isServer) {
      return fetchToken({rawEndpoints, cookies, currentLocation})
        .then(res => resolve(res))
        .catch(res => reject(res));
    } else {
      // TODO: deal with localStorage
      //Auth.validateToken(getCurrentEndpointKey())
        //.then((user) => resolve(user.data), (err) => reject({reason: err}));
    }
  });
}

export default verifyAuth;
