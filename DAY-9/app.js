const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// ###########################################################
//Setting templating engine 'pug'.

app.set('view engine','pug'); //initialising
app.set('views','views');  //setting the path



//###########################################################
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:"Page not Found"});
});

app.listen(3000);
