/*
03. Tendo um número como mais de um algarismo, crie uma função que
apresente o inverso desse número, por exemplo: 100 (entrada) saída 001
*/

const readline = require('readline-sync');

let numero = readline.question('Digite um número: ');
numero = Number(numero);
console.log(`O inverso do seu número é ${inverterNumero(numero)}`);

function inverterNumero(numero) {
    let numeroInvertido = '';
    numero = numero.toString();
    for (let i = numero.length - 1; i >= 0; i--) {
        numeroInvertido += numero[i];
    }
    return numeroInvertido;
}