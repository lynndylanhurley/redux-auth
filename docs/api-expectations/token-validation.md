# Token Validation

This operation is performed by:
1. The Node.js server that renders the initial content React.js application. This is not necessarily the same server as your API, but it may be depending on your setup.
1. React Native applications upon opening the application.
1. React web applications following successful OAuth authentication.

* [Request](#request)
  * [Request Body](#request-body)
  * [Request Headers](#request-headers)
* [Success Response](#success-response)
  * [Success Response Body](#success-response-body)
  * [Success Response Headers](#success-response-headers)
* [Error Response](#error-response)
  * [Error Response Body](#error-response-body)
  * [Error Response Headers](#error-response-headers)

## Request

##### method
###### GET

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

This be an object containing the attributes that your API is configured to send describing your user. The attributes will be nested within a `data` object. At a minimum, this should contain the following attributes.

##### success
###### boolean
Will always be `true`.

##### data
###### object

This is the object that describes the user. It should contain at least the following params.

##### uid
###### string
The user's unique identifier.

##### provider
###### string
The provider used to create / verify the user's account (email, github, facebook, etc.).

--

##### Success Response Body Example

~~~json
{
  "success": true,
  "data": {
    "id": 6,
    "email": "test@test.com",
    "provider": "email",
    "uid": 'test@test.com',
    "favorite_color": "yellow ogre"
  }
}
~~~

--

#### Success Response Headers

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

##### status
###### boolean

Will always be `false`.

##### errors
###### array of strings

A list of errors that will be displayed to the user.

--

##### Error Response Body Example
~~~json
{
  "success": false,
  "errors": ["User not found or access-token invalid."]
}
~~~

--

### Error Response Headers
None. The client won't care about any headers for this response.
