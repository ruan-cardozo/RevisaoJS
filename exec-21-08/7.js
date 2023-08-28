/* 07. Dado um vetor do tipo número, em que o usuário preenche de três à seis
posições, escreva uma função que multiplique o elemento da primeira posição
pela subsequente até percorrer todo o vetor sendo que o último elemento será
multiplicado por ele mesmo. O resultado dessa multiplicação deve ser exibido
em tela por outra função.
*/

const readline = require('readline-sync');

function multiplicarVetor(vetor) {
    let resultado = 1;

    for (let i = 0; i < vetor.length; i++) {
        if (i < vetor.length - 1) {
            resultado *= vetor[i] * vetor[i + 1];
        } else {
            resultado *= vetor[i] * vetor[i];
        }
    }

    return resultado;
}

function exibirResultado(resultado) {
    console.log(`O resultado da multiplicação é: ${resultado}`);
}

function main() {
    const vetor = [];
    
    console.log('Digite de três a seis números para preencher o vetor:');
    for (let i = 0; i < 6; i++) {
        const numero = parseFloat(readline.question(`Digite o número ${i + 1}: `));
        if (!isNaN(numero)) {
            vetor.push(numero);
        }
        if (vetor.length === 6) {
            break;
        }
    }

    const resultado = multiplicarVetor(vetor);
    exibirResultado(resultado);
}

main();
