var express = require('express');
var app = express();
var triangleTypeDeterminer = require('../utils/type-determiner')

app.get('/typeDeterminer', function(req, res) {
    try{
        var par1 = parseFloat(req.query.side1)
        var par2 = parseFloat(req.query.side2)
        var par3 = parseFloat(req.query.side3)
    }catch{
        res.writeHead( 200 );
        res.write( JSON.stringify( 'invalid data type' ) );
        res.end();;
    }
    var response = triangleTypeDeterminer(par1, par2, par3)   
    res.setHeader('Content-Type', 'application/json'); 
    res.send(JSON.stringify(response));
 });
 
app.listen(5002);
console.log('Listening on port 5002...');

