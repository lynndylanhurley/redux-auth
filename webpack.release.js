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
      "browser-cookies": "commonjs browser-cookies",
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
      "lodash": "commonjs lodash",
      "redux-immutablejs": "commonjs redux-immutablejs",
      "react-router": "commonjs react-router",
      "react-router-redux": "commonjs react-router-redux",
      "redux-thunk": "commonjs redux-thunk",
      "thunk": "commonjs thunk",
      "rc-dialog": "commonjs rc-dialog",
      "react-loader": "commonjs react-loader",
      "url": "commonjs url",
      "react-bootstrap": "commonjs react-bootstrap",
      "material-ui/Dialog": "commonjs material-ui/Dialog",
      "material-ui/RaisedButton": "commonjs material-ui/RaisedButton",
      "material-ui/FlatButton": "commonjs material-ui/FlatButton",
      "material-ui/TextField": "commonjs material-ui/TextField",
      "material-ui/styles/colors": "commonjs material-ui/styles/colors",
      "material-ui/styles/MuiThemeProvider": "commonjs material-ui/styles/MuiThemeProvider",
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
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:  {
    loaders: [
      {
        include: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"
      }
    ]
  },
  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules/react")
    },
    modules: [
      "src",
      "node_modules",
      "web_modules"
    ],
    extensions: [".json", ".js"]
  },
  node:    {
    __dirname: true,
    fs:        "empty"
  }
};
