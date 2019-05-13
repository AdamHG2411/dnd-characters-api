const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Character = new Schema({
	name: String,
	race: String,
	class: String,
	level: Number,
	armor: Number,
	ability: {
		str: Number,
		dex: Number,
		int: Number,
		wis: Number,
		end: Number,
		cha: Number
	},
	proficiency: {
		skill: [ String ],
		save: [ String ],
		tool: [ String ]
	}
});

module.exports = mongoose.model('Character', Character);
