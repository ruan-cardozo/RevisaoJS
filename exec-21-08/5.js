/*05. Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois
inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e outra para
a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M.
Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se
é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para
novos valores de entrada todas as vezes que desejar.
*/

const readline = require('readline-sync');

function converterPara12Horas(horas, minutos) {
    let periodo = 'A.M.';
    
    if (horas >= 12) {
        periodo = 'P.M.';
        if (horas > 12) {
            horas -= 12;
        }
    }
    
    return `${horas}:${minutos} ${periodo}`;
}

function main() {
    while (true) {
        let horas = parseInt(readline.question('Digite a hora (0-23): '));
        let minutos = parseInt(readline.question('Digite os minutos (0-59): '));

        if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59) {
            let resultado = converterPara12Horas(horas, minutos);
            console.log(`A hora convertida é: ${resultado}`);
        } else {
            console.log('Horas ou minutos inválidos. Tente novamente.');
        }

        let continuar = readline.question('Deseja continuar? (S/N): ');
        if (continuar.toUpperCase() !== 'S') {
            break;
        }
    }
}

main();


