const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));

let personajes = ['Homero', 'Marge', 'Maggie'];

app.get('/', (req, res) => {
	res.status(200).json(personajes);
});

// -----
app.get('/:num', (req, res) => {
	const result = personajes[req.params.num];
	res.status(200).send(result);
});

app.post('/:name', (req, res) => {
	const name = req.params.name;
	personajes.push(name);
	res.status(200).json(personajes);
});

app.delete('/:name', (req, res) => {
	const name = req.params.name;
	personajes = personajes.filter((p) => p !== name);
	res.status(200).json(personajes);
});

app.listen(port, () => {
	console.log(`Example server listening at http://localhost:${port}`);
});
