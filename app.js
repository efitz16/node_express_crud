var http = require('http');

var myServer = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.write("Meetups clone!");
  res.end();
});

myServer.listen(3000);
console.log("this is running");