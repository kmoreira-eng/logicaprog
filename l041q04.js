//Desenvolver um programa que pergunte um valor númerico
//inteiro e faça a exibição desse valor caso seja
//divisível por 4 e 5 e não sendo divisível 4 e 5
//o programa deverá exibir a mensagem "Valor não é divisível por 4 e 5"

let num;
let resto4;
let resto5;

console.log("Informe um valor númerico: ");
num = 16;
console.log(`Valor inserido ${num}`);

resto4 = num %4;
resto5 = num %5;

if (resto4 === 0 && resto5 === 0) {
    console.log(`${num} é divisível por 4 e 5`);
} else {
    console.log("Valor não é divisível por 4 e 5");
}
console.log("FIM DO PROGRAMA");