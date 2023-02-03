isLarger = (num, num2, num3) =>{
    if (num > num2 && num > num3) {
        return console.log('Este é o maior: ', num)
    } else if (num2 > num && num2 > num3) {
        return console.log('Este é o maior: ', num2)
    } else if (num3 > num && num3 > num2){
        return console.log('Este é o maior: ', num3)
    }else{
        return console.log('Todas as variaveis possuem o mesmo valor')
    }
}

isLarger(5,1,10)