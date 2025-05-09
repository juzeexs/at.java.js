const prompt = require('prompt-sync')();
const frase = prompt("Digite uma frase: ");
const espacos = frase.split(" ").length - 1;
console.log("Espaços em branco:", espacos);

