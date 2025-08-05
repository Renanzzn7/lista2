let teclado = require('prompt-sync')();

let numero = parseInt(teclado("Digite um número inteiro: "));

if (numero < 0) {
    console.log("NEGATIVO");
} else {
    console.log("NAO NEGATIVO");
}