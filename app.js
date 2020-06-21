var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Metoda get');
});


app.post('/post', function(req, res) {
    res.send('Metoda post');
});

app.listen(3000);