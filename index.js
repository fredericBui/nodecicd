var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
});

app.listen(3000);
console.log('Server started on port http://localhost:3000');