const swaggerAutogen = require('swagger-autogen')()
const arquivoSaida = './swagger_doc.json';
const routes = ['./index.js'];

const docs = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "API HEALTHLAB",
    "description": "Essa documentação contem todas as rotas da api"
  },
  "host": "localhost:3000/documentacao",
  "basePath": "/",
  "tags": [],
  "schemes": [
    "http",
    "https"
  ],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "securityDefinitions": {
    "apiKeyAuth": {

    }
  },
};

swaggerAutogen(arquivoSaida, routes, docs).then(() => {
  require('./index.js')
})