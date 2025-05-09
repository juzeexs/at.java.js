const prompt = require('prompt-sync')();
const idades = [
  parseInt(prompt("Idade da pessoa 1: ")),
  parseInt(prompt("Idade da pessoa 2: ")),
  parseInt(prompt("Idade da pessoa 3: "))
];
const maiores = idades.filter(i => i >= 18).length;
if (maiores === 3) console.log("Todas maiores de idade");
else if (maiores > 0) console.log("Algumas maiores de idade");
else console.log("Todas menores de idade");

