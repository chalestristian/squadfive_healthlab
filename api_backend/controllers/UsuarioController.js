const { Usuario } = require('../models/');
const { Op, DOUBLE } = require("sequelize");

class UsuarioController {

  async create(req, res) {
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