// EXPRESS - Enviando Datos al Server -> QUERY

// Query String
// Una forma de enviar datos es hacerlo en la URL a la que apuntamos el request.
// Para ello nos valemos de una serie de parámetros o datos que se incluyen en la URL.
// Normalmente distinguimos en la URL por un nombre y un valor separados
//  por el signo igual, y se separan del endpoint por el caracter ?,
//  y entre cada variable por el signo &. Por ejemplo:
// GET /?id=4&page=3 HTTP/1.1
// Host:www.learnwebdev.net
// Cookie: username=abc;name=tony

// En una Rest API "pura" no podemos enviar información por "body"

var express = require('express');
var app = express();

// ENVIANDO INFORMACIÓN DESDE EL BROWSER:
// 1 - POR URL:
//    A) POR PARAMETRO (PARAMS)
//    B) POR QUERY
// 2- POR BODY -> GENERALMENT UN ARCHIVO JSON

// Enviando información por "query"
app.get('/query', (req, res) => {
	// /url?key1=value1&key2=value2&key3....
	// /query?param=hola&param2=chau
	// -> { param: hola, param2: chau}

	// Para: /query?name=martina&lastName=scomazzon&age=24
	// Podemos recuperarlos por "destructuring"
	let { name, lastname, age } = req.query;
	if (!age) {
		res.send('El usuario no ha enviado su edad...');
	} else {
		res.send(`${name} ${lastname} tiene ${age} años`);
		// Se muestra un mensaje por pantalla...
	}
});

// Enviando información por parámetro:
app.get('/search/:category/:title/:price', (req, res) => {
	// En este caso la ruta "matchea" <=> se envían category, title y price
	let { category, title, price } = req.params;
	res.send('Al usuario ha realizado una consulta');
});

app.listen(3000);
