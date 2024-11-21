const express = require('express');
const router = express.Router();
const Product = require('../models/Product.jsx'); 

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});

module.exports = router;  