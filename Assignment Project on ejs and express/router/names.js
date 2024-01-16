const express=require('express');
const router=express.Router();
const path=require('path');


router.get('/add-student',(req,res,send)=>{
    res.render('names',{pageTitle:'Add User'})
})

router.post('/add-student',(req,res,send)=>{
    res.redirect('/')
})

module.exports=router;