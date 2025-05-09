const prompt = require('prompt-sync')();
const a = parseFloat(prompt("Digite o primeiro número: "));
const b = parseFloat(prompt("Digite o segundo número: "));
console.log("Maior:", Math.max(a, b));