/*# Entrada de Dados
    Bem vindo ao Sistema de Classificacao de Certificacao
    Qual a nota do Exame I ?
    Qual a nota do Exame II ?
    Qual a nota do Exame III ?
    Qual a nota do Exame IV ?
    Qual a nota do Exame V ?
    5 notas
*/

const readline = require('readline-sync'); //importo o modulo para receber as entradas dos usuarios.
const notas = []; //array que armazena as notas dos alunos.

console.log('Bem vindo ao Sistema de Classificacao de Certificacao');

//loop para armazenar as notas no array acima.
// notas push para cada iteracao do loop armazenar um numero no final do array ou seja sempre a direita.
//${i + 1} para saber qual nota esta passando

function insercao() {
    for (let i = 0; i < 5; i++) {
        const nota = parseFloat(readline.question(`Qual a nota do Exame ${i + 1} ? `));
        notas.push(nota);
    }       
}

exports.insercao = insercao