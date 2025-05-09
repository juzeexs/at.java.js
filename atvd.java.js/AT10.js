const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o valor do lado a do triângulo: "));
let b = parseFloat(prompt("Digite o valor do lado b do triângulo: "));
let c = parseFloat(prompt("Digite o valor do lado c do triângulo: "));
let h = parseFloat(prompt("Digite a altura relativa ao lado b do triângulo: "));

let perimetro = a + b + c;
let area = (b * h) / 2;

console.log(`O perímetro do triângulo é: ${perimetro.toFixed(2)}\nA área do triângulo é: ${area.toFixed(2)}`);



