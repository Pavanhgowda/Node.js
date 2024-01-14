const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const product=require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product',product.getAddProducts );


// /admin/add-product => POST
router.post('/add-product',product.postAddProducts);

module.exports=router;
