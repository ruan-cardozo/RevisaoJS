const readline = require('readline-sync');

function getUserInput() {
    const name = readline.question('Digite o nome do funcionário:');
    const salary = parseFloat(readline.question('Digite o salário bruto do funcionário:'));
  
    return { name, salary };
  }
  
  module.exports.getUserInput = getUserInput ;