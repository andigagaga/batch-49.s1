'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projets.init({
    author: DataTypes.INTEGER,
    name: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.STRING,
    react: DataTypes.BOOLEAN,
    java: DataTypes.BOOLEAN,
    node_js: DataTypes.BOOLEAN,
    socket_io: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'projets',
  });
  return projets;
};