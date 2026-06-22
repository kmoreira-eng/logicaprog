//Fazer um algoritmo que efetue o cálculo do valor de uma
//prestação em atraso utilizando a fórmula prestação
//= valor + (valor x (taxa : 100) x tempo em dias).

let valor;
let taxa;
let tDias;
let prestacao;

console.log("Informe o valor da sua prestação");
valor = 300;
console.log(`Sua prestação é: ${valor.toFixed(2)}`);

console.log("Informe o valor da taxa de juros");
taxa = 2;
console.log(`Taxa informada: ${taxa}%`);

console.log("Informe o total de dias atrasado");
tDias = 10;
console.log(`Dias de atraso: ${tDias}`);

//prestacao = valor +(vslorx (taxa :100) x tempo em dias)

prestacao = valor + (valor *(taxa/100)* tDias);
console.log(`O valor da prestação em atraso é: ${prestacao.toFixed(2)}`);