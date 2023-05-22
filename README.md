# FinanceEase API

## Prerequisites

- [Node.js](https://nodejs.org/): ^12.0.0
- [NPM](https://npmjs.org/) or any other Node.js package manager
- [yarn](https://yarnpkg.com/)

## Installation

Install packages with your preferred package manager, e.g. npm:

```
npm install
```
OR
```
yarn install
```

### Production

To start the server use these commands:

```
yarn run dev
```
OR
```
nodemon src/index.js

```
To create a user, use the POST method with the following parameters:
Ex:
```
  {
    "name": "John",
    "email": "johndoe@mail.com",
    "phone": "1234567",
    "cpf": "12345678901" // Use a valid cpf here
   }
 ```
 
 To update a user, use the PUT method with the following parameters:
 Ex: 
 URL ```https://localhost:{port}/user/{USER ID}```
 Request Body:
 ```
    {
      "name": "Jake",
      "email": "johndoe@mail.com",
      "phone": "1234567",
      "cpf": "12345678901" // Use a valid cpf here
    }
 ```
Note that only the username is changed.
  
To delete a user, use the DELETE method with the following parameter in the URL:
Ex: 
 URL ```https://localhost:{port}/user/{USER ID}```
 
To view all existing users, use the GET method.
 Ex:
 URL ```https://localhost:{port}/user```
