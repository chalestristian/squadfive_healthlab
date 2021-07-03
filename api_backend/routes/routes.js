const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const ConteudoController = require('../controllers/ConteudoController');
const TagController = require('../controllers/TagController');
const ComentarioController = require('../controllers/ComentarioController');

const routes = Router();

routes.get('/', (req, res) => {
  // #swagger.tags = ['ROTA PRINCIPAL / INDEX'] 
  res.status(200).json({ mensagem: 'Não tem nada por aqui :) | Para mais informações, acesse a documentação em /documentacao' })
});


/* --------------- ROTAS USUARIOS --------------- */
routes.get('/usuarios', UsuarioController.getAll);
routes.get('/usuarios/:id', UsuarioController.getOne);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

/* --------------- ROTAS CONTEÚDOS --------------- */
routes.get('/conteudos', ConteudoController.getAll);
routes.get('/conteudos/:id', ConteudoController.getOne);
routes.post('/conteudos', ConteudoController.create);
routes.put('/conteudos/:id', ConteudoController.update);
routes.delete('/conteudos/:id', ConteudoController.delete);

/* --------------- ROTAS TAGS --------------- */

routes.get('/tags', TagController.getAll);
routes.get('/tags/:id', TagController.getOne);
routes.post('/tags', TagController.create);
routes.put('/tags/:id', TagController.update);
routes.delete('/tags/:id', TagController.delete);

/* --------------- ROTAS COMENTARIOS --------------- */
routes.get('/comentarios', ComentarioController.getAll);
routes.get('/comentarios/:id', ComentarioController.getOne);
routes.post('/comentarios', ComentarioController.create);
routes.put('/comentarios/:id', ComentarioController.update);
routes.delete('/comentarios/:id', ComentarioController.delete);

module.exports = routes;

