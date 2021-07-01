const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const routes = Router();

routes.get('/user', UsuarioController.getAll);
routes.get('/user/:id', UsuarioController.getOne);
routes.post('/user', UsuarioController.create);
routes.put('/user/:id', UsuarioController.update);
routes.delete('/user/:id', UsuarioController.delete);

module.exports = routes;