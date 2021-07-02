const { Conteudo } = require('../models/');
const { Op, DOUBLE } = require("sequelize");
// const { ModuleResolutionKind } = require('typescript'); -- POSSO DELETAR SERÁ?

class ConteudoController {
  async create(req, res) {
    // #swagger.tags = ['ROTA CONTEUDOS']
    // #swagger.description = 'Método responsável pela criação dos conteudos.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 1,
          "titulo": "Sistemas Distribuidos",
          "subtitulo": "Entenda tudo sobre esse modelo",
          "autor": "Thales Cristian",
          "resumo": "Você sabe oque é um sistema distribuido?",
          "descricao": "Imagine que essa seja a postagem super descritiva",
        },
        description: 'OK - Conteudo criado com sucesso.'
      }
      #swagger.responses[409] = {
        schema: { mensagem: '409 Conflict' },
        description: 'O conteudo não foi criado pois já existe.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O conteudo não foi criado por função a erro.'
      }
    */
    try {
      let conteudo = {
        titulo: String(req.body.titulo),
        subtitulo: String(req.body.subtitulo),
        autor: String(req.body.autor),
        resumo: String(req.body.resumo),
        descricao: String(req.body.descricao),

      }
      const conteudoResult = await Conteudo.create(conteudo);
      return res.status(200).json(conteudoResult);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }
  async getAll(req, res) {
    // #swagger.tags = ['ROTA CONTEUDOS']
    // #swagger.description = 'Método responsável por retornar todos os conteudos.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 2,
          "titulo": "Programação web",
          "subtitulo": "É muito mais do que HTML, CSS e JS",
          "autor": "Miguel Eugenio",
          "resumo": "Ainda existem pessoas que acham que a programação web é apenas HTML, CSS, JS.",
          "descricao": "Imagine que essa seja a postagem super  descritiva",
        },
        description: 'OK - Conteudos retornados com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O conteudo não foi retornado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'Os conteudos não foram retornados pois não existem conteudos.'
      }
    */
    try {
      const conteudo = await Conteudo.findAll({

      });
      return res.status(200).json(conteudo);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  async getOne(req, res) {
    // #swagger.tags = ['ROTA CONTEUDOS']
    // #swagger.description = 'Método responsável por retornar um conteudo específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 4,
          "titulo": "LInguagem Java",
          "subtitulo": "O qual horrível essa linguagem é?",
          "autor": "Bruno Joaquim",
          "resumo": "Se você gosta de Java, saia já do meu blog.",
          "descricao": "Imagine que essa seja a postagem super  critica",
        },
        description: 'OK - Conteudo retornado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O conteudo não foi retornado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O conteudo não foi retornado pois não existe.'
      }
    */
    try {
      const conteudo = await Conteudo.findByPk(req.params.id);
      if (conteudo) {
        return res.status(200).json(conteudo);
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
    // #swagger.tags = ['ROTA CONTEUDOS']
    // #swagger.description = 'Método responsável por atualizar algum(s) dado(s) de algum conteudo em específico com base no ID..'
    /* #swagger.responses[200] = {
        schema: {
          "id": 4,
          "titulo": "Linguagem Java",
          "subtitulo": "Brincadeirinha, apesar de não ser um grande fã, eu compreendo a importância do Java para o mundo da programação.",
          "autor": "Bruno Joaquim",
          "resumo": "Esse blog é para todos que amam programar.",
          "descricao": "Imagine que essa seja a postagem super comprensiva sobre a linguagem java (não quero ser cancelado)"
        },
        description: 'OK - Conteudo atualizado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O conteudo não foi atualizado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O conteudo não foi atualizado pois não existe.'
      }
    */
    try {
      const conteudo = await Conteudo.findByPk(req.params.id);
      if (conteudo) {
        await conteudo.update(req.body);
        return res.status(200).json(conteudo);
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
    // #swagger.tags = ['ROTA CONTEUDOS']
    // #swagger.description = 'Método responsável por deletar um conteudo em específico com base no ID.'
    /* #swagger.responses[200] = {
        schema: {
          "id": 4,
          "titulo": "Linguagem Java",
          "subtitulo": "Brincadeirinha, apesar de não ser um grande fã, eu compreendo a importância do Java para o mundo da programação.",
          "autor": "Bruno Joaquim",
          "resumo": "Esse blog é para todos que amam programar.",
          "descricao": "Imagine que essa seja a postagem super comprensiva sobre a linguagem java (não quero ser cancelado)"
        },
        description: 'OK - Conteudo deletado com sucesso.'
      }
      #swagger.responses[400] = {
        schema: { mensagem: '400 Bad Request' },
        description: 'ERRO: O conteudo não foi deletado por função a erro.'
      }
      #swagger.responses[404] = {
        schema: { mensagem: '404 Not Found' },
        description: 'O conteudo não foi deletado pois não existe.'
      }
    */
    try {
      const conteudo = await Conteudo.findByPk(req.params.id);
      if (conteudo) {
        await conteudo.destroy();
        return res.status(200).json(conteudo);
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
module.exports = new ConteudoController();