/*
# Entrada de Dados
    Bem vindo ao Sistema de Classificacao de Certificacao
    Qual a nota do Exame I ?
    Qual a nota do Exame II ?
    Qual a nota do Exame III ?
    Qual a nota do Exame IV ?
    Qual a nota do Exame V ?
# Processamento de dados
Classificação:  A –passou em todos os exames; 
                B – passou em I, II e IV, mas não em III ou V; 
                C – passou em I e II, III ou IV,mas não em V. 
                Reprovado – outras situações (1,0).
Classificacao do interessado na certificacao.  
# Saida de dados
    Classificacao do interessado na certificacao
*/

const readline = require('readline-sync'); //importo o modulo para receber as entradas dos usuarios.
const notas = []; //array que armazena as notas dos alunos.
let nota;
console.log('Bem vindo ao Sistema de Classificacao de Certificacao');

//loop para armazenar as notas no array acima.
// notas push para cada iteracao do loop armazenar um numero no final do array ou seja sempre a direita.
//${i + 1} para saber qual nota esta passando

function insercao() {
    for (let i = 0; i < 5; i++) {
        nota = parseFloat(readline.question(`Qual a nota do Exame ${i + 1} ? `));
        notas.push(nota);
    }       
}

//notas[0] >= 70 && notas[1] >= 70 && notas[2] >= 70 && notas[3] >= 70 && notas[4] >= 70
//notas.every(nota => nota >= 70
function processamento(notas) {
    //verificação das condições de classificação
    if (notas[0] >= 70 && notas[1] >= 70 && notas[2] >= 70 && notas[3] >= 70 && notas[4] >= 70) {
        console.log('Classificação A - Passou em todos os exames.'); 
    } else if ((notas[0] >= 70 && notas[1] >= 70 && notas[3] >= 70) && (notas[2] < 70 || notas[4] < 70)) {
        console.log('Classificação B - Passou em I, II e IV, mas não em III ou V');
    } else if (((notas[0] >= 70 && notas[1] >= 70) && (notas[2] >= 70 || notas[3] >= 70)) && notas[4] < 70) {
        console.log('Classificação C - Passou em I e II, III ou IV, mas não em V.');
    } else {
        console.log('Reprovado - Outras situações.');
    }
}

function main() {
    insercao();
    processamento(notas);
}

main();