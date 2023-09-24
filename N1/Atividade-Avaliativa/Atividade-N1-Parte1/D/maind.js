const readline = require('readline-sync');

let tipoCarne;
let qntdCarne;
let tipoPagamento;
let precoPorKg;
let precoTotal = 0;
let valorDesconto = 0;
let valorAPagar = 0;


function insercao() {
    console.log('                                    Até 5 Kg                    Acima de 5 Kg\n');
    console.log('1.  File Duplo                  R$ 24,90 por Kg                 R$ 25,80 por Kg\n');
    console.log('2.  Alcatra                     R$ 25,90 por Kg                 R$ 26,80 por Kg\n');
    console.log('3.  Picanha                     R$ 36,90 por Kg                 R$ 37,80 por Kg\n');
    console.log('Lembre-se voce podera levar apenas uma carne da promoção!\n');
    console.log('E vale ressaltar que a carne que voce escolher nao tem um limite, pode levar a quantidade que quiser! :)\n');

    tipoCarne = parseInt(readline.question('Escolha o tipo de carne: \n'));
    qntdCarne = parseFloat(readline.question('Digite a quantidade de carne desejada: \n')); 

    console.log('------------------------------------------------------------------------');
    console.log('1. Cartão Tabajara.');
    console.log('2. PIX');
    console.log('3. Dinheiro');
    console.log('4. Cartão de Credito');
    console.log('5. Cartão de Debito');
    tipoPagamento = readline.question('Escolha o tipo de pagamento: ');
}

// //processamento
function calcularPrecoTotal() {
    switch(tipoCarne) { 
        case 1:
            precoPorKg = (qntdCarne <= 5) ? 24.90 : 25.80; //se for verdadeiro 24.90, se nao 25.80...
            break;
        case 2:
            precoPorKg = (qntdCarne <= 5) ? 25.90 : 26.80;
            break;
        case 3:
            precoPorKg = (qntdCarne <= 5) ? 36.90 : 37.80;
            break;
        default:
            console.log('Opção de carne indisponivel!');
            break;    
    }
    precoTotal = qntdCarne * precoPorKg;
}
function calcularDescontoTabajara() {
    if (tipoPagamento === 1) {
        valorDesconto = precoTotal * 0.05;
    } else {
        valorDesconto = 0;
    }
    valorDesconto = precoTotal * 0.05;
}

function calcularValorAPagar() {
    valorAPagar = precoTotal - valorDesconto;
}

function cupomFiscal() {
    console.log('\n------------------------ Cupom Fiscal ------------------------');
    console.log('Tipo de carne: ' + tipoCarne);
    console.log('Quantidade de carne: ' + qntdCarne + ' Kg');
    console.log('Preço total: R$ ' + precoTotal.toFixed(2));
    console.log('Tipo de pagamento: ' + tipoPagamento);
    console.log('Valor de desconto: R$ ' + valorDesconto.toFixed(2));
    console.log('Valor a pagar: R$ ' + valorAPagar.toFixed(2));
    console.log('--------------------------------------------------------------');
}

function main() {
    insercao();
    calcularPrecoTotal();
    calcularDescontoTabajara();
    calcularValorAPagar();
    cupomFiscal();
}

main();