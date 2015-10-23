import originalFetch from "isomorphic-fetch";
import extend from "extend";
import Auth from "j-toker";

var isApiRequest = function(url) {
  return (url.match(Auth.getApiUrl()));
};

function getAuthHeaders(url) {
  console.log("building auth headers");
  if (isApiRequest(url)) {
    // fetch current auth headers from storage
    var currentHeaders = Auth.retrieveData("authHeaders") || {},
        nextHeaders = {};

    // bust IE cache
    nextHeaders['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';

    // set header for each key in `tokenFormat` config
    for (var key in Auth.getConfig().tokenFormat) {
      nextHeaders[key] = currentHeaders[key];
    }

    console.log("@-->next headers", nextHeaders);

    return nextHeaders;
  } else {
    return {};
  }
}

function updateAuthCredentials(resp) {
  console.log("updating auth creds with", resp);
  // check config apiUrl matches the current response url
  if (isApiRequest(resp.url)) {
    // set header for each key in `tokenFormat` config
    var newHeaders = {};

    // set flag to ensure that we don't accidentally nuke the headers
    // if the response tokens aren't sent back from the API
    var blankHeaders = true;

    // set header key + val for each key in `tokenFormat` config
    for (var key in Auth.getConfig().tokenFormat) {
      newHeaders[key] = resp.headers.get(key);

      if (newHeaders[key]) {
        blankHeaders = false;
      }
    }

    // persist headers for next request
    if (!blankHeaders) {
      Auth.persistData("authHeaders", newHeaders);
    }
  }

  return resp;
}

export default function (url, options={}) {
  if (!options.headers) {
    options.headers = {}
  }
  extend(options.headers, getAuthHeaders(url));

  console.log("@-->orig fetch", originalFetch);

  return originalFetch(url, options).then(updateAuthCredentials);
}
