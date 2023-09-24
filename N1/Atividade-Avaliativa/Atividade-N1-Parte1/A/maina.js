/*a) Um conjunto de leitores respondeu a um survey (pesquisa) que continha as seguintes perguntas: qual a idade de
cada leitor? Em qual cidade o leitor mora? E a opinião em relação ao livro que fora lançado meses atrás, em
que o leitor responde uma das seguintes opções: 3- ótimo, 2 - bom e 1 – regular (1,25).
Escreva um programa que receba a idade, a cidade e a opinião de 16 leitores, calcule e exiba:
a média das idades dos leitores que responderam ótimo;
a quantidade de leitores que responderam regular;
a porcentagem de leitores que responderam bom entre todos os leitores;
a porcentagem de leitores para cada cidade.

# Input de dados
    Bem vindo a Pesquisar dos Leitores 
    Qual a idade a sua idade ?
    Qual cidade voce mora ?
    Qual a sua opiniao referente ao livro lancado alguns meses atras ?
    1 - Regular
    2 - Bom
    3 - Otimo

# Processamento de dados
    Media das idades dos leitores que responderam otimo
    Quantidade de leitores que responderam regular
    Porcentagem de leitores que responderam bom entre todos os leitores
    Porcentagem de leitores para cada cidade

# Output de dados
    Media das idades dos leitores que responderam otimo
    Quantidade de leitores que responderam regular
    Porcentagem de leitores que responderam bom entre todos os leitores
    Porcentagem de leitores para cada cidade
*/

let idades = [];
let cidades = [];
let opinioes = [];
let opiniao;
let idade;
let cidade;
let mediaIdadesOtimo = 0;
let qntdLeitoresRegular = 0;
let porcentagemLeitoresBom = 0;

// //input


function entradaDados() {
    const readline = require('readline-sync');
    console.log('Bem vindo a Pesquisa dos Leitores');
    for (let i = 0; i < 1; i++) {
        idade = parseInt(readline.question(`Digite a sua idade ${i + 1}: `));
        idades.push(idade);
        cidade = readline.question(`Digite a cidade que voce mora ${i + 1}: `);
        cidades.push(cidade);
        opiniao = parseInt(readline.question(`Digite a sua opiniao referente ao livro lancado alguns meses atras ${i + 1}: \n1 - Regular\n2 - Bom\n3 - Otimo\n`));
        opinioes.push(opiniao);
    }
}

// //processamento

function calcularMediaIdadesOtimo() {
    let totalIdadesOtimo = 0;
    let counterOtimo = 0;
    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 3) {
            totalIdadesOtimo += idades[i]; //  totalIdadesOtimo = totalIdadesOtimo  + idades[i]
            counterOtimo++;
        }        
    }
    return mediaIdadesOtimo = counterOtimo > 0 ? totalIdadesOtimo / counterOtimo : 0;
}

function calcularQntdLeitoresRegular() {
    let qntdLeitoresRegular = 0;
    for (let i = 0; i < opinioes.length; i++)
        if (opinioes[i] === 1) {
            qntdLeitoresRegular++;
        }
}


function calcularPorcentagemLeitoresBom() {
    let contadorBom = 0;
    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 2) {
            contadorBom++;
        }
    }
    return porcentagemLeitoresBom =  (contadorBom/opinioes.length) * 100;
}

function calcularPorcentagemLeitoresCidade() {
    let porcentagemPorCidades = []; // um array vazio para armazenar as porcentagens por cidade
    //loop para contar o numero de leitores por cidade
    for (let i = 0; i < cidades.length; i++) {
        // ! not
        //verifica se o contador para a cidade e falso, inicialmente todos os elementos do array sao undefined, 
        //se a cidade nao tiver sido encontrada antes nesse loop ela sera undefined
        //verifica se o contador para a cidade atual é falsy, ou seja, se é undefined ou se ainda não foi inicializado.
        if(!porcentagemPorCidades[cidades[i]]) {
            //se for falso, inicializa o contador para a cidade em 0
            //Se for o caso, isso significa que a cidade ainda não foi encontrada no loop anterior e precisa ser inicializada com 0.
            porcentagemPorCidades[cidades[i]] = 0;
        }
        //incrementa o contador para a cidade atual em ++
        porcentagemPorCidades[cidades[i]]++;
    }

    //aqui e um loop para calcular as porcentagens, ele percorre todos os valores cidades que forem encontrado nesse objeto
    for (const cidade in porcentagemPorCidades) {
        //calculor para a porcentagem de leitores para cada cidade
        porcentagemPorCidades[cidade] = (porcentagemPorCidades[cidade]/cidades.length) * 100;
    }

    // retorna o valor das porcentagens por cidade
    return porcentagemPorCidades;
}

// //output
function saida() {
    console.log(`A media das idades dos leitores que responderam otimo e ${mediaIdadesOtimo}`);
    console.log(`A quantidade de leitores que responderam regular e ${qntdLeitoresRegular}`);
    console.log(`A porcentagem de leitores que responderam bom entre todos os leitores e ${porcentagemLeitoresBom}%`);
    console.log(`A porcentagem de leitores para cada cidade e: `);
    const porcentagemPorCidades = calcularPorcentagemLeitoresCidade();
    for (const cidade in porcentagemPorCidades) {
        console.log(`${cidade} - ${porcentagemPorCidades[cidade]}%`);
    }
}   

function main() {
    entradaDados();
    calcularMediaIdadesOtimo();
    calcularQntdLeitoresRegular();
    calcularPorcentagemLeitoresBom();
    saida();
}

main();