const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define("Tag", {
    tag_nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    tag_descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  })
  return Tag;
}