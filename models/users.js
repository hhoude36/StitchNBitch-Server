'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.groups,{
        foreignKey: 'adminid'
      }),
      users.hasMany(models.projects,{
        foreignKey: 'userid'
      }),
      users.hasMany(models.invite,{
        foreignKey: 'inviteeid'
      }),
      users.hasMany(models.invite,{
        foreignKey: 'inviterid'
      }),
      users.hasMany(models.groupmembers,{
        foreignKey: 'userid'
      }),
      users.hasMany(models.groupchat,{
        foreignKey: 'userid'
      })
      users.hasMany(models.projectcomments,{
        foreignKey: 'userid'
      })
    }
  }
  users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    interests: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    usertype: DataTypes.STRING,
    about: DataTypes.STRING,
    imagetype: DataTypes.STRING,
    imagename: DataTypes.STRING,
    imagedata: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};