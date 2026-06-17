//Desenvolver um programa que pergunte 5 notas escolares 
//de um aluno e exiba a mensagem informando que o aluno
//foi aprovado se a média escolar for maior ou igual a 5
//se o aluno não foi aprovado informar "Não aprovado"

let num1, num2, num3, num4, num5;
let media;

console.log("Informe a primeira nota: ");
num1 = 10;
console.log(`Nota 1:${num1}`);
console.log("Informe a segunda nota: ");
num2 = 10;
console.log(`Nota 2: ${num2}`);
console.log("Informe a terceira nota: ");
num3 = 10;
console.log(`Nota 3: ${num3}`);
console.log("Informe a quarta nota: ");
num4 = 10;
console.log(`Nota 4: ${num4}`);
console.log("Informe a quinta nota: ");
num5 = 10;
console.log(`Nota 5: ${num5}`);

media = (num1 + num2 + num3 + num4 + num5) /4;
if (media >= 5){
    console.log("Aprovado!")
} else {console.log("Reprovaderrimo!")};