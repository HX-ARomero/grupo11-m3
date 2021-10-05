// JavaScript -> Arrays -> INCLUDES

const ensalada = ['🍅', '🍄', '🥕'];

// utilizando "includes" retorna "true" o "false"
const tieneTomate = ensalada.includes('🍅');
console.log(tieneTomate);
//> true

const tienePalta = ensalada.includes('🥑');
console.log(tienePalta);
//> false

// "includes" -> NO modifica el array original
console.log(ensalada);
//> [ '🍅', '🍄', '🥕' ]
