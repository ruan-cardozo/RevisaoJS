const readline = require('readline-sync');

// Objeto para representar um leitor
class Leitor {
  constructor(nome, idade, cidade, opiniao) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.opiniao = opiniao;
  }
}

// Variáveis e contadores
const leitores = [];
let mediaIdadesOtimo = 0;
let qntdLeitoresRegular = 0;
let porcentagemLeitoresBom = 0;

// Função para entrada de dados
function entradaDados() {
  console.log('Bem-vindo à Pesquisa dos Leitores');

  for (let i = 0; i < 5; i++) {
    const nome = readline.question(`Digite o nome do leitor ${i + 1}: `);
    const idade = parseInt(readline.question(`Digite a idade do leitor ${i + 1}: `));
    const cidade = readline.question(`Digite a cidade que o leitor ${i + 1} mora: `);
    const opiniao = parseInt(readline.question(`Digite a opinião referente ao livro lançado alguns meses atrás para o leitor ${i + 1}: \n1 - Regular\n2 - Bom\n3 - Ótimo\n`));

    // Criar um objeto Leitor com os dados inseridos e adicioná-lo ao array de leitores
    const leitor = new Leitor(nome, idade, cidade, opiniao);
    leitores.push(leitor);
  }
}

// Função para calcular a média de idades dos leitores ótimos
function calcularMediaIdadesOtimo() {
  let totalIdadesOtimo = 0;
  let contadorOtimo = 0;

  for (const leitor of leitores) {
    if (leitor.opiniao === 3) {
      totalIdadesOtimo += leitor.idade;
      contadorOtimo++;
    }
  }

  mediaIdadesOtimo = contadorOtimo > 0 ? totalIdadesOtimo / contadorOtimo : 0;
}

// Função para calcular a quantidade de leitores regulares
function calcularQntdLeitoresRegular() {
  qntdLeitoresRegular = leitores.filter(leitor => leitor.opiniao === 1).length;
}

// Função para calcular a porcentagem de leitores que responderam "Bom"
function calcularPorcentagemLeitoresBom() {
  const contadorBom = leitores.filter(leitor => leitor.opiniao === 2).length;
  porcentagemLeitoresBom = (contadorBom / leitores.length) * 100;
}

// Função para calcular a porcentagem de leitores por cidade
function calcularPorcentagemLeitoresCidade() {
  const porcentagemPorCidades = {};

  for (const leitor of leitores) {
    if (!porcentagemPorCidades[leitor.cidade]) {
      porcentagemPorCidades[leitor.cidade] = 0;
    }
    porcentagemPorCidades[leitor.cidade]++;
  }
  for (const cidade in porcentagemPorCidades) {
    porcentagemPorCidades[cidade] = (porcentagemPorCidades[cidade] / leitores.length) * 100;
  }
  return porcentagemPorCidades;
}
// Função para exibir os resultados
function saida() {
  console.log(`A média das idades dos leitores que responderam ótimo é ${mediaIdadesOtimo}`);
  console.log(`A quantidade de leitores que responderam regular é ${qntdLeitoresRegular}`);
  console.log(`A porcentagem de leitores que responderam bom entre todos os leitores é ${porcentagemLeitoresBom.toFixed(2)}%`);
  console.log(`A porcentagem de leitores para cada cidade é:`);

  const porcentagemPorCidades = calcularPorcentagemLeitoresCidade();
  for (const cidade in porcentagemPorCidades) {
    console.log(`${cidade} - ${porcentagemPorCidades[cidade].toFixed(2)}%`);
  }
}
// Função principal
function main() {
  entradaDados();
  calcularMediaIdadesOtimo();
  calcularQntdLeitoresRegular();
  calcularPorcentagemLeitoresBom();
  saida();
}
main();