const prompt = require('prompt-sync')();
const ano = parseInt(prompt("Ano de nascimento: "));
const idade = new Date().getFullYear() - ano;
console.log(idade >= 16 ? "Pode votar" : "Não pode votar");