const jwt = require('jsonwebtoken');
const SECRET = 'gabriel';

class LoginController {
  // #swagger.tags = ['ROTA LOGIN']
  // #swagger.description = 'Método responsável pela criação do token para validação.'
  /* #swagger.responses[200] = {
      schema: {
        "user": 1,
        "senha": 123,
      },
      description: 'OK - Token criado com sucesso.'
    }

    #swagger.responses[400] = {
      schema: { mensagem: '400 Bad Request' },
      description: 'ERRO: O token não foi criado por função a erro.'

      #swagger.responses[401] = {
      schema: { mensagem: '401 Unauthorized' },
      description: 'ERRO: Credenciais erradas.'
    }
  */
  async create(req, res) {
    let usuario = {
      user: Number(req.body.user),
      senha: Number(req.body.senha)
    }
    const id = 1; //esse id viria do banco de dados
    if (usuario.user === 1 && usuario.senha === 123) {
      const token = jwt.sign({ id }, SECRET, { expiresIn: 300 });
      return res.json({ auth: true, token });
    }
    res.status(401).end();
  };
}
module.exports = new LoginController();
