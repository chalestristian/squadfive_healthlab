const { Comentario } = require('../models/');
const { Op, DOUBLE, INTEGER } = require("sequelize");
// const { ModuleResolutionKind } = require('typescript'); -- POSSO DELETAR SERÁ?

class ComentarioController {
  async create(req, res) {
    // #swagger.tags = ['ROTA COMENTARIOS']
    // #swagger.description = 'Método responsável pela criação dos comentarios.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 3,
          "conteudo_id": 568,
          "usuario_id": 465,
          "comentario_descricao": "Um comentario de um comentario de um usuario",
        },
        description: 'OK - Comentarios criado com sucesso.'
      }
      #swagger.responses[409] = {
        schema: { mensagem: '409 Conflict' },
        description: 'O comentario não foi criado pois já existe.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O comentario não foi criado por função a erro.'
      }
    */
    try {
      let comentario = {
        conteudo_id: Number(req.body.conteudo_id),
        usuario_id: Number(req.body.usuario_id),
        comentario_descricao: String(req.body.comentario_descricao),

      }
      const comentarioResult = await Comentario.create(comentario);
      return res.status(200).json(comentarioResult);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }
  async getAll(req, res) {
    // #swagger.tags = ['ROTA COMENTARIOS']
    // #swagger.description = 'Método responsável por retornar todos os comentarios.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 2,
          "conteudo_id": 568,
          "usuario_id": 465,
          "comentario_descricao": "Um novo comentario de um novo usuario",
        },
        description: 'OK - Comentarios retornados com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O comentario não foi retornado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O comentario não foi retornado pois não existe comentarios.'
      }
    */
    try {
      const comentario = await Comentario.findAll({

      });
      return res.status(200).json(comentario);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async getOne(req, res) {
    // #swagger.tags = ['ROTA COMENTARIOS']
    // #swagger.description = 'Método responsável por retornar um comentario específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 1,
          "conteudo_id": 325,
          "usuario_id": 45,
          "comentario_descricao": "Esse é um comentario postado por um usuario incrível.",
        },
        description: 'OK - Comentario retornado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O comentario não foi retornado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O comentario não foi retornado pois não existe.'
      }
    */
    try {
      const comentario = await Comentario.findByPk(req.params.id);
      if (comentario) {
        return res.status(200).json(comentario);
      }
      else {
        return res.status(200).json({ mensagem: "Conteudo não encontrado" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async update(req, res) {
    // #swagger.tags = ['ROTA COMENTARIOS']
    // #swagger.description = 'Método responsável por atualizar algum(s) dado(s) de algum comentario em específico com base no ID..'
    /* #swagger.responses[200] = {
        schema: {
        "id": 1,
        "conteudo_id": 325,
        "usuario_id": 45,
        "comentario_descricao": "Esse comentario foi atualizado pelo usuario incrível.",
        },
        description: 'OK - Comentario atualizado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O comentario não foi atualizado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O comentario não foi atualizado pois não existe.'
      }
    */
    try {
      const comentario = await Comentario.findByPk(req.params.id);
      if (comentario) {
        await comentario.update(req.body);
        return res.status(200).json(comentario);
      }
      else {
        return res.status(200).json({ mensagem: "Conteudo não encontrado para atualização" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    // #swagger.tags = ['ROTA COMENTARIOS']
    // #swagger.description = 'Método responsável por deletar um comentario em específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 3,
          "conteudo_id": 568,
          "usuario_id": 465,
          "comentario_descricao": "Um comentario de um comentario de um usuario",
        },
        description: 'OK - Comentario deletado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O comentario não foi deletado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O comentario não foi deletado pois não existe.'
      }
    */
    try {
      const comentario = await Comentario.findByPk(req.params.id);
      if (comentario) {
        await comentario.destroy();
        return res.status(200).json(comentario);
      }
      else {
        return res.status(200).json({ mensagem: "Conteudo não encontrado para deletar" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
module.exports = new ComentarioController();