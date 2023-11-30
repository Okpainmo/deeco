# API Documentation For The Deeco Project(POC) Back-end.

This file is to serve as a temporary API documentation for the Deeco Project(POC) back-end, pending when development activities become stable and the documentation is transferred to a more suited API documentation platform.

- **The following points should be noted.**

1. The API is currently(temporarily) hosted on render(render.com).

> Base URL is: https:/deeco-backend-server.onrender.com

2. The front-end developer should keep the base URL abstracted(programmatically) from the API endpoints so as to be easily changeable. As this is just a temporary/development host server - the host platform is very likely to be changed.

3. All passwords to be sent must pass the following conditions.

- At least one digit/number.
- At least one lowercase letter.
- At least one uppercase letter.
- At least one special character from the set [!@#$%^&*()_+{}\[\]:;<>,.?~\\-].
- The total length of the password must be at least 8 characters.

## End Points.

Three end-points are currently active.

### 1. The Base Route.

> returns a welcome message signifying a successful access to the server.

### 2. Register User.

> /api/v1/auth/register

// description: Create new user, set refresh-token(in cookie), & send access-token(jwt).

// request: POST

// route: "/api/v1/auth/register"

// access: Public

- No request headers data required.

- Sets 1(one) Cookie(the refresh-token).

**Sample Request Body**

```js
{
    {
    "fullName": "test user1",
    "email": "testemail2@gmail.com",
    "password": "Passed@12",
    "confirmPassword": "Passed@12"
}
}
```

**Sample Response Body**

```json
{
    "responseMessage": "user sign-up/registration successful",
    "response": {
        "user": {
            "fullName": "test user1",
            "email": "testemail2@gmail.com",
            "password": "$2a$14$GUfltf2j/YKadwcRd/qgu.knYSgXQAu1oPnTM4YvuvIDIB2mxWKuS",
            "confirmPassword": "$2a$14$l.E/gYuDXrjg5bb4VIJoteGvQQEaC57hrhC.mTvJcPFBluqHstsMO",
            "_id": "65682e13f16be36b08393014",
            "createdAt": "2023-11-30T06:39:15.070Z",
            "updatedAt": "2023-11-30T06:39:15.070Z",
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY4MmUxM2YxNmJlMzZiMDgzOTMwMTQiLCJ1c2VyRW1haWwiOiJ0ZXN0ZW1haWwyQGdtYWlsLmNvbSIsImlhdCI6MTcwMTMyNjM1NSwiZXhwIjoxNzAxMzI5OTU1fQ.bSzvZ8cZdp0zdfBHRTyQ33HODYgLnOkcH8rdlZq7mk8"
    }
}
```

### 3. Log In User.

> /api/v1/auth/login

// description: Authenticate user, set refresh-token(in cookie), & send access-token(jwt).

// request: POST

// route: '/api/v1/auth/log-in';

// access: Public

- No request headers data required.

- Sets 1(one) Cookie(the refresh-token).

**Sample Request Body**

```js
{
    "email": "testemail2@gmail.com",
    "password": "Passed@12"
}
```

**Sample Response Body**

```json
{
    "responseMessage": "user logged in successfully",
    "response": {
        "user": {
            "_id": "65682e13f16be36b08393014",
            "fullName": "test user1",
            "email": "testemail2@gmail.com",
            "password": "$2a$14$GUfltf2j/YKadwcRd/qgu.knYSgXQAu1oPnTM4YvuvIDIB2mxWKuS",
            "confirmPassword": "$2a$14$l.E/gYuDXrjg5bb4VIJoteGvQQEaC57hrhC.mTvJcPFBluqHstsMO",
            "createdAt": "2023-11-30T06:39:15.070Z",
            "updatedAt": "2023-11-30T06:39:15.070Z",
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY4MmUxM2YxNmJlMzZiMDgzOTMwMTQiLCJ1c2VyRW1haWwiOiJ0ZXN0ZW1haWwyQGdtYWlsLmNvbSIsImlhdCI6MTcwMTMyNjM3NSwiZXhwIjoxNzAxMzI5OTc1fQ.nXSNJp84odON96IINdMIsoNYH9t3ySQepKgss9Lg4lw"
    }
}
```
