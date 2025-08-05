let teclado = require('prompt-sync')();

let A = parseInt(teclado("Digite o primeiro número inteiro (A): "));
let B = parseInt(teclado("Digite o segundo número inteiro (B): "));

if (A % B === 0 || B % A === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}