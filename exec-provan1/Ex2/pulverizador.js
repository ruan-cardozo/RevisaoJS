const r = require('readline-sync');

let area = 800; // Área a ser pulverizada (exemplo com 800 ha)
let tipo = 1;  // Tipo de pulverização (exemplo com tipo 1)

let valorTipo;
let valorTotal;
let valorAPagar;
let valorAcima900;
let desconto900;

function entradaDeDados() {
    area = parseInt(r.question('Digite a área: '));
    console.log('Tipo 1 - ervas daninhas R$ 60,00 por ha');
    console.log('Tipo 2 - gafanhotos R$ 110,00 por ha');
    console.log('Tipo 3- broca RS 160,00 por ha');
    console.log('Tipo 4 - todos acima R$ 300,00 por ha');
    tipo = parseInt(r.question('Digite o tipo de pulverização: '));
}

function tipoPulverizacao() {
    switch (tipo) {
        case 1:
            valorTipo = 60;
            break;
        case 2:
            valorTipo = 110;
            break;
        case 3:
            valorTipo = 160;
            break;
        case 4:
            valorTipo = 300;
            break;
        default:
            console.log('Tipo inexistente');
            break;
    }
}

function calcularDescontos() {
    valorTotal = area * valorTipo;

    if (area > 1100) {
        valorAPagar = valorTotal - (valorTotal * 0.06); // Desconto de 6% se a área for maior que 1100 ha
    } else {
        valorAPagar = valorTotal;
    }

    if (valorTotal > 900) {
        valorAcima900 = valorTotal - 900;
        desconto900 = valorAcima900 * 0.1; // Desconto de 10% sobre o valor que ultrapassar 900
        valorAPagar -= desconto900;
    }
}

function saidaDeDados() {
    console.log(`O tipo de pulverização escolhido foi: ${tipo}`);
    console.log(`A quantidade de área a ser pulverizada é: ${area} ha`);
    console.log(`O valor total sem descontos: R$ ${valorTotal.toFixed(2)}`);
    console.log(`O valor a pagar com descontos: R$ ${valorAPagar.toFixed(2)}`);
    console.log(`O valor do desconto aplicado acima de R$ 900,00: R$ ${desconto900.toFixed(2)}`);
}

function main() {
    entradaDeDados();
    tipoPulverizacao();
    calcularDescontos();
    saidaDeDados();
}

main();
