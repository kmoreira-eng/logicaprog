//material 08 (Modularização e Funções) - Página 6
//variável global
let num;

function somar (a, b) {
    //resultado é uma variável local
    let resultado = a + b;
    return resultado;
}

//exibindo imediatamento o valor retornado pela função
console.log( somar (10, 10));

//guardando o valor retornado em uma variável
 
num = somar (10, 20);
console.log(num);

somar (4, 5); //o retorno da função se perde

//função sem return (função void)
function direcionador(){
     console.log("Siga em frente! Olhe para o lado!");
}
//chamando a função diercionador()
direcionador();

let texto = direcionador();
console.log(texto); //variável não recebe retorno da função

function mensagem() {
    return "Brigue mais, ame menos!";
}
mensagem();
console.log(mensagem());

function tudao(){
    direcionador (); //chamando a função direcionador

    console.log("Início da função tudao");
    let calc = somar(3, 7);
    console.log(`Resultado da soma: ${somar}`);
    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim da função Tudao");
}
tudao ();