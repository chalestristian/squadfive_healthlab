const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const ConteudoController = require('../controllers/ConteudoController')
const routes = Router();

routes.get('/', (req, res) => { res.status(200).json({ mensagem: 'Rota Raiz | Não tem nada para ver por aqui :)' }) });

routes.get('/usuarios', UsuarioController.getAll);
routes.get('/usuarios/:id', UsuarioController.getOne);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.get('/conteudos', ConteudoController.getAll);
routes.get('/conteudos/:id', ConteudoController.getOne);
routes.post('/conteudos', ConteudoController.create);
routes.put('/conteudos/:id', ConteudoController.update);
routes.delete('/conteudos/:id', ConteudoController.delete);

module.exports = routes;

