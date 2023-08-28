const read = require('readline-sync')

let raio = 0.0

function calccincuferencia(raio) {
  let circunf = Math.PI * 2 * raio;
  console.log("A circunferencia é " + circunf)
}  
function calcArea(raio) {
  area = Math.PI * raio * raio  
  console.log("A Area é " + area)
}

raio = read.question("Informe o Raio ")
calccincuferencia(raio)
calcArea(raio)
  