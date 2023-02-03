// Escreva um método que receba 2 valores: a distância percorrida por um objeto e
// o tempo em que esta distância foi percorrida, depois imprima sua velocidade
// média. Vm = ΔS / ΔT, considere que o tempo e a distância iniciais são iguais a
// 0 (Zero). 

const isVelocityAverage = (dp, tp) =>{
     var Vm = parseFloat(dp)/parseFloat(tp)
     return Vm.toFixed(2)
}

console.log(isVelocityAverage(20, 2))