const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
rota/recurso

metodo http:
GET: buscar informação no beck-end// acessa rota no navegador
POST: Criar informação no beck-end
PUT: alterar informação no beck-end
DELETE: deletar informação no beck-end
*/ 
/*
tipos de parametros
Query Params: parametros nomeados enviados na rota apos "?" (filtros, paginação)
Route Params: parametros utilizados para identificar recursos
Request Body: corpo da requisição, utilizado para criar ou altrtrar recursos
 */
/**
 * SQL: mysql, sqlite, postgresql, oracle, microsoft sql server
 * NoSQL: MongoDB,CouchDB, etc.
 */

 /**
  * Driver: SELECT * FROM user
  * Query: 
  */



app.listen(3333);
