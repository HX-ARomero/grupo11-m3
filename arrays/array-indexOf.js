// JavaScript -> Arrays -> INDEXOF

const ensalada = ['🍅', '🍄', '🥕'];

// utilizando "indexOf" retorna "true" o "false"
const tieneTomate = ensalada.indexOf('🍅');
console.log(tieneTomate);
//> 0

const tienePalta = ensalada.indexOf('🥑');
console.log(tienePalta);
// indexOf -> Retorna "-1" cuando no existe el elemento en el array
//> -1

// "indexOf" -> NO modifica el array original
console.log(ensalada);
//> [ '🍅', '🍄', '🥕' ]
