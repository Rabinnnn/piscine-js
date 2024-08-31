const reg = /[aeiou]/gi
function vowelDots(str){
    
    return str.replace(reg, function(vowel){
        return vowel + "."
    })
 
}
