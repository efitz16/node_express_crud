var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.send(`
  	<link rel="stylesheet" type="text/css" href="css/styles.css">
  	<h1>Writers</h1>
  	<script src="/reload/reload.js"></script>
  	`);
});

module.exports = router;
