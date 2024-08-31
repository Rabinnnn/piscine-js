function vowelDots(str){
    const reg = /[aeiou]/gi
    const output = str.replace(reg, function(vowel){
        return vowel + "."
    })
 return output
}
