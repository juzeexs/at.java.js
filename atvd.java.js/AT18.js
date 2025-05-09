const prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");
let novaFrase = frase.replace(/a/g, "e");
console.log(`A nova frase é: ${novaFrase}`);