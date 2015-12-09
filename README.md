# Redux Auth

### Simple, secure user authentication for react + redux

[![Build Status](https://travis-ci.org/lynndylanhurley/redux-auth.svg)](https://travis-ci.org/lynndylanhurley/redux-auth)

### Features:

* Supports isomorphic / universal / server-side rendering
* OAuth2 authentication
* Email authentication, including:
	* User registration
	* Password resets
	* Account updates
	* Account deletion
* Seamless integration with the [devise token auth][dta] Rails gem.
* Includes the following themes:
	* [React Bootstrap][react-bootstrap]
	* [Material UI][material-ui]
	* A plain theme that you can style from scratch
* Can be configured to work with any API *coming soon*
* React Native support *coming soon*


This project comes bundled with a test app. You can run the demo locally by following these instructions, or you can use it [here][j-toker-demo] in production.

The demo uses [React][react], and the source can be found [here](https://github.com/lynndylanhurley/j-toker/tree/master/demo/src).

---

# Table of Contents

* [About this plugin](#about-this-plugin)
* [Installation](#installation)
* [Configuration](#configuration)
* [Methods](#methods)
  * [fetch](#fetch)
* [Components](#components)
  * [EmailSignUpForm](#emailsignupform)
  * [EmailSignInForm](#emailsigninform)
  * [OAuthSignInForm](#oauthsigninform)
  * [SignOutButton](#signoutbutton)
  * [DestroyAccountButton](#destroyaccountbutton)
  * [RequestPasswordResetForm](#requestpasswordresetform)
  * [UpdatePasswordForm](#updatepasswordform)
  * [AuthGlobals](#authglobals)
* [Using multiple user types](#multiple-user-types)
* [Conceptual diagrams](#conceptual)
  * [OAuth2 Authentication](#oauth2-signin)
  * [Email Registration](#email-registration)
  * [Email Sign In](#email-sign-in)
  * [Password Reset Requests](#password-reset)
* [Notes on Token Management](#token-management)
* [Notes on Batch Requests](#batch-requests)
* [Token Formatting](#identifying-users-on-the-server)
* [Contributing](#contributing)
* [Development](#development)
* [Callouts](#credits)



# About this plugin

This plugin relies on [token based authentication][token-auth-wiki]. This requires coordination between the client and the server. [Diagrams](#conceptual) are included to illustrate this relationship.

This plugin was designed to work out of the box with the wonderful [devise token auth][dta] gem, but it's flexible enough to be used in just about any environment.

**About security**: [read here][so-post] for more information on securing your token auth system. The [devise token auth][dta] gem has adequate security measures in place, and this plugin was built to work seamlessly with that gem.

# Installation

Only npm is currently supported.

~~~sh
npm install redux-auth --save
~~~

# Configuration

This is the most difficult step, but only because configuring a [redux][redux] app is inherently difficult.

The following example assumes that you are familiar with redux, and that you know how to [create a store][redux-create-store]. Also keep in mind that this is a really basic example that does not even include routing. See the [demo app][redux-auth-demo] for a more complete example.

This example assumes a directory structure that looks like this:

~~~
src/
  app.js
  client.js
  server.js
~~~

##### config shared by both client and server
~~~js
// app.js
import React from "react";
import {Provider} from "react-redux";
import {configure, authStateReducer, AuthGlobals} from "redux-auth";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {AuthGlobals} from "redux-auth"

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthGlobals />
        {this.props.children}
      </div>
    );
  }
}

// create your main reducer
const reducer = combineReducers({
  auth: authStateReducer,
  // ... add your own reducers here
});

// create your app's store.
// note that thunk is required to use redux-auth
const store = compose(
  applyMiddleware(thunk),
  // ... add additional middleware here (router, etc.)
)(createStore)(reducer);

// a single function can be used for both client and server-side rendering.
// when run from the server, this function will need to know the cookies and
// url of the current request. also be sure to set `isServer` to true.
export function renderApp({cookies, isServer, currentLocation} = {}) {
  // configure redux-auth BEFORE rendering the page
  store.dispatch(configure(
    // use the FULL PATH to your API
    {apiUrl: "http://api.catfancy.com"},
    {isServer, cookies, currentLocation}
  ).then({redirectPath, blank} = {}) => {
    // the `redirectPath` argument provided to this callback is used in cases
    // where auth credentials have been appended to the header (email
    // confirmation, etc.). you will want to use your routing framework
    // (redux-router, redux-simple-router, etc.) to redirect to this path.
    // see the demo app for an example of this.

    // the `blank` argument is used when returning from OAuth redirects, in
    // which case the page will be a popup that should be immediately closed.

    if (blank) {
      return <noscript />;
    } else {
      return (
        <Provider store={store} key="provider">
          <App />
        </Provider>
      );
    }
  });
}
~~~

##### server-side rendering
~~~js
// server.js
import qs from "query-string";
import {renderToString} from "react-dom/server";
import { renderApp } from "./app";

// render the main app component into an html page
function getMarkup(appComponent) {
  var markup = renderToString(appComponent)

  return `<!doctype html>
          <html>
            <head>
              <title>Redux Auth – Isomorphic Example</title>
            </head>
            <body>
              <div id="react-root">${markup}</div>
              <script src="/path/to/my/scripts.js"></script>
            </body>
          </html>`;
}

// this function will differ depending on the serverside framework that
// you decide to use (express, hapi, etc.). The following example uses hapi
server.ext("onPreResponse", (request, reply) => {
  var query = qs.stringify(request.query);
  var currentLocation = request.path + (query.length ? "?" + query : "");
  var cookies = request.headers.cookies;

  renderApp({
    isServer: true,
    cookies,
    currentLocation
  }).then(appComponent => {
    reply(getMarkup(appComponent));
  });
}
~~~

##### client side rendering

~~~js
import React from "react";
import ReactDOM from "react-dom";
import { renderApp } from "./app";

const reactRoot = window.document.getElementById("react-root");
renderApp().then(appComponent => {
  ReactDOM.render(appComponent, reactRoot);
});
~~~

**Note:** be sure to include the [`AuthGlobals`](#authglobals) component at the top level of your application. This means **outside** of your `Routes` if you're using something like [react-router][react-router].

See below for the complete list of configuration options.

# Usage

## Methods

### fetch
A wrapper around the [whatwg fetch][whatwg-fetch] implementation that automatically sends and tracks authentication headers. See [here][fetch-spec] for the complete spec.

Any requests to the API that rely on authentication will need to use the `fetch` function included in this library.

###### Example

~~~js
import { fetch } from "redux-auth";

// usage
fetch("http://api.mysite.com").then(resp => {
  alert(`Api response: `${resp}`);
});
~~~

## Components

There are 3 Themes included in this module.

1. [Material UI][material-ui]
2. [Bootstrap][react-bootstrap]
3. A default theme

The default theme has no styling, and honestly it just looks really bad. But if you don't like heavy UI frameworks and you like to style everything yourself, then you will enjoy the default theme.

All components are already set up to make their own requests, handle errors, and display success messages.

Here is an example error dialog using the Material UI theme:

![Material UI error dialog][mui-error-dialog]

Here is an example of inline form errors in the Material UI theme:

![Material UI inline errors][mui-inline-errors]


### EmailSignUpForm

A form used for email based registration.

##### EmailSignUpForm props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block.
* **`inputProps`**: An object containing the following attributes:
	* **`email`**: An object that will override the email input component's default props.
	* **`password`**: An object that will override the password input component's default props.
	* **`passwordConfirmation`**: An object that will override the password confirmation input component's default props.
	* **`submit`**: An object that will override the submit button component's default props.

##### EmailSignUpForm usage

~~~js
// default theme
import { EmailSignUpForm } from "redux-auth";

// material ui theme
import { EmailSignUpForm } from "redux-auth/views/material-ui";

// bootstrap theme
import { EmailSignUpForm } from "redux-auth/views/bootstrap";

// render
render: () {
  return <EmailSignUpForm />;
}
~~~

##### EmailSignUpForm example

Material Ui:

![Material UI email sign up][mui-email-sign-up]

Bootstrap:

![Bootstrap email sign up][bs-email-sign-up]

Default:

![Default email sign up][default-email-sign-up]

### EmailSignInForm

A form used to sign in using accounts that were registered by email.

##### EmailSignInForm props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block.
* **`inputProps`**: An object containing the following attributes:
	* **`email`**: An object that will override the email input component's default props.
	* **`password`**: An object that will override the password input component's default props.
	* **`submit`**: An object that will override the submit button component's default props.

~~~js
// default theme
import { EmailSignInForm } from "redux-auth";

// material ui theme
import { EmailSignInForm } from "redux-auth/views/material-ui";

// bootstrap theme
import { EmailSignInForm } from "redux-auth/views/bootstrap";

// render
render: () {
  return <EmailSignInForm />;
}
~~~

##### EmailSignInForm example

Material Ui:

![Material UI email sign in][mui-email-sign-in]

Bootstrap:

![Bootstrap email sign in][bs-email-sign-in]

Default:

![Default email sign in][default-email-sign-in]

### OAuthSignInButton

A button used to authenticate using an OAuth provider (facebook, github, etc.).

##### OAuthSignInButton props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block.
* **`provider`**: The name of the target provider service as represented in the `authProviderPaths` endpoint configuration.

Any additional properties will be passed on the button component of the given theme.

~~~js
// default theme
import { OAuthSignInButton } from "redux-auth";

// material ui theme
import { OAuthSignInButton } from "redux-auth/views/material-ui";

// bootstrap theme
import { OAuthSignInButton } from "redux-auth/views/bootstrap";

// render
render: () {
  // using the default label
  return <OAuthSignInButton />;

  // or using custom label text
  return <OAuthSignInButton>Custom Label</OAuthSignInButton>;
}
~~~

##### OAuthSignInButton example

Material Ui:

![Material UI OAuth sign in][mui-oauth-sign-in]

Bootstrap:

![Bootstrap OAuth sign in][bs-oauth-sign-in]

Default:

![Default OAuth sign in][default-oauth-sign-in]

### SignOutButton

A button used to end the current user's session.

##### SignOutButton props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block. If this property isn't provided, the current signed in user will be signed out regardless of their user type.

Any additional properties will be passed on the button component of the given theme.

~~~js
// default theme
import { SignOutButton } from "redux-auth";

// material ui theme
import { SignOutButton } from "redux-auth/views/material-ui";

// bootstrap theme
import { SignOutButton } from "redux-auth/views/bootstrap";

// render
render: () {
  // using the default label
  return <SignOutButton />;

  // or using custom label text
  return <SignOutButton>Custom Label</SignOutButton>;
}
~~~

##### SignOutButton example

Material Ui:

![Material UI sign out][mui-sign-out]

Bootstrap:

![Bootstrap OAuth sign in][bs-oauth-sign-in]

Default:

![Default OAuth sign in][default-sign-out]

### DestroyAccountButton

A button used to destroy the account of the current user. This will also end the destroyed user's session.

##### DestroyAccountButton props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block. If this property isn't provided, the current signed in user's account will be destroyed regardless of their user type.

Any additional properties will be passed on the button component of the given theme.

~~~js
// default theme
import { DestroyAccountButton } from "redux-auth";

// material ui theme
import { DestroyAccountButton } from "redux-auth/views/material-ui";

// bootstrap theme
import { DestroyAccountButton } from "redux-auth/views/bootstrap";

// render
render: () {
  // using the default label
  return <DestroyAccountButton />;

  // or using custom label text
  return <DestroyAccountButton>Custom Label</DestroyAccountButton>;
}
~~~

##### DestroyAccountButton example

Material Ui:

![Material UI destroy account][mui-destroy-account]

Bootstrap:

![Bootstrap destroy account][bs-destroy-account]

Default:

![Default destroy account][default-destroy-account]

### RequestPasswordResetForm

A form used to send password reset emails to users that forgot their password. When users click the link included in the email, they will be redirected to the site that the request was made from. A modal will appear that contains a form allowing the user to create a new password.

##### RequestPasswordResetForm props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block.
* **`inputProps`**: An object containing the following attributes:
	* **`email`**: An object that will override the email input component's default props.
	* **`submit`**: An object that will override the submit button component's default props.

~~~js
// default theme
import { RequestPasswordResetForm } from "redux-auth";

// material ui theme
import { RequestPasswordResetForm } from "redux-auth/views/material-ui";

// bootstrap theme
import { RequestPasswordResetForm } from "redux-auth/views/bootstrap";

// render
render: () {
  return <RequestPassswordResetForm />;
}
~~~

##### RequestPasswordResetForm example

Material Ui:

![Material UI request password reset][mui-password-reset]

Bootstrap:

![Bootstrap request password reset][bs-password-reset]

Default:

![Default request password reset][default-password-reset]

### UpdatePasswordForm

A form that can be used to change the current user's password.

##### UpdatePasswordForm props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block. If this value is not provided, the current user's password will be updated regardless of their user type.
* **`inputProps`**: An object containing the following attributes:
	* **`password`**: An object that will override the password input component's default props.
	* **`passwordConfirmation`**: An object that will override the password confirmation input component's default props.
	* **`submit`**: An object that will override the submit button component's default props.

~~~js
// default theme
import { UpdatePasswordForm } from "redux-auth";

// material ui theme
import { UpdatePasswordForm } from "redux-auth/views/material-ui";

// bootstrap theme
import { UpdatePasswordForm } from "redux-auth/views/bootstrap";

// render
render: () {
  return <UpdatePasswordForm />;
}
~~~

##### UpdatePasswordForm example

Material Ui:

![Material UI update password][mui-update-password]

Bootstrap:

![Bootstrap update password][bs-update-password]

Default:

![Default update-password][default-update-password]

### AuthGlobals

This component contains all of the modals used in authentication, and also the component that is used to pass credentials from the server to the client when using server side rendering.

This component **MUST** live at the top level of your application **outside of your routes**.

##### AuthGlobals example using redux-router

The following example shows the relevant router configuration. Note that this is not a complete example. See the [demo app][redux-auth-demo] for a complete, working setup.

~~~js
// default theme
import { AuthGlobals } from "redux-auth";

// material ui theme
import { AuthGlobals } from "redux-auth/views/material-ui";

// bootstrap theme
import { AuthGlobals } from "redux-auth/views/bootstrap";

// your main app component. notice that AuthGlobals lives at the same level
// as the app's children.
class App extends React.Component {
  render() {
    return (
      <div>
        <AuthGlobals />
        {this.props.children}
      </div>
    );
  }
}

// example routes. the nested routes here will replace "this.props.children"
// in the example above
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="alt" component={Alt} />
    <Route path="login" component={SignIn} />
    <Route path="account" component={Account} onEnter={requireAuth} />
  </Route>
);
~~~



# Multiple user types

This plugin allows for the use of multiple user authentication endpoint configurations. The following example assumes that the API supports two user classes, `User` and `EvilUser`. The following examples assume that `User` authentication routes are mounted at `/auth,` and the `EvilUser` authentication routes are mounted at `evil_user_auth`.

### Multiple user type configuration

When using a single user type, you will pass a single object to the `configure` method as shown in the following example.

~~~js
store.dispatch(configure({
  apiUrl: 'https://devise-token-auth.dev'
}));
~~~

When using multiple user types, you will instead pass an array of configurations, as shown in the following example.

~~~javascript
store.dispatch(configure([
  {
    default: {
      apiUrl: 'https://devise-token-auth.dev'
    }
  }, {
    evilUser: {
      apiUrl:                  'https://devise-token-auth.dev',
      signOutUrl:              '/evil_user_auth/sign_out',
      emailSignInPath:         '/evil_user_auth/sign_in',
      emailRegistrationPath:   '/evil_user_auth',
      accountUpdatePath:       '/evil_user_auth',
      accountDeletePath:       '/evil_user_auth',
      passwordResetPath:       '/evil_user_auth/password',
      passwordUpdatePath:      '/evil_user_auth/password',
      tokenValidationPath:     '/evil_user_auth/validate_token',
      authProviderPaths: {
        github:    '/evil_user_auth/github',
        facebook:  '/evil_user_auth/facebook',
        google:    '/evil_user_auth/google_oauth2'
      }
    }
  }
], {
  isServer,
  cookies,
  currentLocation
));
~~~

### Using multiple endpoints with redux-auth components

All components accept an `endpoint` attribute that will determine which of the endpoint configurations the component should use. For forms that are used by non-authenticated users users (`EmailSignInForm`, `OAuthSignInButton`, etc.), the first configuration in the endpoint config will be used as the default if this value is not provided. For forms used by authenticated users (`SignOutButton`, `UpdatePassword`, etc.), the current user's endpoint will be used by default if this value is not provided.

The following example assumes a configuration where two endpoints have been defined, `default` and `auth`:

##### Component example:
~~~js
import { EmailSignInForm } from "redux-auth";

// within render method
<EmailSignInForm endpoint="alt" />
~~~


# Conceptual

The following diagrams illustrate the authentication processes used by this plugin.

## OAuth2 Sign In

The following diagram illustrates the steps necessary to authenticate a client using an oauth2 provider.

![OAuth2 Flow][o-auth-flow]

When authenticating with a 3rd party provider, the following steps will take place.

1. An popup window will be opened to the provider's authentication page.
2. Once the user signs in, they will be redirected back to the API at the callback uri that was registered with the oauth2 provider.
3. The API will redirect the user back to the client with the auth credentials appended to the URL. The original client window will read these credentials and close the popup.

The popup redirect url must include the following querystring parameters:

* `message` - this must contain the value "deliverCredentials"
* `auth-token` - a unique token set by your server.
* `uid` - the id that was returned by the provider. For example, the user's facebook id, twitter id, etc.

## Email registration

This plugin also provides support for email registration. The following diagram illustrates this process.

![Email registration][email-registration-flow]

## Email sign in

![Email authentication][email-sign-in-flow]

## Password reset

The password reset flow is similar to the email registration flow.

![Password reset][password-reset-flow]

When the user visits the link contained in the resulting email, they will be authenticated for a single session. An event will be broadcast that can be used to prompt the user to update their password. See the `auth.passwordResetConfirm.success` event for details.

## Token management

Tokens should be invalidated after each request to the API. The following diagram illustrates this concept:

![Token handling][token-handling-diagram]

During each request, a new token is generated. The `access-token` header that should be used in the next request is returned in the `access-token` header of the response to the previous request. The last request in the diagram fails because it tries to use a token that was invalidated by the previous request.

The benefit of this measure is that if a user's token is compromised, the user will immediately be forced to re-authenticate. This will invalidate the token that is now in use by the attacker.

The only case where an expired token is allowed is during [batch requests](#batch-requests).

Token management is handled by default when using this plugin with the [devise token auth][dta] gem.

## Batch requests

By default, the API should update the auth token for each request ([read more](#token-management). But sometimes it's neccessary to make several concurrent requests to the API, for example:

##### Example batch request

~~~javascript
$.getJSON('/api/restricted_resource_1').success(function(resp) {
  // handle response
});

$.getJSON('/api/restricted_resource_2').success(function(resp) {
  // handle response
});
~~~

In this case, it's impossible to update the `access-token` header for the second request with the `access-token` header of the first response because the second request will begin before the first one is complete. The server must allow these batches of concurrent requests to share the same auth token. This diagram illustrates how batch requests are identified by the server:

![Batch request overview][batch-request-a]

The "5 second" buffer in the diagram is the default used by the [devise token auth][dta] gem.

The following diagram details the relationship between the client, server, and access tokens used over time when dealing with batch requests:

![Batch request overview cont][batch-request-b]

Note that when the server identifies that a request is part of a batch request, the user's auth token is not updated. The auth token will be updated for the first request in the batch, and then that same token will be returned in the responses for each subsequent request in the batch (as shown in the diagram).

The [devise token auth][dta] gem automatically manages batch requests, and it provides settings to fine-tune how batch request groups are identified.

## Identifying users on the server.

The user's authentication information is included by the client in the `access-token` header of each request. If you're using the [devise token auth](https://github.com/lynndylanhurley/devise_token_auth) gem, the header must follow the [RFC 6750 Bearer Token](http://tools.ietf.org/html/rfc6750) format:

~~~
"access-token": "wwwww",
"token-type":   "Bearer",
"client":       "xxxxx",
"expiry":       "yyyyy",
"uid":          "zzzzz"
~~~

Replace `xxxxx` with the user's `auth_token` and `zzzzz` with the user's `uid`. The `client` field exists to allow for multiple simultaneous sessions per user. The `client` field defaults to `default` if omitted. `expiry` is used by the client to invalidate expired tokens without making an API request. A more in depth explanation of these values is [here](https://github.com/lynndylanhurley/devise_token_auth#identifying-users-in-controllers).

This will all happen automatically when using this plugin.

**Note**: You can customize the auth headers however you like. [Read more](#using-alternate-header-formats).

---

# Contributing

1. Create a feature branch with your changes.
1. Write some test cases.
1. Make all the tests pass.
1. Issue a pull request.

I will grant you commit access if you send quality pull requests.

# Development

### Running the dev server

There is a test project in the `demo` directory of this app. To start a dev server, perform the following steps.

1. `cd` to the root of this project.
1. `cd dummy`
1. `npm install`
1. `npm run watch`

A hot-reloading dev server will start on [localhost:8000](http://localhost:8000). The test suite will be run as well.

### Running the tests

If you just want to run the tests, follow these steps:

1. `cd` into the root of this project
1. `npm install`
1. `npm test`

### Testing against a live API

This plugin was built against [this API](https://github.com/lynndylanhurley/devise_token_auth_demo). You can use this, or feel free to use your own.

# Credits

Thanks to the following contributors:

* [@transedward](https://github.com/transedward) for letting me use the name `redux-auth`.

Code and ideas were stolen from the following sources:

* [this SO post on token-auth security][so-post]
* [this SO post on string templating](http://stackoverflow.com/questions/14879866/javascript-templating-function-replace-string-and-dont-take-care-of-whitespace)
* [this brilliant AngularJS module][ng-token-auth]



# License

WTFPL © Lynn Dylan Hurley

[ng-token-auth]: https://github.com/lynndylanhurley/ng-token-auth
[dta]: https://github.com/lynndylanhurley/devise_token_auth
[token-auth-wiki]: http://stackoverflow.com/questions/1592534/what-is-token-based-authentication
[so-post]: http://stackoverflow.com/questions/18605294/is-devises-token-authenticatable-secure
[jquery]: https://jquery.com/
[jquery-cookie]: https://github.com/carhartl/jquery-cookie
[jquery-deparam]: https://www.npmjs.com/package/jquery-deparam
[pubsub-js]: https://github.com/mroderick/PubSubJS
[bower]: http://bower.io/
[npm]: https://www.npmjs.com/
[browserify]: http://browserify.org/
[cors]: http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[common-js]: http://en.wikipedia.org/wiki/CommonJS
[dfd]: https://api.jquery.com/jQuery.Deferred/
[angular]: https://angularjs.org/
[react]: http://facebook.github.io/react/
[j-toker-demo]: http://j-toker-demo.herokuapp.com/#/
[multi-user-demo]: http://j-toker-demo.herokuapp.com/#/alt-user
[react-bootstrap]: https://react-bootstrap.github.io/
[material-ui]: http://www.material-ui.com
[redux]: http://rackt.org/redux/index.html
[redux-create-store]: http://rackt.org/redux/docs/basics/Store.html
[react-router]: https://github.com/rackt/react-router
[redux-auth-demo]: http://github.com/lynndylanhurley/redux-auth-demo
[whatwg-fetch]: https://github.com/github/fetch
[fetch-spec]: https://fetch.spec.whatwg.org/

[o-auth-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/omniauth-flow.jpg
[token-validation-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/validation-flow.jpg
[email-registration-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/email-registration-flow.jpg
[email-sign-in-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/email-sign-in-flow.jpg
[password-reset-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/password-reset-flow.jpg
[token-handling-diagram]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/token-update-detail.jpg
[batch-request-a]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/batch-request-overview.jpg
[batch-request-b]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/batch-request-detail.jpg
[logo]: https://github.com/lynndylanhurley/j-toker/raw/master/demo/src/images/j-toker-logo.gif

[bs-destroy-account]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-destroy-account.png
[bs-email-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-email-sign-in.png
[bs-email-sign-up]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-email-sign-up.png
[bs-oauth-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-oauth-sign-in.png
[bs-password-reset]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-password-reset.png
[bs-update-password]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-update-password.png
[bs-sign-out]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/bs-sign-out.png

[mui-destroy-account]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-destroy-account.png
[mui-email-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-email-sign-in.png
[mui-email-sign-up]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-email-sign-up.png
[mui-oauth-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-oauth-sign-in.png
[mui-password-reset]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-password-reset.png
[mui-update-password]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-update-password.png
[mui-sign-out]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-sign-out.png

[default-destroy-account]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-destroy-account.png
[default-email-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-email-sign-in.png
[default-email-sign-up]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-email-sign-up.png
[default-oauth-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-oauth-sign-in.png
[default-password-reset]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-password-reset.png
[default-update-password]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-update-password.png
[default-sign-out]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/default-sign-out.png

[mui-error-dialog]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-error-dialog.png
[mui-inline-errors]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-inline-errors.png
