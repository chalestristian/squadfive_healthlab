const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const routes = Router();

routes.get('/', UsuarioController.getAll);
routes.get('/:id', UsuarioController.getOne);
routes.post('/', UsuarioController.create);
routes.put('/:id', UsuarioController.update);
routes.delete('/:id', UsuarioController.delete);

module.exports = routes;