// EXPRESS - Enviando Datos al Server -> POST

// Otras formas de enviar datos al servidor es a través de Formularios.
// Ahora usaremos otro verbo HTTP, el POST.

var express = require('express');
var app = express();

app.use(express.json());
// MIDDLEWARE de express para porder trabajar con archivos json desde "body" !!!
//	-> convierte el archivo json a un objeto de JavaScript
// app.use(); -> SE APLICA A TODAS LAS RUTAS!!!

app.get('/', (req, res) => {
	res.send('Servidor funcionando en "/"');
});

app.post('/', (req, res) => {
	res.json(req.body);
	// También podríamos hacer "destructuring" si sabemos los "keys" del json
});

// puerto sobre el cual quiero escuchar
app.listen(3000);
