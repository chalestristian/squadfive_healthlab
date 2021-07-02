const { Conteudo } = require('../models/');
const { Op, DOUBLE } = require("sequelize");
const { ModuleResolutionKind } = require('typescript');

class ConteudoController {

  async create(req, res) {
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