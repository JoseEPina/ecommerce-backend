const { Model, DataTypes } = require('sequelize'); // import Model and DataTypes from sequelize
const sequelize = require('../config/connection'); // import sequelize connection

// declare and initialize Category model (table) by extending from Sequelize's Model class
class Category extends Model {}

Category.init(
   {
      // define columns
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      category_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'category',
   }
);

module.exports = Category;
