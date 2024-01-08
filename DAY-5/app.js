//DAY-5 Creating server using Express.js Middleware.
const express=require('express');
const app=express();

//Middleware-1
app.use((req,res,next)=>{
    console.log('Middleware 1');
    next(); //Alows the request to continue to the next middleware.
})

//Middleware-2
app.use((req,res,next)=>{
    console.log('Middleware 2');
    res.send('<h1>Hello from Express</h1>');
})
app.listen(3000);
