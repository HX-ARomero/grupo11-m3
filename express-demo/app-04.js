// Express -> Middlewares

// An HTTP request may pass through a series of Express middlewares before
//  one of the middlewares or route handlers returns the HTTP response.

// Al llegar un request -> lo toma uno o más middlewares...
//  una vez obtenida la respuesta, éste la devuelve y la maneja.
// Un middleware toma el request y maneja la respuesta.
// Los middlewares están entre "response" y "request"

// Pueden utilizarse, por ejemplo, para autenticar el ingreso a cierta url

// "next()" -> Nos permite avanzar al próximo "middleware"

var express = require('express');
// "express" nos retorna una función
var app = express();
// app "hereda" todos los métodos de express

// El siguiente es un ejemplo de "middleware":
app.use('/', function (req, res, next) {
	// Siempre que se pase por '/'... (se aplicará a todas las rutas)
	console.log('Hicieron un Request a ' + req.url);
	// se logueará: 'Hicieron un Request a ...'
	next();
	// y "next()" indica que el flujo de ejecución continúa...
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
