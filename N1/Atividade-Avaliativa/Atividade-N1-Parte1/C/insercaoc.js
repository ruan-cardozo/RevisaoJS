/*# Input de dados do usuario  
Bem vindo ao programa de verificacao de ano bissexto
Digite o ano que deseja verificar se e bissexto ou nao
*/

const readline = require('readline-sync');
let ano;

function insercao() {  
    console.log('------------------------------------------------------');
    console.log('|Bem vindo ao programa de verificacao de ano bissexto|');
    console.log('------------------------------------------------------');
    ano = parseInt(readline.question('Digite o ano que deseja verificar se e bissexto ou nao: '));

    return {ano};
}

module.exports.insercao = insercao;
