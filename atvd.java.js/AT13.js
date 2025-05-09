const prompt = require('prompt-sync')();

let forca = parseFloat(prompt("Digite o valor da força aplicada (N): "));
let distancia = parseFloat(prompt("Digite a distância percorrida (m): "));

let trabalho = forca * distancia;
console.log(`O trabalho realizado é: ${trabalho.toFixed(2)}`);

