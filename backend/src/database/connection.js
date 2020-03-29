const knex = require('knex');
const configuration = require('../../knexfile');

// Banco de dados
// Driver: select * from users
// Query builder: tabela('users').select('*').where()
// Instalar o query builder knex.js

const connetion = knex(configuration.development);

module.exports = connetion;