const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

let mediaGeometrica = Math.cbrt(num1 * num2 * num3);
console.log(`A média geométrica dos números é: ${mediaGeometrica.toFixed(2)}`);



