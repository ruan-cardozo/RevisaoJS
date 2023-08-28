const numSorteado = []
let numeros = 0
function criaAleatorios() {
  numeros = parseInt(Math.random() * 100);
  return numeros
}

for (let i = 0; i  <  10;  i++) {
  numSorteado.push(criaAleatorios())
}
for (const numero of numSorteado) {
  console.log("Número Sorteado...: " + numero)
}