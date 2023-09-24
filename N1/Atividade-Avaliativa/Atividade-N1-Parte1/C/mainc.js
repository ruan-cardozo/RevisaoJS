/*# Saida de dados
    Printar a saido de dados mostrando os anos bissextos ou nao...
*/

const { insercao } = require('./insercaoc');
const { processamento } = require('./processamentoc');

function main() {
    const usuario = insercao();//recebe os input do usuario
    const resultado = processamento(usuario.ano);//processa os inputs do usuario

    if (resultado) {
        //ser for veradeiro...
        console.log(`${usuario.ano} é um ano bissexto.`);
    } else {
        //se for falso...
        console.log(`${usuario.ano} não é um ano bissexto.`);
    }
}

main();