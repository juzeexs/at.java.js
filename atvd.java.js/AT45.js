const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Digite o primeiro número: "));
const b = parseFloat(prompt("Digite o segundo número: "));

if (b === 0) {
  console.log("Não é possível dividir por zero.");
} else {
  console.log(a % b === 0 ? "O primeiro é divisível pelo segundo." : "O primeiro NÃO é divisível pelo segundo.");
}
ss