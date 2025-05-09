const prompt = require('prompt-sync')();
const nomeCompleto = prompt("Digite seu nome completo: ");
const partes = nomeCompleto.trim().split(" ");
const sobrenome = partes.pop();
console.log(`${sobrenome}, ${partes.join(" ")}`);