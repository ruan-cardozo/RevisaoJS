let entradaDados = require("readline-sync")

function reverso(n) {
  let ob = ""
  for (let i = n.length - 1; i >= 0; i--) {
    ob += n[i];
  }
  return ob
}
num = entradaDados.question("Informe um numero: ")
console.log(reverso(num )) 