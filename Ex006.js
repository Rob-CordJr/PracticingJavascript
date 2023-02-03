isFibonacci = (num) =>{
    var f_ant = 0;
    var f_atual = 1;
    var i = 1
    if (num > 0) {
        while (i < num) {
            var f_prox = f_ant + f_atual
            f_ant = f_atual
            f_atual = f_prox
            i = i + 1
        }

        console.log(`F${num} = ${f_atual}`)
    }else{
        return 'Este número não é positivo'
    }
}

isFibonacci(10)



