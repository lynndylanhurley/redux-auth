import {getAllParams, normalizeTokenKeys} from "./parse-url";
import * as C from "./constants";
import {getTokenValidationPath, persistData} from "./session-storage";
import {parseResponse} from "./handle-fetch-response";
import fetch from "./fetch";

var settings = "scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no";

function getPopupSize(provider) {
  switch (provider) {
    case "facebook":
      return {width: 580, height: 400};

    case "google":
      return {width: 452, height: 633};

    case "github":
      return {width: 1020, height: 618};

    case "linkedin":
      return {width: 527, height: 582};

    case "twitter":
      return {width: 495, height: 645};

    case "live":
      return {width: 500, height: 560};

    case "yahoo":
      return {width: 559, height: 519};

    default:
      return {width: 1020, height: 618};
  }
}

function getPopupOffset({width, height}) {
  var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
  var wTop = window.screenTop ? window.screenTop : window.screenY;

  var left = wLeft + (window.innerWidth / 2) - (width / 2);
  var top = wTop + (window.innerHeight / 2) - (height / 2);

  return {top, left};
}

function getPopupDimensions(provider) {
  let {width, height} = getPopupSize(provider);
  let {top, left} = getPopupOffset({width, height});

  return `width=${width},height=${height},top=${top},left=${left}`;
}

function listenForCredentials (popup, provider, resolve, reject) {
  if (!resolve) {
    return new Promise((resolve, reject) => {
      listenForCredentials(popup, provider, resolve, reject);
    });

  } else {
    let creds;

    try {
      creds = getAllParams(popup.location);
    } catch (err) {}

    if (creds && creds.uid) {
      popup.close();
      persistData(C.SAVED_CREDS_KEY, normalizeTokenKeys(creds));
      fetch(getTokenValidationPath())
        .then(parseResponse)
        .then(({data}) => resolve(data));
    } else if (popup.closed) {
      reject({errors: "Authentication was cancelled."})
    } else {
      setTimeout(() => {
        listenForCredentials(popup, provider, resolve, reject);
      }, 0);
    }

  }

}

export default function authenticate({provider, url, tab=false}) {
  let name = (tab) ? "_blank" : provider;
  let popup = window.open(url, name, `${settings},${getPopupDimensions(provider)}`);

  return listenForCredentials(popup, provider);
}
