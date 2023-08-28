const read = require('readline-sync')
let opcao = ""
let temperatura = 0

function celsiusToFahrenheit(celsius) {
  let celsiusInF = (celsius*9)/5 + 32;
  console.log(celsius + '°C é ' + celsiusInF + '°F');
}
function fahrenheitToCelsius(fahrenheit) {
  let fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F é ' + fahrenheitInC + '°C');
}

temperatura = read.question("Informe a temperatura ")
opcao = read.question("Escolha 'F' para conversao de Fahrenheit para Celsius ou 'C' para vice-versa ")

if (opcao == 'F' || opcao == 'f') {
  console.log(fahrenheitToCelsius(temperatura))
}
else if ((opcao == 'C' || opcao == 'c')) {
  console.log(celsiusToFahrenheit(temperatura))
}
else {
  console.log("Programa não aceita outro tipo de conversão!")
}
  
  
