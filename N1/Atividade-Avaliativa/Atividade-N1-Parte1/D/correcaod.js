/* O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
                    Até 5 Kg           Acima de 5 Kg
  File Duplo    R$ 24,90 por Kg         R$ 25,80 por Kg
  Alcatra       R$ 25,90 por Kg       R$ 26,80 por Kg
  Picanha       R$ 36,90 por Kg        R$ 37,80 por Kg

Para atender os clientes, cada cliente poderá levar apenas um dos tipos de carne 
da promoção, porém não há limites para a quantidade de carne por cliente. 
Se compra for feita no cartão Tabajara o cliente receberá um desconto de 5% 
sobre o total da compra. 
Escreva um programa que peça o tipo e a quantidade de carne comprada 
pelo usuário e gere um cupom fiscal, contendo as informações da compra: 
tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto 
e valor a pagar
*/

import { exit } from 'process'
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let precoFile = 24.90
let precoFile5k = 25.80

let precoAlcatra = 25.90
let precoAlcatra5k = 26.80

let precoPicanha = 36.90
let precoPicanha5k = 37.80
let nomeTipo = '' 
let precoCarne = 0
let valorCompra = 0
let valorDesconto = 0

//Utilizando cores no console.log
let blue  = '\u001b[34m'
let red = '\u001b[31m'
let reset = '\u001b[0m'

const calcCompra = () => {
  console.log(red + "Tipo de Carne:\n" + reset + "1- File Duplo\n" + blue + "2- Alcatra\n" + 
    reset + "3- Picanha\n\n")

  let tipoCarne = parseInt(prompt("Informe o Tipo de Carne: "))
  if ((tipoCarne > 3) || (tipoCarne < 1)) {
    console.log("Tipo de Carne não Está na Promoção!")
    exit()
  }  
  
  let qtdeQuilos = parseFloat(prompt("Informe a Quantidade de Carne em Quilos: "))
  if (tipoCarne == 1) {
    nomeTipo = "File Duplo"
    precoCarne = (qtdeQuilos <= 5) ? (qtdeQuilos * precoFile).toFixed(2):
    (qtdeQuilos * precoFile5k).toFixed(2)
  }
  else if (tipoCarne == 2) {
    nomeTipo = "Alcatra"
    precoCarne = (qtdeQuilos <= 5) ? (qtdeQuilos * precoAlcatra).toFixed(2):
    (qtdeQuilos * precoAlcatra5k).toFixed(2)
  }  
  else {
    nomeTipo = "Picanha"
    precoCarne = (qtdeQuilos <= 5) ? (qtdeQuilos * precoPicanha).toFixed(2):
    (qtdeQuilos * precoPicanha5k).toFixed(2)
  }

  let cartaoTabajara = prompt("A compra será paga com o cartao Tabajara? S ou N: ")
  if ((cartaoTabajara === "S") || (cartaoTabajara === "s")) {
    valorDesconto = (precoCarne * 0.05).toFixed(2)
    valorCompra = (precoCarne - valorDesconto).toFixed(2)
  }
  else {
    valorCompra = precoCarne
  }  
  console.log("***************************CUPOM FISCAL**************************************\n" + 
    "* Carne...............................................................: " + nomeTipo + "\n" +
    "* Quantidade..........................................................: " + qtdeQuilos + "\n" +
    "* Preço.............................................................R$: " + precoCarne + "\n" +
    "* Uso do Cartao Tabajara..............................................: " + cartaoTabajara + "\n" +
    "* Valor do Desconto...................................................: " + valorDesconto + "\n" +
    "* Valor da Compra...................................................R$: " + valorCompra + "\n" +
    "*******************************************************************************")

}  
calcCompra()

