const prompt = require('prompt-sync')();
const nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));
console.log("Prova 1:", nota1 >= 6 ? "Aprovado" : "Reprovado");
console.log("Prova 2:", nota2 >= 6 ? "Aprovado" : "Reprovado");