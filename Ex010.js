isNumberPerfect = (num) => {
    let divisores = 0;

    for (let i = 1; i < num; i++) {
        for (let j = 1; j < num; j++) {
            if (num % j === 0) {           
                divisores = divisores + j
            }
        }
       
        return divisores === num ? `Número ${num} é perfeito` : `Número ${num} não é perfeito`
    }



}


console.log(isNumberPerfect(10))

// Em Matemática, um número perfeito é um número inteiro para o qual a soma de todos os seus divisores positivos próprios (excluindo ele mesmo) é igual ao próprio número.