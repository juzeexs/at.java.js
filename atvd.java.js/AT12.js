const prompt = require('prompt-sync')();

let massa = parseFloat(prompt("Digite a massa do objeto (kg): "));
let velocidade = parseFloat(prompt("Digite a velocidade do objeto (m/s): "));

let energiaCinetica = (massa * Math.pow(velocidade, 2)) / 2;
console.log(`A energia cinética do objeto é: ${energiaCinetica.toFixed(2)}`);

