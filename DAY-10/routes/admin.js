const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle:"Add Product",formsCSS:true,productCSS:true})
});

const products=[];

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title:req.body.title});
  res.redirect('/');
});


exports.routerData=router;
exports.prods=products;
