# Sign Out

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

![sign out](https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/diagram-sign-out.jpg)

## Request

##### method
###### DELETE

### Request Body

None. The API doesn't care about the body of this request.

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

A successful response will simply return an object with a `success` attribute that is set to `true`.

##### success
###### boolean
Will always be `true`.

--

##### Success Response Body Example

~~~json
{
  "success": true
}
~~~

--

#### Success Response Headers

None. The client won't care about the headers for this response.

--

## Error Response

This will be an array containing any errors that the server encountered in processing the request.

### Error Response Body

##### errors
###### array of strings

A list of errors that will be displayed to the user.

--

##### Error Response Body Example
~~~json
{
  "errors": ["User was not found or was not logged in."]
}
~~~

--

### Error Response Headers
None. The client won't care about any headers for this response.
