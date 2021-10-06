// JavaScript -> Arrays -> INDEXOF

const ensalada = ['🍅', '🍄', '🥕'];

// utilizando "some" retorna "true" o "false"
// RECIBE CALLBACK COMO PARAMETRO
const algunTomate = ensalada.some((e) => e === '🍅');
console.log(algunTomate);
//> true

// utilizando "every" retorna "true" o "false"
const algunaSandia = ensalada.some((e) => e === '🍉');
console.log(algunaSandia);
//> false

// "indexOf" -> NO modifica el array original
console.log(ensalada);
//> [ '🍅', '🍄', '🥕' ]
