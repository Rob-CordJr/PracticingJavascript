// function Palindromo(string) {
//     var firstCharacter = function(string) {
//         return str.slice(0, 1);
//     };

//     var lastCharacter = function(string) {
//         return str.slice(-1);
//     };

//     for (let i = 0; i < string.length; i++) {
//         if (firstCharacter(string) === lastCharacter(string)) {
//             return true    
//         }else{
//             return false
//         }

//     }
// }

// function proximosMultiplosDe5(valorInicial, quantidade) {
//     // escreva seu código aqui :)
//     const arr = []
//     const valor = valorInicial + quantidade
//     for (let i = valorInicial; i <= valor; i++) {
//         if (i % 5 === 0) {
//             arr.push(i)
//         }
//     }

//     return arr
// }


// var valorInicial = 4
// var quantidade = 2
// console.log(proximosMultiplosDe5(valorInicial, quantidade))
// lst = [5, 2, 3, 4, 1] 

// function miniMaxSum(lst) {
//     var somaMax = 0;
//     var somaMin = 0;


//     for (let i = 0; i < lst.length - 1; i++) {
//         somaMax+= lst[i]; 
//     }
//     for (let i = lst.length - 1; 0 < i; i--) {
//         somaMin+= lst[i]; 
//     }

//     var arr = [somaMin, somaMax]

//     return arr
// }

// function trocaVogais(string) {
//     // Escreva aqui seu código

//     var transform = '';
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
//             transform += '1';
//         } else {
//             transform += string[i]
//         }
//     }



//     return transform
// }




function sequence(number) {

    var arr = [];
    var soma = 0;
    for (let i = 0; soma < number; i++) {

        if (soma < number) {
            arr.push( soma + i)
        } else {
            return arr
        }
        soma += i;

    }

}
console.log(sequence(18))

// sequence(18)