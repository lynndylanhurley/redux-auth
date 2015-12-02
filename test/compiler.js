require("babel-polyfill");

require("babel-register")({
  only: /(src|test)/,
  presets: ["es2015", "react", "stage-0"]
});
