const prompt = require('prompt-sync')();
const a = parseFloat(prompt("Número 1: "));
const b = parseFloat(prompt("Número 2: "));
const c = parseFloat(prompt("Número 3: "));

console.log("Maior:", Math.max(a, b, c));
console.log("Menor:", Math.min(a, b, c));