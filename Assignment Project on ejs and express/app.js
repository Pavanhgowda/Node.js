const express =require('express');
const app=express();
const path=require('path');

//Setting the router.
const home=require('./router/home');
const names=require('./router/names');
const bodyParser=require('body-parser');

//Using the path to get the css files.
app.use(express.static(path.join(__dirname,'public')));

//Adding the ejs template.
app.set('view engine','ejs');
app.set('views','views');


//Using the bodyParser
app.use(bodyParser.urlencoded({extended:false}));
//Using the router.
app.use(names);
app.use(home);
//Setting 404 Page.
app.use((req,res,next)=>{
    res.render('404',{pageTitle:'Page not Found'});
})

app.listen(3000,()=>{'Listening to the server 3000'});