# Token management

* [Identifying Users](#identifying-users-on-the-server)
* [Rotating Tokens](#rotating-tokens)
* [Batch Requests](#batch-requests)

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

---

## Rotating Tokens

Tokens should be invalidated after each request to the API. The following diagram illustrates this concept:

![Token handling][token-handling-diagram]

During each request, a new token is generated. The `access-token` header that should be used in the next request is returned in the `access-token` header of the response to the previous request. The last request in the diagram fails because it tries to use a token that was invalidated by the previous request.

The benefit of this measure is that if a user's token is compromised, the user will immediately be forced to re-authenticate. This will invalidate the token that is now in use by the attacker.

The only case where an expired token is allowed is during [batch requests](#batch-requests).

Token management is handled by default when using this plugin with the [devise token auth][dta] gem.

## Batch requests

By default, the API should update the auth token for each request ([read more](#rotating-tokens). But sometimes it's neccessary to make several concurrent requests to the API, for example:

##### Example batch request

~~~javascript
fetch('/api/restricted_resource_1').then(resp => {
  // handle response
});

fetch('/api/restricted_resource_2').then(resp => {
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

[dta]: https://github.com/lynndylanhurley/devise_token_auth
[token-handling-diagram]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/token-update-detail.jpg
[batch-request-a]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/batch-request-overview.jpg
[batch-request-b]: https://github.com/lynndylanhurley/ng-token-auth/raw/master/test/app/images/flow/batch-request-detail.jpg
