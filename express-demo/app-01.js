// Express -> Introducción
// Express es un framework web rápido, minimalista y flexible para Node.js

//> npm install express --save
// --save -> para agregarlo a las dependencias de package.json (no es necesario)

var express = require('express');
// express -> NOS RETORNA UNA FUNCIÓN!!!
var app = express();
// app posee una serie de métodos heredados de "express"

app.get('/', (req, res, next) => {
	// req: require (solicitud)
	// res: response (respuesta) // posee métodos (.status() .send() .json())
	// next: Callback argument to the middleware function, called "next" by convention
	next();
});
app.listen(3000);

// RestApi -> por convención:
// GET: trae información
// POST: publicar nueva información
// PUT: modificar información
// DELETE: borrar información
