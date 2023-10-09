/*
        Tipo 1 - ervas daninhas R$ 60,00 por ha
        Tipo 2 - gafanhotos R$ 110,00 por ha
        Tipo 3- broca RS 160,00 por ha
        Tipo 4 - todos acima R$ 300,00 por ha
*/

let area = 800;
let tipo = 1;
let valorTipo;
let valorTotal;
let valorAPagar;
let valorAcima900;
let desconto900;

function tipoPulverização() {
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

function validarDescontos() {
    if (area > 1100) {
        valorTotal = area * valorTipo;
        valorAPagar = valorTotal / 100 * 6;
    } else{
        valorTotal = area * valorTipo;
    }

    if(valorTotal > 900){
        valorAcima900 = area - 900;
        desconto900 = valorAcima900 / 100 * 10;
        valorAPagar = valorTotal - desconto900;
    } else {
        valorTotal = area * valorTipo;
    }
}

function saidaDeDados() {
    console.log(`O tipo de pulverização escolhido foi: ${tipo}`);
    console.log(`A quantidade de área a ser pulverizada é: ${area}`);
    console.log(`O valor total sem descontos: ${valorTotal}`);
    console.log(`O valor total a pagar vai ser: ${valorAPagar}`);
    console.log(`O valor do desconto aplicado acima de 900: ${desconto900}`);
}

function main(){
    tipoPulverização();
    validarDescontos();
    saidaDeDados();
}

main();