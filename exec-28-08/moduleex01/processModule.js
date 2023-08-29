// processingModule.js
function calculateDeductions(salary) {
    const inssRate = salary > 2500 ? 0.08 : 0.05;
    const taxRate = salary > 2500 ? 0.11 : 0;
  
    const inss = salary * inssRate;
    const tax = salary * taxRate;
    const netSalary = salary - inss - tax;
  
    return { inss, tax, netSalary };
  }
  
  module.exports.calculateDeductions = calculateDeductions;