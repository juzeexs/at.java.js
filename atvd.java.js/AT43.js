const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite um número: "));
console.log(num % 3 === 0 && num % 5 === 0 ? "Divisível por 3 e 5" : "Não é divisível por ambos");