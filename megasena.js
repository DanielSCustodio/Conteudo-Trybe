let numerosMegaSena = [];

function numeroAleatorio(limite,qtdNumeros){
    let numeros = []
    for(let i = 0; i < qtdNumeros; i+= 1){
        numeros.push(Math.ceil(Math.random() * limite));
    }
    return numeros;
}

console.log(numerosMegaSena)

for (let index = 0; index < 6; index += 1) {
    numerosMegaSena[index] = numeroAleatorio(10);
}

console.log(numerosMegaSena);

let jogoTurma14A = [13, 2, 6, 7, 32, 55];

let acertos = 0;

for (let indexJogo = 0; indexJogo < jogoTurma14A.length; indexJogo += 1) {
    for (let indexMega = 0; indexMega < numerosMegaSena.length; indexMega += 1) {
        if (jogoTurma14A[indexJogo] === numerosMegaSena[indexMega]) {
            acertos += 1;
        }
    }
}

console.log('Você acertou ', acertos, 'números no seu jogo!');

for(let num of jogoTurma14A){
    console.log(num * 3);
}

