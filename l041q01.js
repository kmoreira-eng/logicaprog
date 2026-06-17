//Desenvolver um programa que pergunte o número. Se este
//número for maior que 20, então ele deverá exibir a
//metade deste número, senão, ele deverá exibir o número
//sem alterações.

let num, metade;
console.log("Informe um número: ");
num = 200; //exemplo de um número informado pelo usuário

if (num > 20) {
   metade = num /2;
   console.log (`A metade de ${num} é ${metade}`);
} else {
    console.log(`Seu número é: ${num}`)
}

console.log("FIM DO PROGRAMA");