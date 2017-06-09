var express = require('express');
var router = express.Router();

router.get('/writers', function(request, response) {
  // old:
  // var info = '';
  // var datafile = request.app.get('writersData');
  // datafile.writers.forEach(function(item) {
  //   info += `
  //     <li><h2>${item.name}</h2>
  //       <p>${item.biography}</p>
  //     </li>
  //   `;
  // });
  // response.send(`
  // 	<h1>Writers</h1>
  // 	${info}
  //   <script src="/reload/reload.js"></script>
  // 	`);

  var data = request.app.get('writersData');
  // var writersPhotos = [];

  // data.writers.forEach(function(item){
  //  writersPhotos = writersPhotos.concat(item.photo);
  // })

  response.render('writers', {
    pageTitle: 'Writers',
    pageId: 'writers'
    // photo: writersPhotos
  });
});

router.get('/writers/:writerid', function(request, response) {
   var data = request.app.get('writersData');
   var pageWriters = []; // aparently you can overwrite app.locals
  // var writersPhotos = [];

  data.writers.forEach(function(item){
    if (item.shortname == request.params.writerid) {
      pageWriters.push(item);
    }
   // writersPhotos = writersPhotos.concat(item.photo);
  });

  response.render('writers', {
    pageTitle: 'Writer',
    pageId: 'writersDetail',
    pageWriters: pageWriters
    // photo: writersPhotos
  });
});

module.exports = router;
