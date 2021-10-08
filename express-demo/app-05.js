// EXPRESS -> Morgan

// morgan es un middleware que nos proporciona información sobre las rutas
//> npm install morgan

var express = require('express');
// "express" nos retorna una función

// Cargamos "morgan"
var morgan = require('morgan');

var app = express();
// app "hereda" todos los métodos de express

// Llamamos a "morgan" (un middleware) en todas las rutas:
app.use(morgan('dev'));
// Al ir a: localhost/3000/api/hola
//< GET /api/hola 304 2.999 ms - -
// 304 -> indica que lo toma de cache (consulta ya hecha previamente)
// Al ir a: localhost/3000/hola
//< GET /hola 404 3.244 ms - 143

// Ejemplo de autenticación mediante middleware:
function isAuhenticated(req, res, next) {
	console.log(true);
	next(); // Si no colocamos "next()", la ejecución SE DETIENE!!!
}

app.get('/log', isAuhenticated, function (req, res) {
	res.send('Autenticado');
});

// REGULAR EXPRESSIONS:
// Esta ruta matcheará acd y abcd
app.get('/ab?cd', function (req, res) {
	// b? -> puede aparecer ninguna ó una sola vez en la ruta
	//		valor mínimo = 0 // valor máximo = 1
	//		/acd, /abcd
	res.send('ab?cd');
});
// Esta ruta matcheará abcd, abbcd, abbbcd, y así sucesivamente
app.get('/ab*cd', function (req, res) {
	// b* -> como mínimo una vez, máximo hasta infinitas veces
	//		valor mínimo = 1 // valor máximo = infinito
	//		abcd (en realidad entra en la ruta anterior primero), abbcd, abbbcd, etc
	res.send('ab*cd');
});
// pasando parámetros
app.get('/api/:id', function (req, res) {
	res.json({ parametro: req.params.id });
	// /api/valor -> req.params.id = valor
});

app.get('/search/:id/:name', function (req, res) {
	// /api/categoria/producto
	// let id = req.params.id;
	// let name = req.params.name;
	// o utilizando "Destructuring:"
	let { id, name } = req.params; // LOS NOMBRES DEBEN MATCHEAR!!!
	// let id = req.params.id -> = categoria
	// let id = req.params.name -> = producto
	res.json({ id: req.params.id, name: req.params.name });
	// Si enviamos /search/:id -> queda esperando /name (se rompe...)
});

// puerto sobre el cual quiero escuchar
app.listen(3000);
// si se instala nodemon:
//> npm nodemon index-03.js
