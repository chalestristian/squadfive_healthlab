const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Conteudo = sequelize.define("Conteudo", {
    titulo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    subtitulo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    autor: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    resumo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  })
  return Conteudo;
}