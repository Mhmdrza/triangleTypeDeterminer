var triangleTypeDeterminer = require('../utils/type-determiner')
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/typeDeterminer', function(req, res) {
    var isAccepted = true;
    var par1 = parseFloat(req.query.side1)
    var par2 = parseFloat(req.query.side2)
    var par3 = parseFloat(req.query.side3)
    if( isNaN(par1) || isNaN(par2) || isNaN(par3)){
        isAccepted = false
    }
    if(isAccepted){
        var response = triangleTypeDeterminer(par1, par2, par3)   
        res.setHeader('Content-Type', 'application/json'); 
        res.send(JSON.stringify(response));
    }else{
        res.status(400);
        res.send('Expected a number as parameter');
    }
});

app.post('/typeDeterminer', function(req, res) {
    var par1 = parseFloat(req.body.side1)
    var par2 = parseFloat(req.body.side2)
    var par3 = parseFloat(req.body.side3)
    var response = triangleTypeDeterminer(par1, par2, par3)   
    res.setHeader('Content-Type', 'application/json'); 
    res.send(JSON.stringify(response));
});

app.listen(5002);
console.log('Listening on port 5002...');

