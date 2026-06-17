//fazer um algoritmo que pergunte o salário de  um funcionário e apresente
//este salário com um aumento de 15%

let sala;
let aum;
let soma;


console.log("Informe o seu salário: ");
sala = 1500;
console.log( `${sala}` );

aum = sala *15/100;
soma = sala + aum;

console.log(`Salário final é R$ ${soma.toFixed(2)}` );