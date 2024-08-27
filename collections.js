function arrToSet(arr){
    return new Set(arr);
}

function arrToStr(arr){
    return arr.join('')
}

function setToArr(set){
    return Array.from(set)
}

function setToStr(set){
    return Array.from(set).join('')
}

function strToArr(str){
    return str.split('')
}

function strToSet(str){
    return new Set(str.split(''))
}

function mapToObj(map){
    const obj = {}
    map.forEach((value, key) => {
        obj[key] = value
    })
    return obj
}

function objToArr(obj){
    return Object.values(obj)
}

function objToMap(obj){
    return new Map(Object.entries(obj))
}

function arrToObj(arr){
    const obj = {}
    arr.forEach((value, index) => {
        obj[index] = value
    })
    return obj
}

function strToObj(str){
    const obj = {}
    str.split('').forEach((char, index) => {
        obj[index] = char
    })
    return obj
}

function superTypeOf(input){
    if(input === null) return 'null'
    if(input === undefined) return 'undefined'
    if(Array.isArray(input)) return 'Array'
    if(input instanceof Set) return 'Set'
    if(input instanceof Map) return 'Map'

    return Object.prototype.toString.call(input).slice(8, -1)
}