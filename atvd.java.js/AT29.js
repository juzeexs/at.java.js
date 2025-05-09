const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite um número: "));
console.log(num % 2 === 0 ? "Par" : "Ímpar");