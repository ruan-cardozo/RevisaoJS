// displayModule.js
function displayResults(employee) {
    console.log(`Nome do funcionário: ${employee.name}`);
    console.log(`Salário bruto: R$ ${employee.salary.toFixed(2)}`);
    console.log(`Desconto INSS: R$ ${employee.deductions.inss.toFixed(2)}`);
    console.log(`Desconto Imposto: R$ ${employee.deductions.tax.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${employee.deductions.netSalary.toFixed(2)}`);
    console.log('---');
  }
  
  module.exports.displayResults = displayResults;
  