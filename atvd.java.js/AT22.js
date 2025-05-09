const prompt = require('prompt-sync')();
const nomeCompleto = prompt("Digite seu nome completo: ");
console.log("Primeiro nome:", nomeCompleto.trim().split(" ")[0]);
