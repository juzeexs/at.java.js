const prompt = require('prompt-sync')();

let palavra1 = prompt("Digite a primeira palavra: ");
let palavra2 = prompt("Digite a segunda palavra: ");

let resultado = palavra1 + palavra2;
console.log(`A palavra resultante é: ${resultado}`);