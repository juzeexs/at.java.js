const prompt = require('prompt-sync')();
const idade = parseInt(prompt("Digite sua idade: "));
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");
