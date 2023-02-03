// Escreva um método que receba o raio e a altura de um cilindro e imprima seu
// volume. (V = π * r2* h) 

const isLightningCylinder = (raio, altura) =>{
    var op = 3.14 * Math.pow(raio,2) * altura
    return op.toFixed(2)
}

console.log(isLightningCylinder(60,2))
