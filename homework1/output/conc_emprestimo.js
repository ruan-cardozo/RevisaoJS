import dadoscalc from "../input/dadoscalc.js"

let calcEmprestimo = () => {
  if ((dadoscalc.rendaMensal * 10) < (dadoscalc.valorEmprestimo)) {
       console.log("renda mensal insuficiente ", dadoscalc.rendaMensal, "ao empréstimo ", dadoscalc.valorEmprestimo)
    } else if ((dadoscalc.valorEmprestimo / dadoscalc.numeroPrestacao) > (dadoscalc.rendaMensal * 0.3)) {
      console.log("Empréstimo não concedido, valor das prestações", dadoscalc.valorEmprestimo / dadoscalc.numeroPrestacao, "incompatível com o valor da prestação admitida", dadoscalc.rendaMensal * 0.3)
    } else {
    console.log(`Empréstimo concedido à ${dadoscalc.nomeSolicitante} no valor de R$ ${dadoscalc.valorEmprestimo} em ${dadoscalc.numeroPrestacao} prestação(ões) de ${dadoscalc.valorEmprestimo / dadoscalc.numeroPrestacao}`)
  }
}
 
export default {calcEmprestimo}
