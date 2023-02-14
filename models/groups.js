'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      groups.belongsTo(models.users,{
        foreignKey: 'adminid',
        onDelete:'CASCADE'
      }),
      groups.hasMany(models.invite,{
        foreignKey: 'groupid'
      }),
      groups.hasMany(models.groupmembers,{
        foreignKey: 'groupid'
      }),
      groups.hasMany(models.groupchat,{
        foreignKey: 'groupid'
      })
    }
  }
  groups.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    meetingtime: DataTypes.TIME,
    adminid: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    meetinglocation: DataTypes.STRING,
    meetingday: DataTypes.STRING,
    groupinterestes: DataTypes.STRING,
    inviteonly: DataTypes.STRING,
    imagetype: DataTypes.STRING,
    imagename: DataTypes.STRING,
    imagedata: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'groups',
  });
  return groups;
};