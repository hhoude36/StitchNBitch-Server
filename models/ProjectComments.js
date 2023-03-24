'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProjectComments.belongsTo(models.projects,{
        foreignKey: 'projectid',
        onDelete:'CASCADE'
      })
    }
  }
  ProjectComments.init({
    userid: DataTypes.INTEGER,
    projectid: DataTypes.INTEGER,
    message: DataTypes.STRING,
    like: DataTypes.BOOLEAN,
    saved: DataTypes.BOOLEAN,
  
  }, {
    sequelize,
    modelName: 'ProjectComments',
  });
  return ProjectComments;
};