'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groupmembers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        groupmembers.belongsTo(models.users,{
        foreignKey: 'userid',
        onDelete:'CASCADE'
      }),
      groupmembers.belongsTo(models.groups,{
        foreignKey: 'groupid',
        onDelete:'CASCADE'
      })
    }
  }
  groupmembers.init({
    userid: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groupmembers',
  });
  return groupmembers;
};