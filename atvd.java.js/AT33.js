const prompt = require('prompt-sync')();
const a = parseFloat(prompt("Número 1: "));
const b = parseFloat(prompt("Número 2: "));
const c = parseFloat(prompt("Número 3: "));
const soma = a + b + c;
console.log(soma % 5 === 0 ? "Divisível por 5" : "Não divisível por 5");