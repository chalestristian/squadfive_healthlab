const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const ConteudoController = require('../controllers/ConteudoController');
const LoginController = require('../controllers/LoginController');
const TagController = require('../controllers/TagController');
const ComentarioController = require('../controllers/ComentarioController');
const jwt = require('jsonwebtoken');
const SECRET = 'gabriel';
const routes = Router();

routes.get('/', (req, res) => {
  // #swagger.tags = ['ROTA PRINCIPAL / INDEX'] 
  res.status(200).json({ mensagem: 'Não tem nada por aqui :) | Para mais informações, acesse a documentação em /documentacao' })
});

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    next();
  });
}

routes.post('/login', LoginController.create);

/* --------------- ROTAS USUARIOS --------------- */
routes.get('/usuarios', verifyJWT, UsuarioController.getAll);
routes.get('/usuarios/:id', verifyJWT, UsuarioController.getOne);
routes.post('/usuarios', verifyJWT, UsuarioController.create);
routes.put('/usuarios/:id', verifyJWT, UsuarioController.update);
routes.delete('/usuarios/:id', verifyJWT, UsuarioController.delete);

/* --------------- ROTAS CONTEÚDOS --------------- */
routes.get('/conteudos', verifyJWT, ConteudoController.getAll);
routes.get('/conteudos/:id', verifyJWT, ConteudoController.getOne);
routes.post('/conteudos', verifyJWT, ConteudoController.create);
routes.put('/conteudos/:id', verifyJWT, ConteudoController.update);
routes.delete('/conteudos/:id', verifyJWT, ConteudoController.delete);

/* --------------- ROTAS TAGS --------------- */
routes.get('/tags', verifyJWT, TagController.getAll);
routes.get('/tags/:id', verifyJWT, TagController.getOne);
routes.post('/tags', verifyJWT, TagController.create);
routes.put('/tags/:id', verifyJWT, TagController.update);
routes.delete('/tags/:id', verifyJWT, TagController.delete);

/* --------------- ROTAS COMENTARIOS --------------- */
routes.get('/comentarios', verifyJWT, ComentarioController.getAll);
routes.get('/comentarios/:id', verifyJWT, ComentarioController.getOne);
routes.post('/comentarios', verifyJWT, ComentarioController.create);
routes.put('/comentarios/:id', verifyJWT, ComentarioController.update);
routes.delete('/comentarios/:id', verifyJWT, ComentarioController.delete);

module.exports = routes;