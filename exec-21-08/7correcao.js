let entradaDados = require('readline-sync')
let numAr = []
tmarr = 0
continua = 's'

function geraNumeros() {
  while (tmarr < 6 && continua == 's') {
    numAr.push(entradaDados.question("informe um numero "))

    if (tmarr == 2) {
      continua = entradaDados.question("Deseja continuar (s/n) ")
    }
    tmarr++
  }
}

let arMult = []
function mostraNumeros() {
  for (let i = 0; i < numAr.length; i++) {
    if ((numAr.length - 1) == i) {
      arMult.push(numAr[i] * numAr[i])
    }
    else {
      arMult.push(numAr[i] * numAr[i + 1])
    }
  }
  return arMult
}

geraNumeros()
console.log(mostraNumeros())