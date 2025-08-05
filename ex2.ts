let teclado = require('prompt-sync')();

let numero = parseInt(teclado("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log("PAR");
} else {
    console.log("IMPAR");
}