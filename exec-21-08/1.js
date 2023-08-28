/*
01. Crie uma função para converter graus célsius em graus fahrenheit e outra para
conversão contrária, de modo que o usuário escolha o tipo de conversão.
*/

const readline = require('readline-sync');

console.log('Escolha uma opção: ');
console.log('1 - Celsius para Fahrenheit');
console.log('2 - Fahrenheit para Celsius');

let opcao = parseInt(readline.question(''));

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

switch (opcao) {
    case 1:
        let celsius = parseFloat(readline.question('Digite a temperatura em Celsius: '));
        let fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius} graus Celsius equivalem a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);
        break;
    case 2:
        fahrenheitInput = parseFloat(readline.question('Digite a temperatura em Fahrenheit: '));
        let celsiusOutput = fahrenheitToCelsius(fahrenheitInput);
        console.log(`${fahrenheitInput} graus Fahrenheit equivalem a ${celsiusOutput.toFixed(2)} graus Celsius.`);
        break;
    default:
        console.log('Opção inválida.');
}
