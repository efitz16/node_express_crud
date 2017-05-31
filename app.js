// var http = require('http');

// var myServer = http.createServer(function(req, res) {
//   res.writeHead(200, {"Content-Type" : "text/html"});
//   res.write("<h1>Meetups clone!</h1>");
//   res.end();
// });

// myServer.listen(3000);
// console.log("this is running");
var express = require('express');

var app = express();

var datafile = require('./data/writers.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  response.send(`
  	<h1>Writers</h1>
  	`);
});

app.get('/writers', function(request, response) {
  var info = '';
  datafile.writers.forEach(function(item) {
    info += `
      <li><h2>${item.name}</h2>
        <p>${item.biography}</p>
      </li>
    `;
  });
  response.send(`
  	<h1>Writers</h1>
  	${info}
  	`);
});

app.get('/writers/:writerid', function(request, response) {
  var writer = datafile.writers[request.params.writerid];
  var writerInfo = '';
  var booksInfo = '';
    writer.famousWorks.forEach(function(work) {
      booksInfo += 
        `<li>${work}</li>`;
    });

    writerInfo += `
      <h2>${writer.name}</h2>
      <h4>${writer.placeOfBirth}</h4>
      <h3>Famous Books</h3>
      <ul> 
        ${booksInfo}
      </ul>
      <h4></h4>
      <p>${writer.biography}</p>
    `;
  response.send(`
  	${writerInfo}
  	`);
});

var server = app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port'));
});