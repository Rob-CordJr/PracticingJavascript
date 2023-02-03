// . Escreva um método que receba duas notas ( nota1 e nota2) e calcule quanto
// você precisará na prova final de programação II para passar na disciplina. 
isAverage = (n1, n2) =>{
    var op = n1 + n2/2
    return op >= 7.0 ? 'Aprovado' : 'Reprovado'
}

console.log(isAverage(7,8))