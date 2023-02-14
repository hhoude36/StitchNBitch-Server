'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      meetingtime: {
        type: Sequelize.TIME
      },
      adminid: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      meetinglocation: {
        type: Sequelize.STRING
      },
      meetingday: {
        type: Sequelize.STRING
      },
      groupinterestes: {
        type: Sequelize.STRING
      },
      inviteonly: {
        type: Sequelize.STRING
      },
      imagetype: {
        type: Sequelize.STRING
      },
      imagename: {
        type: Sequelize.STRING
      },
      imagedata: {
        type: Sequelize.BLOB
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
    await queryInterface.dropTable('groups');
  }
};