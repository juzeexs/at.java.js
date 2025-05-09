const prompt = require('prompt-sync')();

let raio = parseFloat(prompt("Digite o raio da esfera: "));
let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
console.log(`O volume da esfera é: ${volume.toFixed(2)}`);