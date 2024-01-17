exports.products=(req,res,next)=>{
    res.render('admin/products',{pageTitle:'Products',path:'/products'});
}

exports.checkout=(req,res,next)=>{
    res.render('shop/checkout',{pageTitle:"Checkout",path:'/checkout'});
  }