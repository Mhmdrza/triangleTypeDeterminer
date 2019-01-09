var express = require('express');
var app = express();
var triangleTypeDeterminer = require('../utils/type-determiner')

app.get('/typeDeterminer/:side1/:side2/:side3', function(req, res) {
    let type = triangleTypeDeterminer(req.params.side1, req.params.side2, req.params.side3)   
    res.setHeader('Content-Type', 'application/json'); 
    res.send(JSON.stringify({ 'type' : type}));
 });
 
app.listen(5002);
console.log('Listening on port 5002...');

