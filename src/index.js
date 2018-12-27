

const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');


const app = express();

//settings
app.set('port', process.env.PORT || 3000); //puerto
app.set('views',path.join(__dirname,'views')); //vistas
app.engine('.hbs',hbs({
    defaultLayout : 'main',
    layoutsDir : path.join(app.get('views'),'layouts'),
    partialsDir : path.join(app.get('views'),'partials'),
    extname : '.hbs',
    helpers : require ('./lib/handlebars')
})); // usar handle bars

app.set('view engine', '.hbs');
app.use(express.urlencoded({extended : false}));
app.use(express.json);
//... end settings
 
//middle-ware
app.use(morgan('dev')); 


//... end middle-ware
//global variables
app.use((req,res,next) => {
    next();
});

//... end global v

//routes
app.use(require('./routes'));
app.use(require('./routes/authentications'));
app.use(require('./routes/links'));

//public
app.use(express.static(path.join(__dirname,'public')));


//... end public
//start



app.listen(3000, () => {
    console.log('server on port 3000 ');
    
});


/*
app.use(session({
    secret : "secret",
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
*/


