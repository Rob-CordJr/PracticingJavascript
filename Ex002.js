function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++)
        if (num % divisor == 0) return false;
    return true;
}

var determinadoNumero = 15;

for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);


// const isPrime = (num) => {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if (num % i === 0) return "Não é Primo";
//     return num > 1 ? "É Primo" : false;
// }


// const ePrimo = function (num) {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if (num % i === 0) return `O número ${num} não é primo`;
//     return num > 1 ? `O número ${num} é primo` : false;
// }


// console.log(ePrimo(997))