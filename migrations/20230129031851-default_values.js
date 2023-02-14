'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint(
      'users',
      {
        fields:['username', 'email', 'interests', 'city', 'state', 'about', 'imagename', 'name'],
        type:"default",
        defaultValue: '',
      }
    )
    await queryInterface.addConstraint(
      'projects',
      {
        fields:['name', 'type', 'progress', 'giftedto', 'notes', 'imagename'],
        type:"default",
        defaultValue: '',
      }
    )
    await queryInterface.addConstraint(
      'groups',
      {
        fields:['name', 'description', 'city', 'state', 'meetinglocation', 'imagename', 'meetingday', 'groupinterests', 'inviteonly'],
        type:"default",
        defaultValue: '',
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
