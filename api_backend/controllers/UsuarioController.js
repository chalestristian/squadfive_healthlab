const { Usuario } = require('../models/');
const { Op, DOUBLE } = require("sequelize");

class UsuarioController {
  async create(req, res) {
    // #swagger.tags = ['ROTA USUARIOS']
    // #swagger.description = 'Método responsável pela criação dos usuários.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 4,
          "nome": "Gabriel Santos",
          "email": "santosgabriel@email.com",
          "senha": "ThisIsAPassWord",
          "altura": 1.87,
          "peso": 86.25,
          "sexo": "Masculino",
        },
        description: 'OK - Usuario criado com sucesso.'
      }
      #swagger.responses[409] = {
        schema: { mensagem: '409 Conflict' },
        description: 'O usuário não foi criado pois já existe.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O usuário não foi criado por função a erro.'
      }
    */
    try {
      let usuario = {
        nome: String(req.body.nome),
        email: String(req.body.email),
        senha: String(req.body.senha),
        altura: Number(req.body.altura),
        peso: Number(req.body.peso),
        sexo: String(req.body.sexo),
      }
      const usuarioResult = await Usuario.create(usuario);
      return res.status(200).json(usuarioResult);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }
  async getAll(req, res) {
    // #swagger.tags = ['ROTA USUARIOS']
    // #swagger.description = 'Método responsável por retornar todos os usuários.'
    /* #swagger.responses[200] = {
        schema: {
        "id": 1,
        "nome": "Bruna Marques",
        "email": "brunam&m@gmail.com",
        "senha": "Macarronada",
        "altura": 1.3,
        "peso": 65,
        "sexo": "Feminino", 
        },
        description: 'OK - Usuarios retornados com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Os usuários não foram retornados por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'Os usuários não foram retornados pois não existem.'
      }
    */
    try {
      const usuario = await Usuario.findAll({

      });
      return res.status(200).json(usuario);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async getOne(req, res) {
    // #swagger.tags = ['ROTA USUARIOS']
    // #swagger.description = 'Método responsável por retornar um usuario específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
        "id": 2,
        "nome": "Thales Cristian",
        "email": "thalezzz@teste.com",
        "senha": "Password",
        "altura": 1.85,
        "peso": 80,
        "sexo": "Masculino",
        },
        description: 'OK - Usuario {id} retornado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Usuário não retornado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O usuário não foi retornado pois não existe.'
      }
    */
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        return res.status(200).json(usuario);
      }
      else {
        return res.status(200).json({ mensagem: "Usuario não encontrado" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async update(req, res) {
    // #swagger.tags = ['ROTA USUARIOS']
    // #swagger.description = 'Método responsável por atualizar algum(s) dado(s) de algum usuario em específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 2,
          "nome": "Thales Cristian",
          "email": "thalezzz@teste.com",
          "senha": "ThisIsMyNewPassWord",
          "altura": 1.85,
          "peso": 80,
          "sexo": "Masculino",
        },
        description: 'OK - Dado(s) do usuario {id} atualizado(s) com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Dado(s) do usuário não atualizado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O(s) dado(s) do usuário não foi atualizado pois não existe.'
      }
    */
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        await usuario.update(req.body);
        return res.status(200).json(usuario);
      }
      else {
        return res.status(200).json({ mensagem: "Usuario não encontrado para atualização" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    // #swagger.tags = ['ROTA USUARIOS']
    // #swagger.description = 'Método responsável por deletar um usuário em específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 3,
          "nome": "Alan Matos",
          "email": "alanzoca@teste.com",
          "senha": "Naoseiminhasenha",
          "altura": 1.82,
          "peso": 75.2,
          "sexo": "Masculino",
        },
        description: 'OK - Usuario deletado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Usuário não deletado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'Usuário não pode ser deletado pois não existe.'
      }
    */
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        await usuario.destroy();
        return res.status(200).json(usuario);
      }
      else {
        return res.status(200).json({ mensagem: "Usuario não encontrado para deletar" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
module.exports = new UsuarioController();