var express = require('express');
var router = express.Router();
//var News = require('../models/News');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('news', {});
});

/*
router.get('/:id', function(req, res, next) {
  News.findById(req.body._id, function(err, news) {
    console.log(req.body);
    if(err) {
      console.log(err);
      return next();
    }

    res.render('/:id');
});
*/
module.exports = router;