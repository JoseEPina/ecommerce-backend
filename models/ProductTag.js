const { Model, DataTypes } = require('sequelize'); // import Model and DataTypes from sequelize
const sequelize = require('../config/connection'); // import sequelize connection

// declare and initialize ProductTag model (table) by extending from Sequelize's Model class
class ProductTag extends Model {}

ProductTag.init(
   {
      // define columns
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      product_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'product',
            key: 'id',
         },
      },
      tag_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'tag',
            key: 'id',
         },
      },
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product_tag',
   }
);

module.exports = ProductTag;
