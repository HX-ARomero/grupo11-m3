// JavaScript -> Arrays -> MAP

const almuerzos = [
	{ principal: '🍅', postre: '🍎' },
	{ principal: '🥕', postre: '🍌' },
	{ principal: '🍅', postre: '🍉' },
	{ principal: '🥑', postre: '🍍' }
];

// Utilizando "map" devolver un "nuevo arreglo"
const platosPrincipales = almuerzos.map((almuerzo) => almuerzo.principal);
console.log(platosPrincipales);
//> [ '🍅', '🥕', '🍅', '🥑' ]

// "map" -> NO modifica el array original
console.log(almuerzos);
//> [
//>  { principal: '🍅', postre: '🍎' },
//>  { principal: '🥕', postre: '🍌' },
//>  { principal: '🍅', postre: '🍉' },
//>  { principal: '🥑', postre: '🍍' }
//> ]
