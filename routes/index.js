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

/* temporarily */
router.get('/dataset/add', function (req, res) {
  res.render('newdataset', { title: 'Add new dataset'});
});

module.exports = router;
