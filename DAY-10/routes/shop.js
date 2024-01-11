const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const renderData=require('./admin');

router.get('/', (req, res, next) => {
  const products=renderData.prods;
  res.render('shop',{pageTitle:'Shop',product:products,path:'/',hasProducts:products.length>0,productCSS:true});
});

module.exports = router;
