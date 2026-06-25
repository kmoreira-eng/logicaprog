//Crie uma função chamada calcularTriplo que receba um número
//como parâmetro e retorne o valor desse número mulIplicado por 3.
//Após criar a função, chame-a passando o valor 10
//e exiba o resultado no console.

function calcularArea(base, altura) {
    let area = base * altura;
    return area;
}
let a = calcularArea(2, 3);
console.log(`A área do retângulo é ${a}`);

let n1 = 5, n2 = 8;
let n3 = calcularArea(n1, n2);
console.log(`A área do retângulo é ${n3}`);