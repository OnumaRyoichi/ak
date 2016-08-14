var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('recruit', {});
<<<<<<< HEAD
  console.log('OHNUMA IS DEAD');
=======
  console.log('BABOLAT SINE');
>>>>>>> 75ba317cb44a8cdf822bac48122d7bb439d59c4c
});

router.get('/esports', function(req, res, next) {
  res.render('esports', {});
});

router.get('/ses', function(req, res, next) {
  res.render('ses', {});
});

module.exports = router;
