var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Hola, desde "./routes/users.js"; en "localhost/3000/users"');
});

module.exports = router;
