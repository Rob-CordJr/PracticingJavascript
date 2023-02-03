isContrary = (num) => {
    return num
        .toString()
        .split('')
        .reverse()
        .join('')
}

console.log(isContrary(12))