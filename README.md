# Redux Auth

### Simple, secure user authentication for react + redux

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
* Can be configured to work with any API
* *React Native support coming soon*

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

The following example assumes that you are familiar with redux, and that you know how to [create a store][redux-create-store].

~~~js
// include dependencies
import React from "react";
import {Provider} from "react-redux";
import {configure, authStateReducer, AuthGlobals} from "../../src";
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


~~~

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

[o-auth-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/omniauth-flow.jpg
[token-validation-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/validation-flow.jpg
[email-registration-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/email-registration-flow.jpg
[email-sign-in-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/email-sign-in-flow.jpg
[password-reset-flow]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/password-reset-flow.jpg
[token-handling-diagram]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/token-update-detail.jpg
[batch-request-a]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/batch-request-overview.jpg
[batch-request-b]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/batch-request-detail.jpg
[logo]: https://github.com/lynndylanhurley/j-toker/raw/master/demo/src/images/j-toker-logo.gif
[react-bootstrap]: https://react-bootstrap.github.io/
[material-ui]: http://www.material-ui.com
[redux]: http://rackt.org/redux/index.html
[redux-create-store]: http://rackt.org/redux/docs/basics/Store.html
