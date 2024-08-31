function vowelDots(str){
    const reg = /[aeiou]/gi
    return str.replace(reg, function(vowel){
        return vowel + "."
    })
 
}
