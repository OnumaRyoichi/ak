var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	id: {
		type: String,
		required: 'id is required'
	},
	password: {
		type: String,
		required: 'password is required'
	}
});

module.exports = mongoose.model('admin', PostSchema);