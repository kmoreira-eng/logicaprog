//Criar uma função saudacaoPersonalizada(nome) que
//retorne "Olá, [nome]! Seja bem-vindo."

function saudacaoPersonalizada (nome) {
 return `Olá ${nome} seja bem vindo(a)!.`
}
console.log(saudacaoPersonalizada("Carlos"));

let nome = "Ana"; //var global
console.log( saudacaoPersonalizada(nome));

function calcularArea(base: number, altura: number): number {
    let area: number = base * altura;
    return area;
}