
var express = require('express');
var fs = require('fs');

var index = fs.readFileSync('index.html');
var app = express.createServer(express.logger());


buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');

app.get('/', function(request, response) {
	response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


