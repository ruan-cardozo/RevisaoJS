/*	um conjunto de leitores respondeu a um survey (pesquisa) 
que continha as seguintes perguntas: qual a idade de cada leitor? 
Em qual cidade o leitor mora? E a opinião em relação ao livro que fora
lançado meses atrás, em que o leitor responde uma das seguintes
 opções: 3- ótimo, 2 - bom e 1 – regular

Escreva um programa que receba a idade, a cidade e a opinião de 16 leitores, calcule e exiba: 
a média das idades dos leitores que responderam ótimo;
a quantidade de leitores que responderam regular;
a porcentagem de leitores que responderam bom entre todos os leitores;
a porcentagem de leitores para cada cidade. 
*/

// Declaração de variáveis
import promptSync from 'prompt-sync'
const prompt = promptSync()

var leitores = {}
const qtdeLeitores = 3
let contIdade = 0
let somaIdade = 0
let contRegular = 0
let contBom = 0
let arrCidadeLeitor = []
let qtdeCidadeLeitor = {}

//Declaração da Estrutura do Objeto Leitor
//class Leitor {
  function Leitor(idadeLeitor, cidadeLeitor, opiniaoLeitor) {
    this.idadeLeitor = idadeLeitor
    this.cidadeLeitor = cidadeLeitor
    this.opiniaoLeitor = opiniaoLeitor  
  }  

//}
//Laço de Interação para entrada de dados via prompt-sync
for (let i=0; i < qtdeLeitores; i++) {
  leitores['leitor_' +i] = new Leitor ((prompt("Informe a idade: ")), 
  (prompt("Informe a cidade: ")),
  (prompt("Informe a Opinião, 3-ótimo, 2-bom e 1-regular: ")))
}
//Laço de Interação sobre as instancias do Objeto seguida dos comandos condicionais a fim de 
//satisfazer o enunciado do Exercício 01  
for (const item of Object.entries(leitores)) {
  if (item[1].opiniaoLeitor === '3') {
    contIdade++
    somaIdade =+ (parseInt(item[1].idadeLeitor)) 
  }  
  else if (item[1].opiniaoLeitor === '2') {
    contBom++
  }
  else if (item[1].opiniaoLeitor === '1') {
    contRegular++
  } else {
    console.log("Registro com Opinião Incorreta : " + item[1].opiniaoLeitor)
  }  
  // crianção de um array para as instancias do atributo cidade do leitor 
  arrCidadeLeitor.push(item[1].cidadeLeitor) 

}
//Função para contar a quantidade de cidades usando o método reduce()

function contCidade() {
  return arrCidadeLeitor.reduce((prev, nxt) => {
    prev[nxt] = (prev[nxt] + 1) || 1
    return prev
  },{})
  
}
// Saída da resolução do programa com os cálculos finais
let resltOtmo = (somaIdade == 0) ? 0 : (somaIdade/contIdade)
console.log("Média das Idades dos Leitores que Responderam Ótimo é de: " + resltOtmo) 
console.log("A Quantidade de Leitores que Responderam Regular é de: " + contRegular)
console.log("A Porcentagem de Leitores que Responderam Bom entre os Respondentes é de: " + 
  (contBom/qtdeLeitores)*100).toFixed(2)

//O resultado da função contCidade (contagem de cidades) é atribuido à um objeto 
// cujo formato chave/valor é mapeado (método map()) para o elemento (item) e
// utilizado no cálculo da porcentagem de cada cidade em número de leitores.       
qtdeCidadeLeitor = contCidade()
Object.entries(qtdeCidadeLeitor).map(item => {
  console.log("A Porcentagem da Cidade : " + item[0] + " é de " + ((item[1]/qtdeLeitores)*100).toFixed(2) + " %")
})
