var express = require('express');
var http = require('http');
var app = express();

app.use(express.static('./'));
var port = process.env.PORT || 3000;
var server = http.createServer(app).listen(port);
