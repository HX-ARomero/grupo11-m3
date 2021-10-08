var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Hola, desde "./routes/index.js"; en "localhost/3000/"');
});

module.exports = router;
