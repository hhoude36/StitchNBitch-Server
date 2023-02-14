'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      invite.belongsTo(models.users,{
        foreignKey: 'inviteeid',
        onDelete:'CASCADE'
      }),

      invite.belongsTo(models.users,{
        foreignKey: 'inviterid',
        onDelete:'CASCADE'
      }),

      invite.belongsTo(models.groups,{
        foreignKey: 'groupid',
        onDelete:'CASCADE'
      })

    }
  }
  invite.init({
    inviteeid: DataTypes.INTEGER,
    inviterid: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    response: DataTypes.STRING,
    datesent: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'invite',
  });
  return invite;
};