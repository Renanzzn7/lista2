let teclado = require('prompt-sync')();

let horaInicial = parseInt(teclado("Digite a hora inicial do jogo: "));
let horaFinal = parseInt(teclado("Digite a hora final do jogo: "));

let duracao: number;

if (horaInicial < horaFinal) {
    duracao = horaFinal - horaInicial;
} else {
    duracao = 24 - horaInicial + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);