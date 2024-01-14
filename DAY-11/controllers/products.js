const Product=require('../models/product');

exports.getAddProducts=(req, res, next) => {
    res.render('add-product',{pageTitle:"Add Product"});
  }

exports.postAddProducts=(req, res, next) => {
    console.log(req.body);
    const productList= new Product(req.body.title);
    productList.save();
    res.redirect('/');
  }

  exports.getProducts=(req, res, next) => {
    const products = Product.fetchAll(allprod=>{
      res.render('shop',{pageTitle:'Shop',product:allprod});
    })
    
  }
