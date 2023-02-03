//  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa.
// Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$
// 1.500,00 ou 5% se ultrapassar este valor, calcular e escrever o seu salário total.

isReadjusment = (salfixed, vendas) =>{
    if (vendas <= 1500) {
        return salfixed + (salfixed * 0.03)
    }else{
        return salfixed + (salfixed * 0.05)
    }
}

console.log(isReadjusment(3212,1880))