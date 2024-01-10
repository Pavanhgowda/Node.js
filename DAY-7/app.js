//DAY-7 Using res.redirect(), Playing with form data using  "body-parser" npm package,
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const myRoutes=require('./routes/admin')
app.use(bodyParser.urlencoded({extended:false}));//take the request chunk data and converts into data.

app.use('/admin',myRoutes);//Setting a router and adding a filter.

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to home page</h1>');
})

app.use((req,res,next)=>{  //Setting 404 Status
    res.status(404).send('<h1>Page Not Found!!!</h1>')});

app.listen(3000,()=>{
    console.log('Listening on the port 3000');
})