const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	headline: {
		type: String,
		unique: true
	},
	summary: {
		type: String,
		unique: true,
		required: true
	},
	url: {
		type: String,
		unique: { index: { unique: true } },
		required: true
	},
	saved: {
		type: Boolean,
		default: false
	},
	img: {
		type: String
	},
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]

});

module.exports = mongoose.model('Article', articleSchema);