import React from "react";
import {Server} from "hapi";
import h2o2 from "h2o2";
import inert from "inert";
import {renderToString} from "react-dom/server";
import {match} from "redux-router/server";
import url from "url";
import qs from "query-string";
import {initialize} from "./app";
import config from "config";

var hostname = process.env.HOSTNAME || "localhost";
global.__API_URL__ = config.get("apiUrl");

/**
 * base html template
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
              <script>
                window.__API_URL__ = "${global.__API_URL__}";
              </script>
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
    cookies: request.headers.cookie,
    currentLocation: location,
    userAgent: request.headers["user-agent"]
  })
    .then(({store, provider, blank}) => {
      store.dispatch(match(location, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          reply.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (error || !renderProps) {
          reply.continue();
        } else {
          var webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";
          var output = (blank) ? "" : getMarkup(webserver, provider);

          reply(output);
        }
      }));
    }).catch(e => console.log("@-->server error", e, e.stack));
});
