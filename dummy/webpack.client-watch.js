var webpack = require("webpack");
var config = require("./webpack.client.js");

var hostname = process.env.HOSTNAME || "localhost";

config.cache = true;
config.debug = true;
config.devtool = "eval-sourcemap";

config.entry.unshift(
  "webpack-dev-server/client?http://" + hostname + ":8080"
);

config.output.publicPath = "http://" + hostname + ":8080/dist/";


config.plugins = [
  new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
  new webpack.NoErrorsPlugin()
];


config.devServer = {
  publicPath:  "http://" + hostname + ":8080/dist/",
  contentBase: "./static",
  inline:      true,
  lazy:        false,
  quiet:       true,
  noInfo:      false,
  headers:     {"Access-Control-Allow-Origin": "*"},
  stats:       {colors: true},
  host:        hostname
};

module.exports = config;
