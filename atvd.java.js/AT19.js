const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");

if (nome[0].toUpperCase() === 'A') {
    console.log("O nome começa com a letra 'A'.");
} else {
    console.log("O nome não começa com a letra 'A'.");
}