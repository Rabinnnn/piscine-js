function deepCopy(input){
  if (Array.isArray(input)){
    var result = []
    for(let i = 0; i < input.length; i++){
        result[i] = deepCopy(input[i])
    }
    return result
  } else if ((typeof input === "object") && !(Array.isArray(input) && !(input === null) && !(input instanceof RegExp)) ){
    var result = {}
    for (let key in input){
        output[key] = deepCopy(input[key])
    }
    return output
  }else{
    return input
  }
}