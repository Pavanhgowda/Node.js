const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products=require('./admin');

const product=require('../controllers/products');

router.get('/', product.getProducts);

module.exports = router;
