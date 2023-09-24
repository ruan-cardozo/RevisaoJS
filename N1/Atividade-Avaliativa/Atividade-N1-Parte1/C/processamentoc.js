/*# Processamento dos dados
    Verificar se o ano e bissexto ou nao
    Condicoes:
        Se o ano for divisivel por 4 = Ano bissexto
        Se o ano for divisivel por 100 ele nao e bissexto
        Mas se for divisivel por 400 volta a ser bissexto.
*/

function processamento(ano) {
    //verifica se o ano é divisível por 4 e, ao mesmo tempo, não é divisível por 100
    //Um ano precisa ser divisível por 4 para ser considerado bissexto, 
    //mas não deve ser divisível por 100, a menos que seja também divisível por 400.
    if ((ano %4  === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports.processamento = processamento;