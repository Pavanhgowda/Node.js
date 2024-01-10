const express=require('express');
const app=express();
const path=require('path');

const cart=require('./routes/cart');
const shop=require('./routes/shop');

app.use(express.static(path.join(__dirname,'public')));

app.use(shop);
app.use(cart);

app.use((req,res)=>{res.status(404).sendFile(path.join(__dirname,"views","404.html"))})
app.listen(3000,()=>{console.log("Listening to the port 3000")});