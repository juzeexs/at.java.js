let prompt = require('prompt-sync')({sigint: true});
let palavra = prompt("Digite uma palavra: ");
let vogais = palavra.match(/[aeiouAEIOU]/g);

console.log("Quantidade de vogais:", vogais ? vogais.length : 0);
