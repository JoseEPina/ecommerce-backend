const sequelize = require('../config/connection'); // import sequelize connection
const { Model, DataTypes } = require('sequelize'); // import Model and DataTypes from sequelize

// declare and initialize Tag model (table) by extending from Sequelize's Model class
class Tag extends Model {}

Tag.init(
   {
      // define columns
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      tag_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'tag',
   }
);

module.exports = Tag;
