# Request Password Reset

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
###### POST

### Request Params

##### config_name
###### string
The current endpoint config. Will be `default` unless you're using multiple user types.

### Request Body

##### email
###### string
The email address of the user trying to initiate the password reset.

##### redirect_url
###### string
The URL that the email confirmation link should lead back to. This field will be automatically filled out by this framework.

--

##### Request Body Example

~~~json
{
  "email": "test@test.com",
  "redirect_url": "https://redux-auth-demo.herokuapp.com/"
}
~~~

--

### Request Headers

None. The API won't care about any headers for this request.

## Success Response

### Success Response Body

A json object containing the following key.

##### success
###### boolean
Will always be `true`.

##### message
###### string
A success message that will be displayed to the user.

--

##### Success Response Body Example

~~~json
{
  "success": true,
  "message": "An email has been sent to test@test.com containing instructions for resetting your password."
}
~~~

--

#### Success Response Headers
None. The client won't care about any headers for this response.

--

## Error Response
This will contain the response status, and an array of any errors that the server encountered in processing the request.

### Error Response Body

##### success
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
  "errors": ["Unable to find user with email 'bogus@test.com'."]
}
~~~

--

### Error Response Headers
None. The client won't care about any headers for this response.
