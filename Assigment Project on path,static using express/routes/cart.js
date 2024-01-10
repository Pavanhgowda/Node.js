const express=require('express');
const router=express.Router();


router.post('/checkout',(req,res,next)=>{
    res.redirect('/');
})


module.exports=router;