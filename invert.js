function invert(input){
    const inverted = {}
    for (let key in input){
        if (input.hasOwnProperty(key)){
            inverted[input[key]] = key
        }
    }
    return inverted
}