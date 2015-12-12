# OAuth Sign In

* [Overview](#overview)
* [Popup](#request)
  * [Popup Params](#popup-params)
* [Success Popup Redirect](#success-popup-redirect)
  * [Success Popup Redirect Params](#success-popup-redirect-params)
* [Error](#error)

## Overview
![oauth sign in](https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/diagram-oauth.jpg)

## Popup

### Popup URL Params

##### config_name
###### string
Used by the client to track the endpoint configuration used in authentication.

##### resource_class
###### string
Used by the server to track the user resource class. This is necessary to enable auth via multiple user classes.

##### auth_origin_url
###### string
The base url of the site that initiated the popup.

##### Popup URL Example

~~~
https://devise-token-auth.dev/omniauth/github?auth_origin_url=http%3A%2F%2Flocalhost%3A8000%2F&config_name=default&resource_class=User
~~~

## Success Popup Redirect

The following steps will be taken after successful OAuth authentication.

1. After the user successfully authenticates on the external provider's site (github, facebook, etc.), the provider will redirect back to the API.
2. The API will find or create the user matching the provider user's UID, and then issue a new token.
3. The API will then redirect to the original URL that the popup was initiated from, including the auth credentials as URI params.
4. The popup initiator will detect these credentials and make a new request to the API to validate the auth token and pull the user's data.

### Success Popup Redirect Params

##### token
###### string
The access token acts as a password for each request.

##### uid
###### string
The unique identifier for the current user.

##### client
###### string
The client token is used to identify device (browser client, phone, tablet, etc) of the current session. This allows us to maintain multiple concurrent sessions across devices / browsers.

##### expiry
###### integer
The time at which the given `access-token` will expire.

##### Success Popup Redirect URL Example

~~~
https://redux-auth.herokuapp.com?token=bgINB4atOxd8SMNvtOTDxg&uid=test%40test.com&client=abc&expiry=1450988710
~~~

## Error

The only possible errors are for the user to close the window without authenticating, or for the subsequent token validation to fail. In both cases an error is shown to the client. See the token validation request docs for more info on the latter case.
