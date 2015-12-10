# Email Sign In

* [Request](#request)
* [Success Response](#success-response)
* [Error Response](#error-response)

## Request

##### method
###### POST

### Request Body

##### email
###### string
The email address of the user trying to sign in.

##### password
###### string
The password of the user trying to sign in

##### Request Body Example

~~~json
{
  "email": "test@test.com",
  "password": "secret123"
}
~~~

### Request Headers

None. The API won't care about any headers for this request.

--

## Success Response

### Success Response Body

This be an object containing the attributes that your API is configured to send regarding your user. The attributes will be nested within a `data` object. At a minimum, this should contain the following attributes.

##### uid
###### string
The unique identifier for the user's account.

##### provider
###### string
The account provider type (email, github, facebook, etc.).

##### Success Response Body Example

~~~json
"data": {
  "uid": "test@test.com",
  "provider": "email",
  "email": "test@test.com",
  "favorite_color": null,
  "id": 6
}
~~~

#### Success Response Headers

##### access-token
###### string
The access token acts as a password for each request.

##### client
###### string
The client token is used to identify device (browser client, phone, tablet, etc) of the current session. This allows us to maintain multiple concurrent sessions across devices / browsers.

##### expiry
###### integer
The time at which the token will expire.

##### uid
###### string
The unique identifier for the current user.

##### Success Response Headers Example

~~~
access-token: bgINB4atOxd8SMNvtOTDxg
client:       V7EN7LSRYAbpE_-c5PvRSw
expiry:       1450988710
uid:          test@test.com
~~~

## Error Response

This will an array containing any errors that the server encountered in processing the request.

### Error Response Body

##### errors
###### array of strings

A list of errors that will be displayed to the user.

##### Error Response Body Example
~~~json
{
  "errors": ["Invalid login credentials. Please try again."]
}
~~~

### Error Response Headers
None. The client won't care about any headers for this response.
