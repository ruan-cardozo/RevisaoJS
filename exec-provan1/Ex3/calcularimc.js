const readline = require('readline-sync');

let peso = 55;
let altura = 1.7;
let imc;

 function entradaDados() {
    peso = parseFloat(readline.question("Digite o seu peso: "));
    altura = parseFloat(readline.question("Digite a sua altura: "));
    return imc = peso / (altura * altura);
}

function categoria() {
    if (imc < 18.5){
        console.log('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log('Peso saudável');
    } else if(imc >= 25 && imc <= 29.9){
        console.log('Sobrepeso');
    } else if(imc >= 30 && imc <= 39.9){
        console.log('Obeso');
    } else if (imc > 40) {
        console.log('Muito obeso');
    }
}

function main() {
    entradaDados();
    categoria();
}

main()
