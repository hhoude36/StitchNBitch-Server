'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projectcomments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
        model: 'users',
        key: 'id',
        as: 'userid'
      },
    },
      projectid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
        model: 'projects',
        key: 'id',
        as: 'projectid'
      },
    },
      message: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.BOOLEAN
      },
      saved: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projectcomments');
  }
};