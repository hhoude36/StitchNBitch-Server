'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      projects.belongsTo(models.users,{
        foreignKey: 'userid',
        onDelete:'CASCADE'
      })
    }
  }
  projects.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    progress: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    giftedto: DataTypes.STRING,
    notes: DataTypes.STRING,
    imagetype: DataTypes.STRING,
    imagename: DataTypes.STRING,
    imagedata: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};