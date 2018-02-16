const mongoose = require('mongoose');

const config = {
	name: {
		type: String,
		required: 'Please enter the name of the task'
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		enum: ['pending', 'ongoing', 'completed'],
		default: 'pending'
	}
};

module.exports = mongoose.model('Task', new mongoose.Schema(config));