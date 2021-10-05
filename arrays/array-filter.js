// JavaScript -> Arrays -> FILTER

const almuerzos = [
	{ principal: '🍅', postre: '🍎' },
	{ principal: '🥕', postre: '🍌' },
	{ principal: '🍅', postre: '🍉' },
	{ principal: '🥑', postre: '🍍' }
];

// Utilizando "map" devolver un "nuevo arreglo"
const conTomate = almuerzos.filter((almuerzo) => almuerzo.principal === '🍅');
console.log(conTomate);
//> [
//>   { principal: '🍅', postre: '🍎' },
//>   { principal: '🍅', postre: '🍉' }
//> ]

// "filter" -> NO modifica el array original
console.log(almuerzos);
//> [
//>  { principal: '🍅', postre: '🍎' },
//>  { principal: '🥕', postre: '🍌' },
//>  { principal: '🍅', postre: '🍉' },
//>  { principal: '🥑', postre: '🍍' }
//> ]
