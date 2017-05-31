var express = require('express');
var router = express.Router();

router.get('/writers', function(request, response) {
  var info = '';
  var datafile = request.app.get('writersData');
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
    <script src="/reload/reload.js"></script>
  	`);
});

router.get('/writers/:writerid', function(request, response) {
   var datafile = request.app.get('writersData');
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
    <script src="/reload/reload.js"></script>
  	`);
});

module.exports = router;
