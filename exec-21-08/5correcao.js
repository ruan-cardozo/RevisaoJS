let entrDados = require("readline-sync")
let notacao = ""
let hora2 = 0
let horapm = 0
let horaEntrada = ""

function converteHoras(hora) {
  hora2 = hora
  if (hora < 12) {
    notacao = "A"
    horapm = hora
  } else if (hora > 12) {
    horapm = hora - 12
    notacao = "P"
  } else {
    notacao = "P"
    horapm = 12
  }

  if (horapm == 12 && hora == 24) {
    notacao = "A"
  }
}

function mostraResultado(minutos) {
  console.log("Padrao 24 horas:... " + hora2 + ":" + minutos, 
              "Padrao 12 horas:... " + horapm + ":" + minutos, "Notaçao:.. " + notacao)
}

horaEntrada = entrDados.question("Informe a hora (padrao 24 horas) no formato HH:MM ")
if (parseInt(horaEntrada.substring(0, 2)) > 24) {
  console.log("Hora inválida...")
  process.exit()
}
converteHoras(parseInt(horaEntrada.substring(0, 2)))
mostraResultado(horaEntrada.substring(3, 5))