const isIMC = (peso, altura) => {
    var imc = peso / altura ** 2

    console.log(`Seu IMC é ${imc.toFixed(2)}`)

    if (imc < 16.9) {
        console.log('Muito abaixo do peso')
    } else if (imc > 17 && imc < 18.4) {
        console.log('Abaixo do peso')
    } else if (imc > 18.5 && imc < 24.9) {
        console.log('Peso Normal')
    } else if (imc > 25 && imc < 29.9) {
        console.log('Acima do Peso')
    } else if (imc > 30 && imc < 34.9) {
        console.log('Obesidade grau I')
    } else if (imc > 35 && imc < 40) {
        console.log('Obesidade grau II')
    } else if (imc > 40) {
        console.log('Obesidade grau II')
    }
}

var peso = 78.8;
var altura = 1.78;

isIMC(peso,altura)

