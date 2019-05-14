const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

//form: name (text), race(radio), class(radio), background(radio), alignment(radio), armor

//random: abilities
//class -> hitDie, hitPoints.max
//ability -> abilityMods, skillMods
//misc -> proficiency

const Character = new Schema({
	name: String,
	race: String,
	class: String,
	hitDie: Number,
	background: String,
	alignment: String,
	level: { type: Number, default: 1 },
	profMod: { type: Number, default: 2 },
	armor: Number,
	hitPoints: {
		max: Number,
		cur: Number,
		temp: { type: Number, default: 0 }
	},
	ability: {
		str: Number,
		strMod: Number,
		dex: Number,
		dexMod: Number,
		int: Number,
		intMod: Number,
		wis: Number,
		wisMod: Number,
		con: Number,
		conMod: Number,
		cha: Number,
		chaMod: Number
	},
	skillMod: {
		athletics: Number,
		acrobatics: Number,
		sleightOfHand: Number,
		stealth: Number,
		arcana: Number,
		history: Number,
		investigation: Number,
		nature: Number,
		religion: Number,
		animalHandling: Number,
		insight: Number,
		medicine: Number,
		perception: Number,
		survival: Number,
		deception: Number,
		intimidation: Number,
		performance: Number,
		persuasion: Number
	},
	proficiency: {
		weapon: [ String ],
		armor: [ String ],
		skill: [ String ],
		save: [ String ]
	}
});

module.exports = mongoose.model('Character', Character);
