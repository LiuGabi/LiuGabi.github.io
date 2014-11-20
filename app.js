var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));
app.listen(88,"127.0.0.1");