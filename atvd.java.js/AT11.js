const prompt = require('prompt-sync')();

let deltaS = parseFloat(prompt("Digite a variação do espaço (Δs): "));
let deltaT = parseFloat(prompt("Digite a variação do tempo (Δt): "));

let velocidadeMedia = deltaS / deltaT;
console.log(`A velocidade média é: ${velocidadeMedia.toFixed(2)}`);

