var webpack = require("webpack");
var config = require("./webpack.client.js");

var hostname = process.env.HOSTNAME || "localhost";

config.cache = true;
config.debug = true;
config.devtool = "eval";

config.entry.unshift(
  "webpack-dev-server/client?http://" + hostname + ":8080",
  "webpack/hot/only-dev-server"
);

config.output.publicPath = "http://" + hostname + ":8080/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
  new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.module = {
  loaders: [
    // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
    // loads bootstrap's css.
    { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    { test: /\.scss$/, loader: "style!css!sass" },
    { include: /\.json$/, loaders: ["json-loader"] },
    { include: /\.js$/, loaders: ["react-hot", "babel-loader?stage=0&optional=runtime&plugins=typecheck"], exclude: /node_modules/ }
  ]
};

config.devServer = {
  publicPath:  "http://" + hostname + ":8080/dist/",
  contentBase: "./static",
  hot:         true,
  inline:      true,
  lazy:        false,
  quiet:       true,
  noInfo:      false,
  headers:     {"Access-Control-Allow-Origin": "*"},
  stats:       {colors: true},
  host:        hostname
};

module.exports = config;
