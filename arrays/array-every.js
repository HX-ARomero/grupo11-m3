// JavaScript -> Arrays -> INDEXOF

const ensalada = ['🍄', '🍄', '🍄'];

// utilizando "every" retorna "true" o "false"
// RECIBE CALLBACK COMO PARAMETRO
const todosTomates = ensalada.every((e) => e === '🍅');
console.log(todosTomates);
//> false

// utilizando "every" retorna "true" o "false"
const todosChampis = ensalada.every((e) => e === '🍄');
console.log(todosChampis);
//> false

// "every" -> NO modifica el array original
console.log(ensalada);
//> [ '🍅', '🍄', '🥕' ]
