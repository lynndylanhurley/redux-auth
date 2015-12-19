[![redux auth](https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/redux-auth-logo.gif)](https://github.com/lynndylanhurley/redux-auth)

### Simple, secure authentication for react + redux

[![npm version](https://badge.fury.io/js/redux-auth.svg)](https://badge.fury.io/js/redux-auth)
[![Build Status](https://travis-ci.org/lynndylanhurley/redux-auth.svg)](https://travis-ci.org/lynndylanhurley/redux-auth)
[![Coverage Status](https://coveralls.io/repos/lynndylanhurley/redux-auth/badge.svg?branch=master&service=github)](https://coveralls.io/github/lynndylanhurley/redux-auth?branch=master)


# TL;DR - View the [Live Demo](http://redux-auth.herokuapp.com/)

You can see a complete working example [here](http://redux-auth.herokuapp.com/). The code for the demo is [here](https://github.com/lynndylanhurley/redux-auth-demo).

Click this button to deploy the demo app to your own server:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/lynndylanhurley/redux-auth-demo)

--

# Features:

* Supports isomorphic / universal / server-side rendering
* [OAuth2 authentication components](#oauthsigninbutton)
* Email authentication components, including:
  * [User registration](#emailsignupform)
  * [Password resets](#requestpasswordresetform)
  * [Email sign in](#emailsigninform)
* Seamless integration with the [devise token auth][dta] Rails gem.
* Includes the following themes:
  * [Material UI][material-ui]
  * [React Bootstrap][react-bootstrap]
  * A plain theme that you can style from scratch
* Support for [multiple user types](#multiple-user-types)
* **coming soon** React Native support
* **coming soon** I18n support
* **coming soon** Can be configured to work with any API

This project comes bundled with a test app. You can run the demo locally by following these instructions, or you can use it [here][redux-auth-demo] in production.

The demo uses [React][react], and the source can be found [here](https://github.com/lynndylanhurley/redux-auth/tree/master/dummy).

--

# Table of Contents

* [About this plugin](#about-this-plugin)
* [Installation](#installation)
* [Components](#components)
  * [EmailSignUpForm](#emailsignupform)
  * [EmailSignInForm](#emailsigninform)
  * [OAuthSignInButton](#oauthsigninbutton)
  * [SignOutButton](#signoutbutton)
  * [DestroyAccountButton](#destroyaccountbutton)
  * [RequestPasswordResetForm](#requestpasswordresetform)
  * [UpdatePasswordForm](#updatepasswordform)
  * [AuthGlobals](#authglobals)
* [Methods](#methods)
  * [configure](#configure)
  * [fetch](#fetch)
* [Configuration](#configuration)
* [Using Multiple User Types](#multiple-user-types)
* [API Expectations](#extended-documentation)
* [Contributing](#contributing)
* [Development](#development)
* [Callouts](#credits)

# About this plugin

This plugin relies on [token based authentication][token-auth-wiki]. This requires coordination between the client and the server. [Diagrams](#extended-documentation) are included to illustrate this relationship.

This plugin was designed to work out of the box with the wonderful [devise token auth][dta] gem, but it's flexible enough to be used in just about any environment.

**About security**: [read here][so-post] for more information on securing your token auth system. The [devise token auth][dta] gem has adequate security measures in place, and this plugin was built to work seamlessly with that gem.

--

# Installation

Only npm is currently supported.

~~~sh
npm install redux-auth --save
~~~

If you want to use the [Material UI][material-ui] or [Bootstrap][react-bootstrap] themes, you will need to install those libraries as well.

~~~sh
# install material ui
npm install material-ui --save

# or bootstrap
npm install react-bootstrap --save
~~~

Material UI uses inline styles so no further configuration is needed. But with the bootstrap theme, the CSS will also need to be included. Read more at the [React Bootstrap][react-bootstrap] project page.

--

# Usage

## Components

There are 3 Themes included in this module.

1. [Material UI][material-ui]
2. [Bootstrap][react-bootstrap]
3. A default theme

The default theme has no styling, and honestly it just looks really bad. But if you hate heavy UI frameworks and you like to style everything yourself, then you will love the default theme.

All components can make their own API requests, display errors, and display success messages out of the box.

The examples shown below use the Material UI theme.

--

### EmailSignUpForm

A form used for email based registration.

![Material UI email sign up][mui-email-sign-up]

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
import { EmailSignUpForm } from "redux-auth/material-ui-theme";

// bootstrap theme
import { EmailSignUpForm } from "redux-auth/bootstrap-theme";

// render
render: () {
  return <EmailSignUpForm />;
}
~~~

[View EmailSignUpForm API Expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/email-sign-up.md)

--

### EmailSignInForm

A form used to sign in using accounts that were registered by email.

![Material UI email sign in][mui-email-sign-in]

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
import { EmailSignInForm } from "redux-auth/material-ui-theme";

// bootstrap theme
import { EmailSignInForm } from "redux-auth/bootstrap-theme";

// render
render: () {
  return <EmailSignInForm />;
}
~~~

[View EmailSignInForm API expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/email-sign-in.md)

--

### OAuthSignInButton

A button used to authenticate using an OAuth provider (facebook, github, etc.).

![Material UI OAuth sign in][mui-oauth-sign-in]

##### OAuthSignInButton props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block.
* **`provider`**: The name of the target provider service as represented in the `authProviderPaths` endpoint configuration.

Any additional properties will be passed on the button component of the given theme.

~~~js
// default theme
import { OAuthSignInButton } from "redux-auth";

// material ui theme
import { OAuthSignInButton } from "redux-auth/material-ui-theme";

// bootstrap theme
import { OAuthSignInButton } from "redux-auth/bootstrap-theme";

// render
render: () {
  // using the default label
  return <OAuthSignInButton />;

  // or using custom label text
  return <OAuthSignInButton>Custom Label</OAuthSignInButton>;
}
~~~

[View OAuthSignInButton API expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/oauth-sign-in.md)

--

### SignOutButton

A button used to end the current user's session.

![Material UI sign out][mui-sign-out]

##### SignOutButton props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block. If this property isn't provided, the current signed in user will be signed out regardless of their user type.

Any additional properties will be passed on the button component of the given theme.

~~~js
// default theme
import { SignOutButton } from "redux-auth";

// material ui theme
import { SignOutButton } from "redux-auth/material-ui-theme";

// bootstrap theme
import { SignOutButton } from "redux-auth/bootstrap-theme";

// render
render: () {
  // using the default label
  return <SignOutButton />;

  // or using custom label text
  return <SignOutButton>Custom Label</SignOutButton>;
}
~~~

[View SignOutButton API expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/sign-out.md)

--

### DestroyAccountButton

A button used to destroy the account of the current user. This will also end the destroyed user's session.

![Material UI destroy account][mui-destroy-account]

##### DestroyAccountButton props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block. If this property isn't provided, the current signed in user's account will be destroyed regardless of their user type.

Any additional properties will be passed on the button component of the given theme.

~~~js
// default theme
import { DestroyAccountButton } from "redux-auth";

// material ui theme
import { DestroyAccountButton } from "redux-auth/material-ui-theme";

// bootstrap theme
import { DestroyAccountButton } from "redux-auth/bootstrap-theme";

// render
render: () {
  // using the default label
  return <DestroyAccountButton />;

  // or using custom label text
  return <DestroyAccountButton>Custom Label</DestroyAccountButton>;
}
~~~

[View DestroyAccountButton API Expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/destroy-account.md)

--

### RequestPasswordResetForm

A form used to send password reset emails to users that forgot their password. When users click the link included in the email, they will be redirected to the site that the request was made from. A modal will appear that contains a form allowing the user to create a new password.

![Material UI request password reset][mui-password-reset]

##### RequestPasswordResetForm props:

* **`endpoint`**: The key of the target provider service as represented in the endpoint configuration block.
* **`inputProps`**: An object containing the following attributes:
  * **`email`**: An object that will override the email input component's default props.
  * **`submit`**: An object that will override the submit button component's default props.

~~~js
// default theme
import { RequestPasswordResetForm } from "redux-auth";

// material ui theme
import { RequestPasswordResetForm } from "redux-auth/material-ui-theme";

// bootstrap theme
import { RequestPasswordResetForm } from "redux-auth/bootstrap-theme";

// render
render: () {
  return <RequestPassswordResetForm />;
}
~~~

[View RequestPasswordResetForm API Expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/request-password-reset.md)

--

### UpdatePasswordForm

A form that can be used to change the current user's password.

![Material UI update password][mui-update-password]

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
import { UpdatePasswordForm } from "redux-auth/material-ui-theme";

// bootstrap theme
import { UpdatePasswordForm } from "redux-auth/bootstrap-theme";

// render
render: () {
  return <UpdatePasswordForm />;
}
~~~

[View UpdatePasswordForm API Expectations](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/update-password.md)

--

### AuthGlobals

This component contains all of the modals used in authentication, and also the component that is used to pass credentials from the server to the client when using server side rendering.

This component **MUST** live at the top level of your application **outside of your routes**.

##### AuthGlobals example using redux-router

The following example shows the relevant router configuration. Note that this is not a complete example. See the [demo app][redux-auth-demo] for a complete, working setup.

~~~js
// default theme
import { AuthGlobals } from "redux-auth";

// material ui theme
import { AuthGlobals } from "redux-auth/material-ui-theme";

// bootstrap theme
import { AuthGlobals } from "redux-auth/bootstrap-theme";

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

--

## Methods

### configure

This must be run before your app is initialized. This should be run on both the server, and on the client. The server will need an additional argument containing information about the current request's cookies and location.

##### configure arguments
* **`endpoints`**: An object containing information about your API. This at least needs to contain the full path to your URL as the `apiUrl` property. See [here](#endpoint-config-options) for a complete list of endpoint config options.
* **`settings`**: When rendering serverside, this will need to be an object that contains the following attributes:
  * **`isServer`**: A boolean that must be set to `true` when rendering server-side.
  * **`cookies`**: A string representation of the cookies from the current request. This will be parsed for any auth credentials.
  * **`location`**: A string representation of the current request's URL.

--

##### configure example

~~~js
import { configure } from "redux-auth";

// server-side usage
store.dispatch(configure(
  {apiUrl: "https://api.graveflex.com"},
  {isServer: true, cookies, currentLocation}
).then(({redirectPath, blank} = {}) => {
  // if `blank` is true, this is an OAuth redirect and should not
  // be rendered

  // use your server to render your app, or redirect
  // to another location if the user is unauthorized.

  // see the demo app for a more complete example.
});

// client-side usage
store.dispatch(configure(
  {apiUrl: "https://api.graveflex.com"}
).then(() => {
  // your store should now have the current user. now render your
  // app to the DOM. see the demo app for a more complete example.
});
~~~

--

### fetch
A wrapper around the [whatwg fetch][whatwg-fetch] implementation that automatically sends and tracks authentication headers. See [here][fetch-spec] for the complete spec.

Any requests to the API that rely on authentication will need to use the `fetch` function included in this library.

--
###### fetch example

~~~js
import { fetch } from "redux-auth";

// usage
fetch("http://api.mysite.com").then(resp => {
  alert(`Api response: `${resp}`);
});
~~~

--

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
  )).then(({redirectPath, blank} = {}) => {
    if (blank) {
      // if `blank` is true, this is an OAuth redirect and should not
      // be rendered
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

##### server-side rendering configuration
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

##### client side rendering configuration

~~~js
// client.js
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

--

### Endpoint config options

This is the complete list of options that can be passed to the endpoint config.

~~~js
import { config } from "redux-auth";

// ... configure store, routes, etc... //

store.dispatch(configure({
  apiUrl:                  'https://devise-token-auth.dev',
  signOutPath:             '/evil_user_auth/sign_out',
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
}).then(// ... render your app ... //
~~~

#### apiUrl
###### string
The base route to your api. Each of the following paths will be relative to this URL. Authentication headers will only be added to requests with this value as the base URL.

--

#### tokenValidationPath
###### string
Path (relative to `apiUrl`) to validate authentication tokens. [Read more](#token-validation-flow).

--

#### signOutPath
###### string
Path (relative to `apiUrl`) to de-authenticate the current user. This will destroy the user's token both server-side and client-side.

--

#### authProviderPaths
###### object
An object containing paths to auth endpoints. Keys should be the names of the providers, and the values should be the auth paths relative to the `apiUrl`. [Read more](#oauth-2-authentication-flow).

--

#### emailRegistrationPath
###### string
Path (relative to `apiUrl`) for submitting new email registrations. [Read more](#email-registration-flow).

--

#### accountUpdatePath
###### string
Path (relative to `apiUrl`) for submitting account update requests.

--

#### accountDeletePath
###### string
Path (relative to `apiUrl`) for submitting account deletion requests.

--

#### emailSignInPath
###### string
Path (relative to `apiUrl`) for signing in to an existing email account.

--

#### passwordResetPath
###### string
Path (relative to `apiUrl`) for requesting password reset emails.

--

#### passwordUpdatePath
###### string
Path (relative to `apiUrl`) for submitting new passwords for authenticated users.

--

# Extended Documentation

Follow these links to learn more about what the API expects from this library, and to see diagrams on how it all fits together. All of this stuff happens automatically when using this library with the [devise token auth gem][dta], but this information will be useful if you need to implement your own API.

* [Signing In With Email](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/email-sign-in.md)
* [Signing In With OAuth](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/oauth-sign-in.md)
* [Validating Returning Users](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/token-validation.md)
* [Managing Session Tokens](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/token-management.md)
* [Signing Out](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/sign-out.md)
* [Registering With Email](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/email-sign-up.md)
* [Requesting Password Resets](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/request-password-reset.md)
* [Destroying Accounts](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/destroy-account.md)
* [Updating Passwords](https://github.com/lynndylanhurley/redux-auth/blob/master/docs/api-expectations/update-password.md)

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

[mui-destroy-account]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/destroy-account.gif
[mui-email-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/email-sign-in.gif
[mui-email-sign-up]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/email-sign-up.gif
[mui-oauth-sign-in]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/oauth-sign-in.gif
[mui-password-reset]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/request-password-reset.gif
[mui-update-password]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/update-password.gif
[mui-sign-out]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/gifs/sign-out.gif

[mui-error-dialog]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-error-dialog.png
[mui-inline-errors]: https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/mui-inline-errors.png
