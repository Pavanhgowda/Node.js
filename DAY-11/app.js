const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const Error404=require('./controllers/error');

//###########################################################
//Working with ejs

app.set('view engine','ejs');
app.set('views','views');


//###########################################################
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(Error404);

app.listen(3000);
