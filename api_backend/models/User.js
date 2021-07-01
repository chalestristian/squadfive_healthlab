const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("Usuario", {
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    senha: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    altura: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    peso: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    sexo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  })
  return Usuario;
}