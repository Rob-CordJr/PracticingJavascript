isNewSalary = (sal, perc) => {
        var newSal = sal + (sal * (perc / 100)) 
        return console.log(`Seu novo salario é ${newSal}`)
}

isNewSalary(1212,15)