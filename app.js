// var http = require('http');

// var myServer = http.createServer(function(req, res) {
//   res.writeHead(200, {"Content-Type" : "text/html"});
//   res.write("<h1>Meetups clone!</h1>");
//   res.end();
// });

// myServer.listen(3000);
// console.log("this is running");
var express = require('express');
var reload = require('reload');

var app = express();

var datafile = require('./data/writers.json');

app.set('writersData', datafile);

app.set('port', process.env.PORT || 3000);

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/writers'));

var server = app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port'));
});

reload(server, app);
