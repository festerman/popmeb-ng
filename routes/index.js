var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET helloworld page */
router.get('/helloworld', function(req, res, next){
  res.render('helloworld', {title: 'Helloooo, world!!!'});
});

module.exports = router;
