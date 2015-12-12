# Destroy Account

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

![destroy account diagram](https://github.com/lynndylanhurley/redux-auth/raw/master/docs/images/diagram-destroy-account.jpg)


## Request

##### method
###### DELETE

### Request Body

None. The API won't care about the body of this request.

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

A json object containing the following keys.

##### status
###### string
Will always be `"success"`.

##### message
###### string
A message from the API that will be displayed to the user.

--

##### Success Response Body Example

~~~json
{
  "message": "Account with uid 468037 has been destroyed."
  "status": "success"
}
~~~

--

#### Success Response Headers

None. The client won't care about any headers for this response.

--

## Error Response

This will contain the response status, and an array of any errors that the server encountered in processing the request.

### Error Response Body

##### status
###### string
Will always be `"error"`.

##### errors
###### array of strings
A list of errors that will be displayed to the user.

--

##### Error Response Body Example
~~~json
{
  "status":"error",
  "errors":["Unable to locate account for destruction."]
}
~~~

--

### Error Response Headers
None. The client won't care about any headers for this response.
