const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
var http = require('http'),
    fs = require('fs');



const app = express();

app.use(morgan('dev'));

app.get('/', (req,res) => {

    fs.readFile('./info.html', function (err, html) {
        if (err) {
            throw err; 
        }else{
    
            res.write(html);  
            res.end();  
        }      
    });
   
});

app.get('/2', (req,res) => {

    fs.readFile('./2.html', function (err, html) {
        if (err) {
            throw err; 
        }else{
    
            res.write(html);  
            res.end();  
        }      
    });
   
});

app.post('/api/login',(req,res) => {
    const user = {id : 3};
    const token = jwt.sign({user},'mysecret');

    res.json({
        token
    });
});


app.get('/api/protegida', ensureToken , (req,res) => {
    
    jwt.verify(req.token,'mysecret',(err,data) => {
        if(err){
            res.status(404);
        }else{
            res.json({
                text : 'protegido',
                data
            });
        }
    });

});

app.listen(3000, () => {
    console.log('server on port 3000 ');
    
});

app.get('/login',(req,res) => {
    fs.readFile('./login.html', function (err, html) {
        if (err) {
            throw err; 
        }else{
    
            res.write(html);  
            res.end();  
        }       
    
       
    });
});




function ensureToken(req,res,next){
    const bearerHeader =  req.headers['authorization'];
   
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        req.token = bearerToken
        next();
    }else{
        //res.sendStatus(403);

        res.app.get();
    }
}
