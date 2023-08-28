/*02. Crie duas funções uma para calcular a circunferência de um círculo e outra
para calcular a sua área, usuário informa o raio.
*/


const readline = require('readline-sync'); //ler entrada de usuaria pela prompt

//montando esqueleto para pedir informacoes para os usuarios
console.log('Escolha um opcao: ');
console.log('1. Calcular a circunferência do circulo');
console.log('2. Calcular a área do circulo');
console.log('3. Sair');
let option = parseInt(readline.question(''));

//funcao para calcular circunferencia
function calcularCircunferencia() {
    let raio = parseFloat(readline.question('Digite o raio do circulo: ')); //cria variavel raio para armazenar o input do usuario
    let circunferencia = 2 * Math.PI * raio; //calcular a circunferencia
    console.log(`A circunferencia do circulo é ${circunferencia.toFixed(2)}`); //retorno do calculo
}

//funcao para calcular area
function calcularArea() {
    let raio = parseFloat(readline.question('Digite o raio do circulo: '));//cria variavel para armazenar o input do usuario
    let area = Math.PI * Math.pow(raio, 2);//calcular a area
    console.log(`A area do circulo é ${area.toFixed(2)}`); //retorno do calculo
}

function sair() {
    console.log('Saindo...');
}

//switch para escolher opcao
switch(option) {
    case 1:
        calcularCircunferencia();//chama a funcao...
        break;
    case 2:
        calcularArea(); //chama a outra funcao
        break;
    case 3:
        sair();
        break;
    default:
        console.log('Opção inválida.');   
}