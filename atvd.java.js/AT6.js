const prompt = require('prompt-sync')();

let raio = parseFloat(prompt("Digite o raio do círculo: "));
let perimetro = 2 * Math.PI * raio;
console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)}`);
