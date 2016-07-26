var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: {
		type: String,
		required: 'title is required'
	},
	contents: {
		type: String,
		default: ''
	},
	created: {
		type: Date,
		default: Date.now
	},
	modified: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('news', PostSchema);