const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
   console.log('======================');
   // find all tags
   // be sure to include its associated Product data
   Tag.findAll()
      .then((dbTagData) => res.json(dbTagData))
      .catch((err) => {
         console.log(err);
         res.status(500).send(err);
      });
});

router.get('/:id', (req, res) => {
   console.log('======================');
   // find a single tag by its `id`
   // be sure to include its associated Product data
   Tag.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'tag_name'],
      include: [
         {
            model: Product,
            attributes: ['product_name', 'price', 'stock'],
         },
      ],
   })
      .then((dbTagData) => {
         if (!dbTagData) {
            res.status(404).json({ message: 'No tag found with this id' });
            return;
         }
         res.json(dbTagData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
   console.log('======================');
   // create a new tag
   Tag.create({ tag_name: req.body.tag_name })
      .then((dbTagData) => res.json(dbTagData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
   console.log('======================');
   // update a tag's name by its `id` value
   Tag.update({ tag_name: req.body.tag_name }, { where: { id: req.params.id } })
      .then((dbTagData) => {
         if (!dbTagData) {
            res.status(404).json({ message: 'No tag found with this id.' });
            return;
         }
         res.json(dbTagData);
      })
      .catch((err) => {
         console.log(err);
         res.status(err).json(err);
      });
});

router.delete('/:id', (req, res) => {
   console.log('======================');
   // delete on tag by its `id` value
   Tag.destroy({ where: { id: req.params.id } })
      .then((dbTagData) => {
         if (!dbTagData) {
            res.status(404).json({ message: 'No tag found with this id.' });
            return;
         }
         res.json(dbTagData);
      })
      .catch((err) => {
         console.log(err);
         res.status(err).json(err);
      });
});

module.exports = router;
