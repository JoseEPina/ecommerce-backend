const { Category } = require('../models'); // import Category Model

// data to seed Category Model
const categoryData = [
   {
      category_name: 'Shirts',
   },
   {
      category_name: 'Shorts',
   },
   {
      category_name: 'Music',
   },
   {
      category_name: 'Hats',
   },
   {
      category_name: 'Shoes',
   },
];

// declares seedCategories function that uses Sequelizer.Model.bulkCreate() method to
// create table rows from categoryData
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories; // exports seedCategories function
