
let cont = 0;
let acum = 0;

do {
    acum += cont;
    cont += 1;
} while ( cont <= 5);

console.log(`A soma dos primeiros valores inteiros é ${acum}`);
