//DAY 6 Working with Routes in express.js
const express=require("express");
const app=express();
app.use('/add-product',(req,res,next)=>{ // routes
    res.send('<h1>Welcome to Routing');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to express</h1>');
});
app.listen(3000,()=>{console.log('Listening to the port 3000')});