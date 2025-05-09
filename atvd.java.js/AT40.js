const prompt = require('prompt-sync')();
const n1 = parseFloat(prompt("Nota 1: "));
const n2 = parseFloat(prompt("Nota 2: "));
const n3 = parseFloat(prompt("Nota 3: "));
const media = (n1 + n2 + n3) / 3;
if (media >= 7) console.log("Aprovado");
else if (media < 4) console.log("Reprovado");
else console.log("Recuperação");

