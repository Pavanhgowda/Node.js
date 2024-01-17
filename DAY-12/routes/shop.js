const path = require('path');

const express = require('express');

const productsController = require('../controllers/shop');

const router = express.Router();

router.post('/admin/add-product', productsController.getProducts);

// router.get('/products',);

router.get('/cart',productsController.addToCart);

router.get('/checkout',);


router.get('/',productsController.getProducts);

module.exports = router;
