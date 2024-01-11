const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const express_handlebars = require('express-handlebars'); //importing Handlebars

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//##########################################################################


app.engine('hbs',express_handlebars({layoutDir:'views/layouts',defaultLayout:'main-layout',extname:'hbs'}));//using handlebars and setting layout in handlebars.
app.set('view engine','hbs');


//##########################################################################

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routerData);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'Page not Found'});
});

app.listen(3000);
