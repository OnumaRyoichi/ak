var express = require('express');
var router = express.Router();
var Admin = require('../models/Admin');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ak_corporate', function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('connection success!');
	}
});

var admin_account = new Admin({
	id: 'admin',
	password: 'admin'
});
admin_account.save(function(err) {
	console.log(err);
});

router.get('/', function(req, res, next) {
	Admin.find({}, function(err, adminAccount) {
		console.log(adminAccount);
	});
  res.render('admin_login', {});
});

module.exports = router;