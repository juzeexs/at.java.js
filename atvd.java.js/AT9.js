const prompt = require('prompt-sync')();

let largura = parseFloat(prompt("Digite a largura do retângulo: "));
let comprimento = parseFloat(prompt("Digite o comprimento do retângulo: "));

let perimetro = 2 * (largura + comprimento);
let area = largura * comprimento;

console.log(`O perímetro do retângulo é: ${perimetro.toFixed(2)}\nA área do retângulo é: ${area.toFixed(2)}`);
