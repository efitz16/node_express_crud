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
var io = require('socket.io')();

app.set('port', process.env.PORT || 3000);
app.set('writersData', datafile);
app.set('view engine', 'ejs');
app.set('views', './views');

app.locals.globalPageTitle = "Writers";
app.locals.pageWriters = datafile.writers;

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/writers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var server = app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port'));
});

io.attach(server);

io.on('connection', function(socket) {
  console.log('User connected');
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});

reload(server, app);
