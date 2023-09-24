/* 
# Processamento de dados
Classificação:  A –passou em todos os exames; 
                **B – PASSOU EM I, II e IV, mas não em III ou V;**
                C – passou em I e II, III ou IV,mas não em V. 
                Reprovado – outras situações (1,0).
                A média é 70
*/

function processamento(notas) {
    //verificação das condições de classificação
    if (notas.every(nota => nota >= 70)) {
        console.log('Classificação A - Passou em todos os exames.'); 
    } else if ((notas[0] >= 70 && notas[1] >= 70 && notas[3] >= 70) && (notas[2] < 70 || notas[4] < 70)) {
        console.log('Classificação B - Passou em I, II e IV, mas não em III ou V');
    } else if (((notas[0] >= 70 && notas[1] >= 70) && (notas[2] >= 70 || notas[3] >= 70)) && notas[4] < 70) {
        console.log('Classificação C - Passou em I e II, III ou IV, mas não em V.');
    } else {
        console.log('Reprovado - Outras situações.');
    }
}

// notas[0] >= 70 && notas[1] >= 70 && notas[2] >= 70 && notas[3] >= 70 && notas[4] >= 70

exports.processamento = processamento;