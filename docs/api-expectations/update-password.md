# Update Password

* [Overview](#overview)
* [Request](#request)
  * [Request Body](#request-body)
  * [Request Headers](#request-headers)
* [Success Response](#success-response)
  * [Success Response Body](#success-response-body)
  * [Success Response Headers](#success-response-headers)
* [Error Response](#error-response)
  * [Error Response Body](#error-response-body)
  * [Error Response Headers](#error-response-headers)

## Overview

![update password](https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/diagram-update-password.jpg)

## Request

##### method
###### PUT

### Request Body

##### password
###### string
The password of the current user.

##### password_confirmation
###### string
Should match the `password` field.

--

### Request Headers

##### access-token
###### string
The access token acts as a password for each request.

##### client
###### string
The client token is used to identify device (browser client, phone, tablet, etc) of the current session. This allows us to maintain multiple concurrent sessions across devices / browsers.

##### uid
###### string
The unique identifier for the current user.

--

##### Request Headers Example

~~~
access-token: bgINB4atOxd8SMNvtOTDxg
client:       V7EN7LSRYAbpE_-c5PvRSw
uid:          test@test.com
~~~

--

## Success Response

### Success Response Body

This be an object containing a success message that will be displayed to the user.

##### success
###### boolean
Will always be `true`.

##### data
###### object
This object will contain the message attribute.

##### message
###### string
A success message that will be displayed to the user

--

##### Success Response Body Example

~~~json
{
  "success": true,
  "data": {
    "message": "Your password has been successfully updated."
  }
}
~~~

--

#### Success Response Headers

The respones to this request should contain updated auth credentials that will be used in any subsequent request to the API.

##### access-token
###### string
The access token acts as a password for each request. Upon successful token validation, a new token will be issued and returned with the response. The previous token will be invalidated, and this new token should be used for the subsequent request to the API.

##### client
###### string
The client token is used to identify device (browser client, phone, tablet, etc) of the current session. This allows us to maintain multiple concurrent sessions across devices / browsers.

##### expiry
###### integer
The time at which the token will expire.

##### uid
###### string
The unique identifier for the current user.

--

##### Success Response Headers Example

~~~
access-token: bgINB4atOxd8SMNvtOTDxg
client:       V7EN7LSRYAbpE_-c5PvRSw
expiry:       1450988710
uid:          test@test.com
~~~

--

## Error Response

This will be an array containing any errors that the server encountered in processing the request.

### Error Response Body

##### success
###### boolean
Will always be `false`.

##### errors
###### object containing arrays of strings for each invalid attribute
An object containing keys for each field that has errors. The values of each key will be an array of errors for the given field.

An additional attribute called `full_messages` is sometimes used to display errors that don't correspond to a specific field.

--

##### Error Response Body Example
~~~json
{
  "success":false,
  "errors": {
    "password_confirmation": ["doesn't match Password"],
    "password":["is too short (minimum is 8 characters)"],
    "full_messages":["Miscellaneous fatal error. Please try again."]
  }
}
~~~

--

### Error Response Headers
None. The client won't care about any headers for this response.
