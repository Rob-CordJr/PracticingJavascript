// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e
// dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano
// com 365 dias e mês com 30 dias. 
isYearsinDays = (anos, meses, dias) =>{
    var yearsDay = anos * 365
    var yearsMounth = meses * 30
    return yearsDay + yearsMounth + dias
}

console.log(isYearsinDays(26,6,20))
