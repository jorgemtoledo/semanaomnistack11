const express = require('express');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

//----------------------------------------------------------------------------------
// Tipos de parametros:
// Query params: Parametros nomeados enviados na rota após "?" (Filtros, paginação);
// Exemplo: const params = request.query;
// Route params: Parametros utilizados para indentificar recursos
// Exemplo: const params = request.params
// Request body: 
// Exemplo: const params = request.body

// routes.get('/users', (req, res) => {
//     // console.log('teste');
//     return res.json({
//         evento: 'Semana Oministack'
//     });
// });

// routes.post('/users', (req, res) => {
//     const body = request.body;
//     console.log(body);
//     return response.json({
//         evento: 'Semana Omnistack'
//     });
// });

// ---------------------------------------------------------------------------------------

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;