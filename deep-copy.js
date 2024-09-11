function deepCopy(input){
  if (Array.isArray(input)){
    var result = []
    for(var i = 0; i < input.length; i++){
        result[i] = deepCopy(input[i])
    }
    return result
  } else if ((typeof input === "object") && !(Array.isArray(input) && !(input === null) && !(input instanceof RegExp)) ){
    var result = {}
    for (var key in input){
        result[key] = deepCopy(input[key])
    }
    return result
  }else{
    return input
  }
}