const express = require('express');
// express -> NOS RETORNA UNA FUNCIÓN!!!
const app = express();
const port = 3000;
// Express -> Introducción
// Express es un framework web rápido, minimalista y flexible para Node.js
const morgan = require('morgan');

// Cargamos "morgan" -> middleware
app.use(morgan('dev'));

const personajes = ['Homero', 'Marge', 'Maggie'];

app.get('/', (req, res) => {
	// req: require (solicitud)
	// res: response (respuesta) // posee métodos (.status() .send() .json())
	// next: Callback argument to the middleware function, called "next" by convention
	//console.log(req);
	const result = personajes[0];
	res.send(result);
});

app.get('/:num', (req, res) => {
	// req: require (solicitud)
	// res: response (respuesta) // posee métodos (.status() .send() .json())
	// next: Callback argument to the middleware function, called "next" by convention
	//console.log(req);
	//console.log(req.params.num);
	const result = personajes[req.params.num];
	res.status(200).send(result);
});

//localhost:3000/2 -> Browser
//localhost:3000/:num -> en este caso id=2

app.listen(port, () => {
	console.log(`Example server listening at http://localhost:${port}`);
});

/*
params
  url -> host/hola/chau
  api -> /:variable/:otraVariable -> req.params.variable = "hola"
                                  -> req.params.otraVariable = "chau"

query
  url -> host/home?variable=hola&otraVariable=chau
  api -> host/home -> req.query.variable="hola" y req.query.otraVariable="chau"

body
  {
    variable: "hola",
    otraVariable: "chau"
  }
  api -> req.body.variable = "hola", req.body.otraVariable = "chau"
*/
