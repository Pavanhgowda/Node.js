const path = require('path');

const express = require('express');

const productsController = require('../controllers/shop');
const adminController=require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/products => GET
router.get('/adminProducts',adminController.products);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.get('/Checkout',adminController.checkout);



module.exports = router;
