const prompt = require('prompt-sync')();
const idade = parseInt(prompt("Digite a idade: "));
if (idade < 16) console.log("Não pode votar");
else if ((idade >= 16 && idade < 18) || idade >= 70) console.log("Voto facultativo");
else console.log(Voto)