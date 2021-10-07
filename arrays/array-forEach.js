// JavaScript -> Arrays -> FOREACH

const almuerzos = [
	{ principal: '🍅', postre: '🍎' },
	{ principal: '🥕', postre: '🍌' },
	{ principal: '🍅', postre: '🍉' },
	{ principal: '🥑', postre: '🍍' }
];

// "forEach" siempre retorna "undefined"
// "forEach" -> NO permite concatenación con otros métodos
const platosPrincipales = almuerzos.forEach((almuerzo) => almuerzo.principal);
console.log(platosPrincipales);
//> undefined

// "forEach" -> NO modifica el array original
console.log(almuerzos);
//> [
//>  { principal: '🍅', postre: '🍎' },
//>  { principal: '🥕', postre: '🍌' },
//>  { principal: '🍅', postre: '🍉' },
//>  { principal: '🥑', postre: '🍍' }
//> ]

const principales = [];
almuerzos.forEach((almuerzo) => principales.push(almuerzo.principal));
console.log(principales);
//> [ '🍅', '🥕', '🍅', '🥑' ]
