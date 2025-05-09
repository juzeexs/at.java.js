const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o valor de 'a': "));
let b = parseFloat(prompt("Digite o valor de 'b': "));
let c = parseFloat(prompt("Digite o valor de 'c': "));

let delta = (b ** 2) - (4 * a * c);
if (delta < 0) {
    console.log("A equação não possui raízes reais.");
} else {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`As raízes da equação são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`);
}
