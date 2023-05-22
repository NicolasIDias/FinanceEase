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

Para criar um usuario, utilize o metodo POST com os seguintes parametros:
Ex:
```
  {
    "name": "John",
    "email": "johndoe@mail.com",
    "phone": "1234567",
    "cpf": "12345678901" // UTILIZAR UM CPF QUE SEJA "VALIDO"
   }
 ```
 
 Para fazer um update, utilize o metodo PUT com os seguintes parametros:
 Ex: 
 Na url ```https://localhost:{port}/user/{ID DO USUARIO}```
 No body:
 ```
    {
      "name": "Jake",
      "email": "johndoe@mail.com",
      "phone": "1234567",
      "cpf": "12345678901" // UTILIZAR UM CPF QUE SEJA "VALIDO"
    }
 ```
 Veja que alterei apenas o nome de usuario.
  
 Para deletar um usuario, utilize o metodo DELETE com o seguinte parametro na URL:
 Ex: 
 Na url ```https://localhost:{port}/user/{ID DO USUARIO}```
 
 E por fim, para vizualizar todos os usuarios existentes, utilize o metodo GET
 Ex:
 Na url ```https://localhost:{port}/user```
