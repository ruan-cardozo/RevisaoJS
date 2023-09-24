/*Chama-se ano bissexto o ano ao qual é acrescentado um dia extra, 
ficando ele com 366 dias, um dia a mais do que os anos normais de 365 dias, 
ocorrendo a cada quatro anos. Escreva um programa que verifique se um ano é
bissexto. Um ano é bissexto se ele é divisível por 4. Entretanto, se o ano é 
divisível por 100, ele não é bissexto. Mas, se ele for divisível por 400, 
ele volta a ser bissexto. 
*/

import PromptSync from 'prompt-sync'
const prompt = PromptSync()

// Expressão regular para validar a entrada de 4 digitos como Ano
const regularExp = /^[0-9]{4}$/ 
let div4, div100, div400 = 0

const verificaAnoBissexto = () => {
  let anoEntrada = parseInt(prompt("Informe o Ano com 4 Dígitos: "))
  if (regularExp.test(anoEntrada)) {
    div4 = (anoEntrada % 4)
    div100 = (anoEntrada % 100)
    div400 = (anoEntrada % 400)

    if ((div4 == 0) && (div100 == 0 ) && (div400 == 0))  {
      console.log("O Ano " + anoEntrada + " É Bissexto ")
    }
    else if ((div4 == 0) && (div100 != 0 )) {
      console.log("O Ano " + anoEntrada + " É Bissexto")
      }
    else {
      console.log("O Ano " + anoEntrada + " Não É Bissexto")
    }  
    
  } else {
      console.log("Ano Informado Incorreto!")
      verificaAnoBissexto()
    }
}
verificaAnoBissexto()