// DESESTRUCTURACIÓN / DESTRUCTURING - ES6

// Nos permite asignar múltiples variables simultáneamente:

// Sin destructuring:
// let vegetables = ['🍅', '🍄', '🥕'];
// let tomato = vegetables[0];
// let mushroom = vegetables[1];
// let carrot = vegetables[2];

// Con destructuring:
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato, mushroom, carrot);
// output/> 🍅 🍄 🥕
