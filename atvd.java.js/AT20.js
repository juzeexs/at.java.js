const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra: ");
let palavraInvertida = palavra.split('').reverse().join('');

if (palavra === palavraInvertida) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}