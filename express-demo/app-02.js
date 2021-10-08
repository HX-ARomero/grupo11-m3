// Express -> Creando un Server

var express = require('express');
// "express" nos retorna una función
var app = express();
// app "hereda" todos los métodos de express

app.get('/', function (req, res) {
	// send -> content-type: text/plain
	// res.end >> sustituído por:
	// res.status(código); // 200 -> El enviado por default
	// res.json({"name": "name"});
	// res.send('Hola Mundo!!!');
	// SIEMPRE ENVIAR RESPUESTA "res.send()"!!!
	let obj = {
		name: 'Ariel',
		age: 42
	};
	res.json(obj);
});

// puerto sobre el cual quiero escuchar
app.listen(3000);
// si se instala nodemon:
//> npm nodemon index-02.js
