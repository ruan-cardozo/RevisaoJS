const entradaDados = require('readline-sync')

function charCount(str, letra) {
  let letraCount = 0;
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) == letra) {
      letraCount += 1;
    }
  }
  return letraCount;
}
let palavra = entradaDados.question("Informe uma palavra: ")
let letra = entradaDados.question("Informe uma letra: ")
console.log(charCount(palavra, letra));