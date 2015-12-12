# Email Sign Up

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
The email address of the user trying to sign up.

##### password
###### string
The password of the user trying to sign up.

##### password_confirmation
###### string
Should match the `password` field.

##### confirm_success_url
###### string
The URL that the email confirmation link should lead back to. This field will be automatically filled out by this framework.

--

##### Request Body Example

~~~json
{
  "email": "test@test.com",
  "password": "secret123",
  "password_confirmation": "secret123",
  "confirm_success_url": "https://redux-auth-demo.herokuapp.com/"
}
~~~

--

### Request Headers

None. The API won't care about any headers for this request.

## Success Response

### Success Response Body

A json object containing the following key.

##### status
###### string
Will always be `"success"`.

--

##### Success Response Body Example

~~~json
{
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
###### object containing arrays of strings for each invalid attribute
An object containing keys for each field that has errors. The values of each key will be an array of errors for the given field.

--

##### Error Response Body Example
~~~json
{
  status: "error",
  errors: {
    password_confirmation: ["doesn't match Password"],
    email: ["is not an email"]
  }
}
~~~

--

### Error Response Headers
None. The client won't care about any headers for this response.

