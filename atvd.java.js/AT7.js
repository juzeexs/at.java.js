
const prompt = require('prompt-sync')();

let raio = parseFloat(prompt("Digite o raio do círculo: "));
let area = Math.PI * (raio ** 2);
console.log(`A área do círculo é: ${area.toFixed(2)}`);