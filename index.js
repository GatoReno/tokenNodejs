const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');




const app = express();

app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.json({
        text : 'api works'
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
    /*
        res.json({
            text : 'protegido'
        });
    */
});

app.listen(3000, () => {
    console.log('server on port 3000 ');
    
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
        res.sendStatus(403);
    }
}
