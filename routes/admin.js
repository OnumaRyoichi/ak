var express = require('express');
var router = express.Router();
var News = require('../models/News');
var mongoose = require('mongoose');

// connection database
mongoose.connect('mongodb://localhost/ak_corporate', function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('connection success!');
	}
});

/* connection test */
/*
News.find({}, function(err, docs) {
	if(!err) {
		console.log('num of item =>' + docs.length);
		for(var i = 0; i < docs.length; i++) {
			console.log(docs[i]);
		}
		mongoose.disconnect();
		process.exit();
	} else {
		console.log('find error');
	}
});
*/

// news list
router.get('/', function(req, res, nex) {
	News.find({}, function(err, newsList) {
		res.render('admin', {
			csrf: req.csrfToken(),
			newsList: newsList,
			errors: req.flash('errors').shift()
		});
		console.log(newsList);
	});
});

// delete news
router.delete('/destoroy', function(req, res, next) {
	News.findById(req.body._id, function(err, news) {
		if(err) {
			console.log(err);
			return next();
		}

		news.remove();
		res.redirect('/admin');
	});
});

// create news
router.post('/create', function(req, res, next) {
	var news = new News();
	news.title = req.body.title;
	news.contents = req.body.contents;

	news.save(function(err) {
		if(err) {
			req.flash('errors', err.errors);
			res.redirect('/admin');
		} else {
			res.redirect('/admin');
		}
	});
});

module.exports = router;