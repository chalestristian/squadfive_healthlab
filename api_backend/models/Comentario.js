const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Comentario = sequelize.define("Comentario", {
    conteudo_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    usuario_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    comentario_descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  })
  return Comentario;
}