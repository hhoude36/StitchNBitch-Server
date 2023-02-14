'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint(
      'groups',
      {
        fields:['adminid'],
        type: 'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'users',
          field: 'id',
          fields: ['adminid']
        }   
      }
    )
    await queryInterface.addConstraint(
      'projects',
      {
        fields:['userid'],
        type: 'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'users',
          field: 'id',
          fields: ['userid']
        }   
      }
    )
    await queryInterface.addConstraint(
      'invites',
      {
        fields:['inviteeid'],
        type: 'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'users',
          field: 'id',
          fields: ['inviteeid']
        }   
      }
    )
    await queryInterface.addConstraint(
      'invites',
      {
        fields:['inviterid'],
        type:'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'users',
          field: 'id',
          fields:['inviterid']
        }
      }
    )
    await queryInterface.addConstraint(
      'invites',
      {
        fields:['groupid'],
        type:'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'groups',
          field: 'id',
          fields:['groupid']
        }
      }
    )
    await queryInterface.addConstraint(
      'groupmembers',
      {
        fields:['userid'],
        type:'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'users',
          field: 'id',
          fields:['userid']
        }
      }
    )
    await queryInterface.addConstraint(
      'groupmembers',
      {
        fields:['groupid'],
        type:'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'groups',
          field: 'id',
          fields:['groupid']
        }
      }
    )
    await queryInterface.addConstraint(
      'groupchats',
      {
        fields:['userid'],
        type: 'foreign key',
        onDelete: 'CASCADE',
        references: {
          table: 'users',
          field: 'id',
          fields: ['userid']
        }   
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
