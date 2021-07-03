const { Tag } = require('../models/');
const { Op, DOUBLE } = require("sequelize");

class TagController {

  async create(req, res) {
    // #swagger.tags = ['ROTA TAGS']
    // #swagger.description = 'Método responsável pela criação de tags.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 4,
          "tag_nome": "Saude Emocional",
          "tag_descricao": "Tudo que envolver a saude emocional será setado com essa tag",
        },
        description: 'OK - Tag criada com sucesso.'
      }
      #swagger.responses[409] = {
        schema: { mensagem: '409 Conflict' },
        description: 'A tag não foi criada pois já existe.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: A tag não foi criada por função a erro.'
      }
    */
    try {
      let tag = {
        tag_nome: String(req.body.tag_nome),
        tag_descricao: String(req.body.tag_nome),
      }
      const tagResult = await Tag.create(tag);
      return res.status(200).json(tagResult);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }
  async getAll(req, res) {
    // #swagger.tags = ['ROTA TAGS']
    // #swagger.description = 'Método responsável por retornar todas as tags.'
    /* #swagger.responses[200] = {
        schema: {
        "id": 2,
        "tag_nome": "Saude Física",
        "tag_descricao": "Tudo que envolver a saude fisica será setado com essa tag", 
      },
        description: 'OK - Tags retornadas com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: As tags não foram retornadas por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'As tags não foram retornadas pois não existem.'
      }
    */
    try {
      const tag = await Tag.findAll({

      });
      return res.status(200).json(tag);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async getOne(req, res) {
    // #swagger.tags = ['ROTA TAGS']
    // #swagger.description = 'Método responsável por retornar uma tag específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
        "id": 4,
        "tag_nome": "Saude Emocional",
        "tag_descricao": "Tudo que envolver a saude emocional será setado com essa tag",
        },
        description: 'OK - Tag {id} retornada com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Tag não retornada por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'A tag não foi retornada pois não existe.'
      }
    */
    try {
      const tag = await Tag.findByPk(req.params.id);
      if (tag) {
        return res.status(200).json(tag);
      }
      else {
        return res.status(200).json({ mensagem: "Tag não encontrada" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async update(req, res) {
    // #swagger.tags = ['ROTA TAGS']
    // #swagger.description = 'Método responsável por atualizar algum(s) dado(s) de alguma tag em específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
        "id": 2,
        "tag_nome": "Saude Física",
        "tag_descricao": "Eessa descrição foi atualizada",
        },
        description: 'OK - Dado(s) da tag {id} atualizado(s) com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Dado(s) da tag não atualizado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O(s) dado(s) da tag não foi atualizado pois não existe.'
      }
    */

    try {
      const tag = await Tag.findByPk(req.params.id);
      if (tag) {
        await tag.update(req.body);
        return res.status(200).json(tag);
      }
      else {
        return res.status(200).json({ mensagem: "Tag não encontrada para atualização" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    // #swagger.tags = ['ROTA TAGS']
    // #swagger.description = 'Método responsável por deletar uma tag em específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
        "id": 2,
        "tag_nome": "Saude Física",
        "tag_descricao": "Tudo que envolver a saude fisica será setado com essa tag",
        },
        description: 'OK - Tag deletada com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: Tag não deletada por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'Tag não pode ser deletada pois não existe.'
      }
    */
    try {
      const tag = await Tag.findByPk(req.params.id);
      if (tag) {
        await tag.destroy();
        return res.status(200).json(tag);
      }
      else {
        return res.status(200).json({ mensagem: "Tag não encontrado para deletar" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
module.exports = new TagController();