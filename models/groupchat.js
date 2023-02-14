'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groupchat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      groupchat.belongsTo(models.users,{
        foreignKey: 'userid',
        onDelete:'CASCADE'
      }),
      groupchat.belongsTo(models.groups,{
        foreignKey: 'groupid',
        onDelete:'CASCADE'
      })
    }
  }
  groupchat.init({
    userid: DataTypes.INTEGER,    
    groupid: DataTypes.INTEGER,
    datesent: DataTypes.DATE,
    timesent: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'groupchat',
  });
  return groupchat;
};