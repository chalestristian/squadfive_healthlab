'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Conteudos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Conteudos');
  }
};