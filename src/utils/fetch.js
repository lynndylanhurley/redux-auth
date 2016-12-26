import originalFetch from "isomorphic-fetch";
import * as C from "./constants";
import extend from "extend";
import {
  getApiUrl,
  retrieveData,
  persistData,
  getTokenFormat,
  getSessionEndpointKey
} from "./session-storage";

var isApiRequest = function(url) {
  return (url.match(getApiUrl(getSessionEndpointKey())));
};

/**
 * Add access token as a bearer token in accordance to RFC 6750
 *
 * @param {string} accessToken
 * @param {object} headers
 * @returns {object} New extended headers object, with Authorization property
 */
export function addAuthorizationHeader(accessToken, headers) {
  return Object.assign({}, headers, {
    Authorization: `Bearer ${accessToken}`
  });
}

function getAuthHeaders(url) {
  if (isApiRequest(url)) {
    // fetch current auth headers from storage
    var currentHeaders = retrieveData(C.SAVED_CREDS_KEY) || {},
        nextHeaders = {};

    // bust IE cache
    nextHeaders["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";

    // set header for each key in `tokenFormat` config
    for (var key in getTokenFormat()) {
      nextHeaders[key] = currentHeaders[key];
    }

    return addAuthorizationHeader(currentHeaders['access-token'], nextHeaders);
  } else {
    return {};
  }
}

function updateAuthCredentials(resp) {
  // check config apiUrl matches the current response url
  if (isApiRequest(resp.url)) {
    // set header for each key in `tokenFormat` config
    var newHeaders = {};

    // set flag to ensure that we don't accidentally nuke the headers
    // if the response tokens aren't sent back from the API
    var blankHeaders = true;

    // set header key + val for each key in `tokenFormat` config
    for (var key in getTokenFormat()) {
      newHeaders[key] = resp.headers.get(key);

      if (newHeaders[key]) {
        blankHeaders = false;
      }
    }

    // persist headers for next request
    if (!blankHeaders) {
      persistData(C.SAVED_CREDS_KEY, newHeaders);
    }
  }

  return resp;
}

function updateAuthCredentialsXhr(xhrReq, url) {
  // check config apiUrl matches the current response url
  if (isApiRequest(url)) {
    // set header for each key in `tokenFormat` config
    var newHeaders = {};

    // set flag to ensure that we don't accidentally nuke the headers
    // if the response tokens aren't sent back from the API
    var blankHeaders = true;

    // set header key + val for each key in `tokenFormat` config
    for (var key in getTokenFormat()) {
      newHeaders[key] = xhrReq.getResponseHeader(key);

      if (newHeaders[key]) {
        blankHeaders = false;
      }
    }

    // persist headers for next request
    if (!blankHeaders) {
      persistData(C.SAVED_CREDS_KEY, newHeaders);
    }
  }

  return xhrReq.response;
}

export default function (url, options={}) {
  if (!options.headers) {
    options.headers = {}
  }
  extend(options.headers, getAuthHeaders(url));
  return originalFetch(url, options)
    .then(resp => updateAuthCredentials(resp));
}

export function xhr(url, options) {
  return extendRequesterXhr(url, xhrRequest, options);
}

function extendRequesterXhr(url, requester, options={}) {
  if (!options.headers) {
    options.headers = {}
  }
  extend(options.headers, getAuthHeaders(url));
  return requester(url, options)
    .then(xhrReq => updateAuthCredentialsXhr(xhrReq, url));
}

function xhrRequest(url, options) {
  return new Promise((resolve, reject) => {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open(options.method, url);
    xhrReq.onload = () => {
      if (xhrReq.status >= 200 && xhrReq.status < 300) {
        resolve(xhrReq);
      } else {
        reject({
          status: xhrReq.status,
          statusText: xhrReq.statusText
        });
      }
    };
    xhrReq.onerror = () => {
      reject({
        status: xhrReq.status,
        statusText: xhrReq.statusText
      });
    };
    if (options.headers) {
      Object.keys(options.headers).forEach((key) => {
        xhrReq.setRequestHeader(key, options.headers[key]);
      });
    }
    let params = options.params;
    if (params && typeof params === 'object' && !params.formData) {
      params = objectToQueryString(params);
    }
    if (options.progress) {
      xhrReq.upload.addEventListener('progress', options.progress, false);
    }
    if (params.formData) {
      params = params.formData;
    }
    xhrReq.send(params);
  });
}

function objectToQueryString(obj) {
  return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}
