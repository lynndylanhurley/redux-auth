import jsdomify from "jsdomify";

beforeEach(done => {
  // this is necessary for material ui to render
  global.navigator = {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36"
  };

  global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};

  if (typeof(document) !== "undefined") {
    //jsdomify.clear();
    document.body.innerHTML = ""
  } else {
    jsdomify.create();
  }

  if (typeof(window) !== "undefined") {
    window.navigator = global.navigator;
  }


  let {resetConfig} = require("../../src/utils/session-storage");
  resetConfig();

  setTimeout(done, 1);
})
