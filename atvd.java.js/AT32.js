const prompt = require('prompt-sync')();
const n1 = parseFloat(prompt("Nota 1: "));
const n2 = parseFloat(prompt("Nota 2: "));
const media = (n1 + n2) / 2;
console.log(media >= 6 ? "Aprovado" : "Reprovado");