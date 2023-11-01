// const lodash = require("lodash");

const { uniq } =  require("lodash")

const {arrayLetras, arrayNumeros} = require('./array');

console.log(arrayNumeros);
console.log(arrayLetras);

const ArrayNumeroUnico = uniq(arrayNumeros);
const ArrayLetraUnica = uniq(arrayLetras)

console.log(ArrayNumeroUnico);
console.log(ArrayLetraUnica)