var webpack = require("webpack");
var path = require("path");

module.exports = {
  target:  "web",
  cache:   false,
  context: __dirname,
  devtool: false,
  entry:   {
    "index":       "./src/index",
    "bootstrap":   "./src/bootstrap",
    "material-ui": "./src/material-ui"
  },
  output:  {
    path:          path.join(__dirname, "release"),
    filename:      "[name].js"
  },
  externals: {
    "react": "react",
    "classnames": "classnames",
    "js-cookie": "js-cookie",
    "cookie": "cookie",
    "extend": "extend",
    "history": "history",
    "immutable": "immutable",
    "isomorphic-fetch": "isomorphic-fetch",
    "node-fetch": "node-fetch",
    "query-string": "query-string",
    "querystring": "querystring",
    "react-bootstrap": "react-bootstrap",
    "react-dom": "react-dom",
    "react-redux": "react-redux",
    "redux": "redux",
    "redux-immutablejs": "redux-immutablejs",
    "react-router": "react-router",
    "redux-router": "redux-router",
    "redux-thunk": "redux-thunk",
    "thunk": "thunk",
    "rc-dialog": "rc-dialog",
    "react-loader": "react-loader",
    "url": "url",
    "react-bootstrap": "react-bootstrap",
    "material-ui": "material-ui",
    "material-ui/lib/styles/colors": "material-ui/lib/styles/colors",
    "material-ui/lib/svg-icons": "material-ui/lib/styles/colors",
    "../../../actions/ui":                    "./index",
    "../../actions/destroy-account":          "./index",
    "../../actions/email-sign-in":            "./index",
    "../../actions/email-sign-up":            "./index",
    "../../actions/oauth-sign-in":            "./index",
    "../../actions/request-password-reset":   "./index",
    "../../actions/sign-out":                 "./index",
    "../../actions/update-password":          "./index",
    "../../../actions/update-password-modal": "./index"
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: "\"production\""}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module:  {
    loaders: [
      { include: /\.json$/, loaders: ["json"] },
      { include: /\.js$/, loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"], exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules/react"),
      "redux-auth": "src/index"
    },
    modulesDirectories: [
      "src",
      "node_modules",
      "web_modules"
    ],
    extensions: ["", ".json", ".js"]
  },
  node:    {
    __dirname: true,
    fs:        "empty"
  }
};
