// EXPRESS -> Modularizando rutas:

var express = require('express');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use('/', routes);
// Todo lo que llegue a '/' se redirige a routes/index.js
app.use('/users', users);
// Todo lo que llegue a '/users' se redirige a routes/users.js

// puerto sobre el cual quiero escuchar
app.listen(3000);
