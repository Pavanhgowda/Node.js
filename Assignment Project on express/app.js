//Assignment Routing different MiddleWare.

const express=require('express');
const app=express();
app.use('/users',(req,res,next)=>{
    res.send('<h1>Welcome Users');
});
app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to express.js');
});


app.listen(3000,()=>{console.log('Listening to the port 3000');})
