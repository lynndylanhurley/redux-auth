import querystring from "querystring";
import extend from "extend";
import { createLocation } from 'history';

export function normalizeTokenKeys (params) {
  // normalize keys
  if (params.token) {
    params["access-token"] = params.token;
    delete params.token;
  }
  if (params.auth_token) {
    params["access-token"] = params.auth_token;
    delete params.auth_token;
  }
  if (params.client_id) {
    params.client = params.client_id;
    delete params.client_id;
  }
  if (params.config) {
    params.endpointKey = params.config;
    delete params.config;
  }

  return params;
};


const getAnchorSearch = function(location) {
  var rawAnchor = location.anchor || "",
      arr       = rawAnchor.split("?");
  return (arr.length > 1) ? arr[1] : null;
};


const getSearchQs = function(location) {
  var rawQs = location.search || "",
      qs    = rawQs.replace("?", ""),
      qsObj = (qs) ? querystring.parse(qs) : {};

  return qsObj;
};


const getAnchorQs = function(location) {
  var anchorQs    = getAnchorSearch(location),
      anchorQsObj = (anchorQs) ? querystring.parse(anchorQs) : {};

  return anchorQsObj;
};

const stripKeys = function(obj, keys) {
  for (var q in keys) {
    delete obj[keys[q]];
  }

  return obj;
};

export function getAllParams (location) {
  return extend({}, getAnchorQs(location), getSearchQs(location));
};


const buildCredentials = function(location, keys) {
  var params = getAllParams(location);
  var authHeaders = {};

  for (var key of keys) {
    authHeaders[key] = params[key];
  }

  return normalizeTokenKeys(authHeaders);
};


const stripAuthKeysAndNormalize = function(targetString, authKeys) {
  const parsed = querystring.parse(targetString);
  const stripped = stripKeys(parsed, authKeys);
  const stringified = querystring.stringify(stripped);
  return stringified;
};

const normalizeSearch = function(location, authKeys) {
  const newSearch = stripAuthKeysAndNormalize(location.search.replace( '?', '' ), authKeys);
  return newSearch ? `?${newSearch}` : location.search;
};

const normalizeHash = function(location, authKeys) {
  const [hashAnchor, hashSearch] = location.hash.replace('#', '').split('?');
  const newHashSearch = stripAuthKeysAndNormalize(hashSearch, authKeys);
  const newHash = newHashSearch.length > 0 ? [hashAnchor, newHashSearch].join('?') : hashAnchor;
  return newHash.length > 0 ? `#${newHash}` : location.hash;
};

const getLocationWithoutAuthParams = function(currentLocation, authKeys) {
  const location = createLocation(currentLocation);
  location.search = normalizeSearch(location, authKeys);
  location.hash = normalizeHash(location, authKeys);

  return location;
};

export default function getRedirectInfo(currentLocation) {
  if (!currentLocation) {
    return {};
  } else {
    let authKeys = [
      "access-token",
      "token",
      "auth_token",
      "config",
      "client",
      "client_id",
      "expiry",
      "uid",
      "reset_password",
      "account_confirmation_success"
    ];

    var authRedirectHeaders = buildCredentials(currentLocation, authKeys);
    var authRedirectLocation = getLocationWithoutAuthParams(currentLocation, authKeys);

    if (authRedirectLocation !== currentLocation) {
      return {authRedirectHeaders, authRedirectLocation};
    } else {
      return {};
    }
  }
}
