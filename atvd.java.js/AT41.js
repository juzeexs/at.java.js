const prompt = require('prompt-sync')();
const dia = prompt("Digite o dia da semana: ").toLowerCase();
const uteis = ["segunda", "terça", "quarta", "quinta", "sexta"];
console.log(uteis.includes(dia) ? "Dia útil" : "Fim de semana");