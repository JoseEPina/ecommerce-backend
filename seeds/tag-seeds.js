const { Tag } = require('../models'); // import Tag Model

// data to seed Tag Model
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// declares seedTags function that uses Sequelizer.Model.bulkCreate() method to
// create table rows from tagData
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags; // exports seedTags function
