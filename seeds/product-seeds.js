const { Product } = require('../models'); // import Product Model

// data to seed Product Model
const productData = [
   {
      product_name: 'Plain T-Shirt',
      price: 14.99,
      stock: 14,
      category_id: 1,
   },
   {
      product_name: 'Running Sneakers',
      price: 90.0,
      stock: 25,
      category_id: 5,
   },
   {
      product_name: 'Branded Baseball Hat',
      price: 22.99,
      stock: 12,
      category_id: 4,
   },
   {
      product_name: 'Top 40 Music Compilation Vinyl Record',
      price: 12.99,
      stock: 50,
      category_id: 3,
   },
   {
      product_name: 'Cargo Shorts',
      price: 29.99,
      stock: 22,
      category_id: 2,
   },
];

// declares seedProducts function that uses Sequelizer.Model.bulkCreate() method to
// create table rows from productData
const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts; // exports seedProducts function
