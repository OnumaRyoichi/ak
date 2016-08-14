var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('recruit', {});
});

router.get('/new', function(req, res, next) {
  res.render('new', {});
});

router.get('/career', function(req, res, next) {
  res.render('career', {});
});

module.exports = router;