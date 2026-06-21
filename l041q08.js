//Desenvolver um programa que pergunte um número inteiro qualquer
//e verifique se ele está na faixa de 1 a 10.

let num;

console.log("Informe um número: ");
num = 10;
console.log(`Número informado: ${num}`);

if (num >= 1 && num <= 10) {
    console.log("O número está na faixa de 1 a 10.");
} else {
    console.log("O número não está na faixa de 1 a 10.");
}