// app.js
const { getUserInput } = require('./inputModule.js');
const { calculateDeductions } = require('./processModule.js'); // Corrigir o nome aqui
const { displayResults } = require('./displayModule.js');
const readline = require('readline-sync')



console.log('Bem-vindo à Calculadora de Salários!\n');

const numberOfEmployees = readline.question('Digite a quantidade de funcionários: ');
const employees = [];


for (let i = 0; i < numberOfEmployees; i++) {
  console.log(`Digite os dados para o Funcionário ${i + 1}:\n`);
  
  const employeeData = getUserInput();
  const deductions = calculateDeductions(employeeData.salary);
  const employee = { ...employeeData, deductions };
  employees.push(employee);
  
  console.log('\n---\n');
}

console.log('Resultados:\n');

employees.forEach((employee, index) => {
  console.log(`Resultado para o Funcionário ${index + 1}:\n`);
  displayResults(employee);
  });
