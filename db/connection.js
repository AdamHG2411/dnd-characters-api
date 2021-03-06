const mongoose = require('mongoose');

mongoose.Promise = Promise;

if (process.env.NODE_ENV == 'production') {
	mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
} else {
	mongoose.connect('mongodb://localhost/dnd-characters', { useNewUrlParser: true });
}

module.exports = mongoose;
