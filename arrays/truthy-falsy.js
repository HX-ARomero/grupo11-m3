// -----* TRUTHY - FALSY *-----

/*
truthy: Valor que se traduce como "true" cuando es evaluado
  en un contexto booleano. No es sinónimo de "true".

falsy: Valor que se traduce como "false" cuando es evaluado
  en un contexto booleano. No es sinónimo de "false".

Los valores "falsy" son: 0, '', false, undefined, null, NaN
*/

const value = 2; // Modificar valor para evaluar
const toBoolean = value ? 'evaluado como "truthy"' : 'evaluado como "falsy"';
console.log(`${value} : es ${toBoolean}`);
