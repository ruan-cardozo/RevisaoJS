/*	Em uma certificação são feitos 5 exames (I, II, III, IV e V). 
Escreva um programa que leia as notas desses exames e imprima a 
classificação do interessado na certificação, 
sabendo que a média é 70. 
Classificação: A – passou em todos os exames; B – passou em I, II e IV, 
mas não em III ou V; C – passou em I e II, III ou IV, 
mas não em V.  Reprovado – outras situações
*/

import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const certificacao = (nomePessoa,exameI, exameII, exameIII, exameIV, exameV) => {
  nomePessoa = prompt("Informe o nome da Pessoa ")
  exameI = parseFloat(prompt("Informe a Nota do Exame I "))
  exameII = parseFloat(prompt("Informe a Nota do Exame II "))
  exameIII = parseFloat(prompt("Informe a Nota do Exame III ")) 
  exameIV = parseFloat(prompt("Informe a Nota do Exame IV ")) 
  exameV = parseFloat(prompt("Informe a Nota do Exame V "))

  // A média é exibida como complemento da classificação ou reprovação.  
 
  const mediaExames = (parseFloat(exameI + exameII + exameIII + exameIV + exameV)/5).toFixed(2)
  
  if((exameI >= 70) && (exameII >= 70) && (exameIII >= 70) && (exameIV >= 70) && (exameV >= 70))
    console.log(nomePessoa," Sua Classificação é A com a Média " + mediaExames )
  else if (((exameI >= 70) && (exameII >= 70) && (exameIV >=70)) && ((exameIII < 70) || exameV < 70)) {
    const mediaExamesB = ((exameI + exameII + exameIV)/3) 
    console.log(nomePessoa, " Sua Classificação é B com a Média I,II e IV " + mediaExames)
  }
  else if ((((exameI >= 70) && (exameII >= 70))) && ((exameIII >= 70) || 
    (exameIV >= 70)) && (exameV < 70)) {
    console.log(nomePessoa," Sua Classificação é C" + mediaExames)  
  }
  else {
    console.log(nomePessoa, " Reprovado " + mediaExames )
  }

}

certificacao()