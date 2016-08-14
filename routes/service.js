var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('recruit', {});
  console.log('BABOLAT SINE');
});

router.get('/esports', function(req, res, next) {
  res.render('esports', {});
});

router.get('/ses', function(req, res, next) {
  res.render('ses', {});
});

module.exports = router;
