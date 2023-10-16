/*
1. Considere que você comprou uma quantidade de chocolate para compartilhar
com os teus colegas. A fim de não deixar ninguém sem chocolate, você comprou
mais chocolates que o número de colegas. Portanto, não tem como dividir
igualmente o número de chocolates pelo número de colegas.

• Escreva um programa que peça o número de chocolates comprados e o número de colegas
existente (não esqueça que o número de chocolate é maior que o número de colegas). No final,
informe quantos chocolates são necessários para que a divisão fique igual entre os colegas.
-> Entrada de dados
    variavel para armazenar chocolates
    variavel para armazenar colegas
-> Validações
    chocolate > colegas
*/
// const readline = require('readline-sync');

function entradaSaida() {
    let chocolates = 7 , colegas = 5;
    
    try {
        // chocolates = parseFloat(readline.question('Digite a quantidade de chocolates: '));
        // colegas = parseFloat(readline.question('Digite a quantidade de colegas: '));

        if (isNaN(chocolates) || isNaN(colegas) || chocolates <= 0 || colegas <= 0) {
            throw new Error("Digite valores válidos maiores que zero.");
        }

        if (chocolates <= colegas) {
            throw new Error("Chocolates não podem ser menores ou iguais ao número de colegas.");
        }

    } catch (error) {
        console.error("Erro: " + error.message);
        return;
    } finally {
        if (!isNaN(chocolates) && !isNaN(colegas) && chocolates > colegas) {
            const chocolatesExtras = chocolates % colegas;
            console.log(`É necessário mais ${chocolatesExtras} chocolates para dividir igualmente entre os colegas.`);
        }
    }
}

function main() {
    entradaSaida();
}

main();
