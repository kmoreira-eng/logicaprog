//Desenvolver um programa que pergunte um valor inteiro positivo ou negativo
//e exiba como resposta o módulodeste valor, ou seja,
//o número lido como sendo positivo.

  let num;

  console.log("Informe um número positivo ou negativo: ");
  num = 0;
  console.log(`${num}`);
  
  if (num >= 0){
    console.log(`O módulo do número informado é ${num}`);
  } else {
    console.log (`O módulo do número informado é ${num * -1}`);
  }