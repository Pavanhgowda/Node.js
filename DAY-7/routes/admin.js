//Use router from express.js
const express=require('express');
const router=express.Router();

router.post('/display-users',(req,res,next)=>{ //Using the app.post to check the request contains the POST http method.
    console.log(req.body); //output the data from the form request.
    res.redirect('/');
})

router.use('/add-users',(req,res,next)=>{
    res.send('<form action="/display-users" method="POST"><input type="text" name="users"/><button type="submit">send</button></form>');
})

module.exports=router;