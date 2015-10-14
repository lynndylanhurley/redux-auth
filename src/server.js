import React from "react";
import {Server} from "hapi";
import h2o2 from "h2o2";
import inert from "inert";
import {renderToString} from "react-dom/server";
import {match} from "redux-router/server";
import url from "url";
import qs from "query-string";
import {initialize} from "./app";

var hostname = process.env.HOSTNAME || "localhost";

/**
 * template
 */

function getMarkup(webserver, provider) {
  var markup = renderToString(provider),
      styles = "";

  if (process.env.NODE_ENV === "production") {
    styles = `<link href="${webserver}/dist/main.css" rel="stylesheet"></link>`;
  }

  return `<!doctype html>
          <html>
            <head>
              <title>Redux Auth – Isomorphic Example</title>
              ${styles}
            </head>
            <body>
              <div id="react-root">${markup}</div>
              <script src="${webserver}/dist/client.js"></script>
            </body>
          </html>`;
}

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();

server.connection({host: hostname, port: process.env.PORT || 8000});

server.register([
  h2o2,
  inert
], function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    console.info("==> ✅  Server is listening");
    console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
  });
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
  method:  "GET",
  path:    "/{params*}",
  handler: {
    file: (request) => "static" + request.path
  }
});

/**
 * Endpoint that proxies all GitHub API requests to https://api.github.com.
 */
server.route({
  method: "GET",
  path: "/api/github/{path*}",
  handler: {
    proxy: {
      passThrough: true,
      mapUri (request, callback) {
        callback(null, url.format({
          protocol: "https",
          host:     "api.github.com",
          pathname: request.params.path,
          query:    request.query
        }));
      },
      onResponse (err, res, request, reply, settings, ttl) {
        reply(res);
      }
    }
  }
});

/**
 * Catch dynamic requests here to fire-up React Router.
 */
server.ext("onPreResponse", (request, reply) => {
  if (typeof request.response.statusCode !== "undefined") {
    return reply.continue();
  }

  var query    = qs.stringify(request.query);
  var location = request.path + (query.length ? "?" + query : "");

  initialize({
    isServer: true,
    cookies: request.headers.cookie
  })
    .then(({store, provider}) => {
      store.dispatch(match(location, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          reply.redirect(redirectLocation.pathname + redirectLocation.search);
        }
        else if (error || !renderProps) {
          reply.continue();
        } else {
          var webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";
          var output = getMarkup(webserver, provider);
          reply(output);
        }
      }));
    });
});
