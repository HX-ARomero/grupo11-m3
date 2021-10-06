// DESESTRUCTURACIÓN / DESTRUCTURING - ES6

// Nos permite asignar múltiples variables simultáneamente:

// Con arrays:
const [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato, mushroom, carrot);
// output/> 🍅 🍄 🥕

// Con objetos:
const vegetales = {
	tomate: '🍅',
	champi: '🍄',
	zanahoria: '🥕'
};
const { tomate, champi, zanahoria } = vegetales;
console.log(tomate); // output/> 🍅
console.log(champi); // output/> 🍄
console.log(zanahoria); // output/> 🥕
