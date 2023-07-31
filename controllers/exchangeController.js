const express = require('express');
const router = express.Router();
const { Exchange } = require('../models');

// GET all exchanges////////////////////
router.get('/', async (req, res) => {
  try {
    const exchanges = await Exchange.findAll();
    res.json(exchanges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one exchange////////////////////////
router.get('/:id', async (req, res) => {
  try {
    const exchange = await Exchange.findOne({ where: { id: req.params.id } });
    if (exchange) {
      res.json(exchange);
    } else {
      res.status(404).json({ message: 'Exchange not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new exchange ////////////////////
router.post('/', async (req, res) => {
  try {
    const exchange = await Exchange.create({
      bookId: req.body.bookId,
      userId: req.body.userId,
      exchangeDate: new Date(),
    });
    res.json(exchange);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE ////////////////////////
router.delete('/:id', async (req, res) => {
  try {
    const exchange = await Exchange.findOne({ where: { id: req.params.id } });
    if (exchange) {
      await exchange.destroy();
      res.json({ message: 'Exchange deleted' });
    } else {
      res.status(404).json({ message: 'Exchange not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT update///////////////////////
router.put('/:id', async (req, res) => {
  try {
    const exchange = await Exchange.findOne({ where: { id: req.params.id } });
    if (exchange) {
      await exchange.update({
        bookId: req.body.bookId,
        userId: req.body.userId,
        exchangeDate: req.body.exchangeDate ? new Date(req.body.exchangeDate) : new Date(),
      });
      res.json({ message: 'Exchange updated' });
    } else {
      res.status(404).json({ message: 'Exchange not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

