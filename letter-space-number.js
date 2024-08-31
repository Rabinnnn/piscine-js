function letterSpaceNumber(str){
    const reg = /[a-zA-Z] \d(?![a-zA-Z0-9])/g
    const output = str.match(reg)

    return output !== null ? output : []
}

console.log(letterSpaceNumber('example 1, example 20'))
