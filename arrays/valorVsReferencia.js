//Cuando asignamos valores primitivos:
// (Boolean, Null, Undefined, Number, String y Symbol),
// el valor asignado es una copia del valor que estamos asignando.
let string = 'Hola';
let newString = string; // asignamos valor de `string` a `newString`.
string += '!'; // cambiamos valor de `string` añadiendo ! al final
console.log(string); // Hola!
console.log(newString); // Hola

//Cuando asignamos valores NO primitivos o complejos:
// (Object, Array y Function), JavaScript copia “la referencia”,
// lo que implica que no se copia el valor en sí,
// si no una referencia a través de la cual accedemos al valor original.
//Nota: "la referencia" -> es una dirección de memoria.
const array = [1, 2, 3];
//Notar que lo que es "constante" es la dirección de memoria
// Podemos modificar el array mediante métodos ("NO" reasignando un valor)
const newArray = array;
array.push(4);
console.log(array); // [ 1, 2, 3, 4 ] //Nosotros no hemos modificado "array"
console.log(newArray); // [ 1, 2, 3, 4 ]
