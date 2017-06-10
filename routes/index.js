var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  var data = request.app.get('writersData');
  // var writersPhotos = [];

  // data.writers.forEach(function(item){
  // 	writersPhotos = writersPhotos.concat(item.photo);
  // })s

  response.render('index', {
  	pageTitle: 'Writers Home',
  	pageId: 'home'
  	// photo: writersPhotos
  });
});

module.exports = router;
