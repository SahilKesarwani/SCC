const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DomainSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	imgSrc: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports = Domain = mongoose.model("domain", DomainSchema);
