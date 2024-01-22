/*
1. Supondo que o percentual do distribuidor é de 28% e 
os impostos de 45%, escreva um programa 
para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor (1,5). 

//receber o valor ->
    custoFabrica = custoDistribuidor + custoImpostos;
    calcular com a formula: custoConsumidor = custofabrica + custoDistribuidor + custoImpostos
*/
// const readline = require('readline-sync');

let custoFabricaImposto;
let custoFabricaDistribuidora;
let custoConsumidor;

function entradaDeDados() {
    // custoFabrica = parseFloat(readline.question('Digite o preço de fábrica: '));
    custoFabrica = 40000;
}
function calcularValorDistribuidor() {
    custoFabricaDistribuidora = custoFabrica * 28 / 100;
}

function calcularValorImposto() { 
    custoFabricaImposto = custoFabrica * 45 / 100; 
}

function calcularValorFinal() {
    custoConsumidor = custoFabricaImposto + custoFabricaDistribuidora + custoFabrica;
}

function saida() {
    entradaDeDados();
    calcularValorDistribuidor();
    calcularValorImposto();
    calcularValorFinal();
    console.log(`O valor final e: ${custoConsumidor}`);
}

saida();



