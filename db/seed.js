const mongoose = require('./connection.js');
const characters = require('./characters.json');
const Character = require('./models/Character.js');

Character.find().deleteMany(() => {
	Character.create(characters);
});
