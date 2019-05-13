const Character = require('../db/models/Character.js');

module.exports = {
	index: (req, res) => {
		Character.find({}).then((characters) => {
			res.json(characters);
		});
	},
	show: (req, res) => {
		Character.find({ _id: req.params.id }).then((character) => {
			res.json(character);
		});
	},
	create: (req, res) => {
		Character.create(req.body).then((character) => {
			res.json(character);
		});
	},
	update: (req, res) => {
		Character.update({ _id: req.params.id }, req.body).then((character) => {
			res.json(character);
		});
	},
	delete: (req, res) => {
		Character.delete({ _id: req.params.id }).then((character) => {
			res.json(character);
		});
	}
};
