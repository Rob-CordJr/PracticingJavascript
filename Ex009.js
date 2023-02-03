isBaskara = (a, b, c) =>{
    // Calculando o delta
    var delta = (Math.pow(b, 2)) - (4 * a * c)

    if (delta < 0) {
        return console.log(`"A equação não possui resultados reais, o valor de delta: ${delta}`)
    }else if( delta === 0){
        return console.log(`a equação possui apenas um resultado real ou possui dois resultados iguais (essas duas afirmações são equivalentes`)
    }else{

        let x1 = (b + Math.sqrt(delta))/(2 * a)
        let x2 = (b - (Math.sqrt(delta)))/(2 * a)
        // console.log(b,x1)
        console.log('As raizes da sua equação são',x1, 'e', x2)
    }

   
}

isBaskara(1,-12, -13)

// "x2 + 12x – 13 = 0 "  resultado esperado: "1 e – 13."

// "2x2 + -16x – 18 "resultado esperado: " 9 e – 1."





// Escreva um método que receba 3 números (double) e segundo a formula da
// equação de baskara (ax2+bx+c), diga quantas raízes existem para a equação, se
// existir, e quais são elas. 
