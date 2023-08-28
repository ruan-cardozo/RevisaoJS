/* 
09. Crie uma função para sortear 10 números aleatórios, armazene esses números
em um array e depois exiba esses números.
*/

function sortearNumeros() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100));
    }
    return numeros;
}

function exibirNumeros(numeros) {
    console.log(numeros);
}

function main() {
    const numeros = sortearNumeros();
    exibirNumeros(numeros);
}

main();