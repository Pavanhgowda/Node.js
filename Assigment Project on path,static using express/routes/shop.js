const express=require('express');
const router=express.Router();
const path=require('path');

router.post('/add-cart',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","cart.html"));
 });

 router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports=router;