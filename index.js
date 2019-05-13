const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/characterRoute.js');

app.use(cors());

app.use(
	parser.urlencoded({
		extended: true
	})
);
app.use(parser.json());

app.use('/', router);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`roll with advantage on ${app.get('port')}`);
});
