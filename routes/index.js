var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('index', {
  	pageTitle: 'Writers Home',
  	pageId: 'home'
  });
});

module.exports = router;
