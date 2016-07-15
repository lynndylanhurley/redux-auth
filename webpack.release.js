var webpack = require("webpack");
var path = require("path");

module.exports = {
  target:  "web",
  cache:   false,
  context: __dirname,
  devtool: false,
  entry:   {
    "index":             "./src/index",
    "bootstrap-theme":   "./src/views/bootstrap/index",
    "default-theme":     "./src/views/default/index",
    "material-ui-theme": "./src/views/material-ui/index"
  },
  output:  {
    path:          path.join(__dirname),
    filename:      "[name].js",
    libraryTarget: "commonjs"
  },
  externals: [
    function(rtx, req, cb) {
      if (/\.\.\/\.\.\//.test(req)) {
        return cb(null, "commonjs redux-auth");
      } else {
        cb();
      }
    }, {
      "react": "commonjs react",
      "classnames": "commonjs classnames",
      "cookies-js": "commonjs cookies-js",
      "cookie": "commonjs cookie",
      "extend": "commonjs extend",
      "history": "commonjs history",
      "immutable": "commonjs immutable",
      "isomorphic-fetch": "commonjs isomorphic-fetch",
      "query-string": "commonjs query-string",
      "querystring": "commonjs querystring",
      "react-dom": "commonjs react-dom",
      "react-redux": "commonjs react-redux",
      "redux": "commonjs redux",
      "redux-immutablejs": "commonjs redux-immutablejs",
      "react-router": "commonjs react-router",
      "react-router-redux": "commonjs react-router-redux",
      "redux-thunk": "commonjs redux-thunk",
      "thunk": "commonjs thunk",
      "rc-dialog": "commonjs rc-dialog",
      "react-loader": "commonjs react-loader",
      "url": "commonjs url",
      "react-bootstrap": "commonjs react-bootstrap",
      "material-ui": "commonjs material-ui",
      "material-ui/styles/colors": "commonjs material-ui/styles/colors",
      "material-ui/svg-icons/action/exit-to-app": "commonjs material-ui/svg-icons/action/exit-to-app",
      "material-ui/svg-icons/action/favorite": "commonjs material-ui/svg-icons/action/favorite",
      "material-ui/svg-icons/action/delete": "commonjs material-ui/svg-icons/action/delete",
      "material-ui/svg-icons/content/send": "commonjs material-ui/svg-icons/content/send",
      "material-ui/svg-icons/action/lock": "commonjs material-ui/svg-icons/action/lock",
      "material-ui/svg-icons/alert/error": "commonjs material-ui/svg-icons/alert/error"
    }
  ],
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: "\"production\""}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:  {
    loaders: [
      { include: /\.json$/, loaders: ["json"] },
      { include: /\.js$/, loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"], exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules/react")
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
