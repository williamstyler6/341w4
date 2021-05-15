const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.getAddProduct);

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

module.exports = router;