/*Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.*/

let sexof, sexom, sexo;

sexof = "Feminino";
sexom = "Masculino";
console.log("Informe o seu sexo: ");
sexo = sexof;

switch (sexof) {
    case sexof:
        console.log(`Você selecionou "Feminino" - Banheiro à esquerda`);
        break;
    case sexom:
        console.log(`Você selecionou "Masculino" - Banheiro à esquerda`);
        break;
}