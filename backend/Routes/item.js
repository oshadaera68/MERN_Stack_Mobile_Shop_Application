const express = require('express');
const app = express();
const router = express.Router();
const Item = require('../model/item.model');

app.use(express.json());

router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

router.post('/item', async (req, res) => {
  const item = new Item({
    itemId: req.body.itemId,
    itemName: req.body.itemName,
    itemQty: req.body.itemQty,
    itemPrice: req.body.itemPrice,
  });

  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ error: 'Error adding item' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching item' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    item.itemId = req.body.itemId;
    item.itemName = req.body.itemName;
    item.itemQty = req.body.itemQty;
    item.itemPrice = req.body.itemPrice;
    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: 'Error updating item' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const response = await item.remove();
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

module.exports = router;
