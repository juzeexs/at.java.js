const prompt = require('prompt-sync')();
const a = parseFloat(prompt("Lado A: "));
const b = parseFloat(prompt("Lado B: "));
const c = parseFloat(prompt("Lado C: "));
const triangulo = a + b > c && a + c > b && b + c > a;
console.log(triangulo ? "É triângulo" : "Não é triângulo");

