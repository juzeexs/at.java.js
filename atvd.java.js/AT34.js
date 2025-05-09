const prompt = require('prompt-sync')();
const a = parseFloat(prompt("Número 1: "));
const b = parseFloat(prompt("Número 2: "));
const c = parseFloat(prompt("Número 3: "));
const soma = a + b + c;
console.log(soma > 0 ? "Positiva" : soma < 0 ? "Negativa" : "Zero");