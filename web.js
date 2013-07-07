var express = require('express');
var fs = require('fs');

var txtfile = fs.readFileSyn('index.html');
var hellobuf = new Buffer(txtrfile, "utf-8")
 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hellobuf.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
