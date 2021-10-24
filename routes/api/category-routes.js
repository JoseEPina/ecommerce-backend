const router = require('express').Router(); // import Router
const { Category, Product } = require('../../models'); // import models


// GET - the /api/categories - GET all categories endpoint
router.get('/', (req, res) => {
   console.log('======================');
   // find all categories
   // be sure to include its associated Products
   Category.findAll({
      include: {
         model: Product,
         attributes: ['id', 'product_name', 'price', 'stock'],
      },
   })
      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
         console.log(err);
         res.status(500).send(err);
      });
});

// GET - the /api/categories/1 - GET category=1 endpoint
router.get('/:id', (req, res) => {
   console.log('======================');
   // find one category by its `id` value
   // be sure to include its associated Products
   Category.findOne({
      where: { id: req.params.id },
      include: {
         model: Product,
         attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
   })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id.' });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

// POST - the /api/categories - CREATE one new category endpoint
router.post('/', (req, res) => {
   console.log('======================');
   // create a new category
   // Expects {category_name: 'Toys'}
   Category.create({ category_name: req.body.category_name })
      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

// PUT - the /api/categories/1 - UPDATE category=1 endpoint
router.put('/:id', (req, res) => {
   console.log('======================');
   // update a category by its `id` value
   Category.update({ category_name: req.body.category_name }, { where: { id: req.params.id } })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id.' });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(err).json(err);
      });
});

// DELETE - the /api/categories/1 - DELETE category=1 endpoint
router.delete('/:id', (req, res) => {
   console.log('======================');
   // delete a category by its `id` value
   Category.destroy({ where: { id: req.params.id } })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id.' });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(err).json(err);
      });
});

module.exports = router;
