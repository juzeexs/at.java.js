const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite o seu peso (kg): "));
let altura = parseFloat(prompt("Digite a sua altura (m): "));

let imc = peso / (altura ** 2);
console.log(`O seu IMC é: ${imc.toFixed(2)}`);






