//Desenvolver um programa que pergunte dois números inteiros
//e apresente como resultado se o segundonúmero informado
//é ou não um divisor do primeiro número informado.

let num1;
let num2;

num1 = 4;
num2 = 2;
console.log(`Números informados: ${num1} e ${num2}`);

if (num1 % num2 === 0){
    console.log(`${num2} é um divisor de ${num1}`);
} else{
    console.log(`${num2} não é um divisor de ${num1}`);
}
