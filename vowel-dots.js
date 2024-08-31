 const vowels = /[aeiou]/gi
function vowelDots(str){
    return str.replace(vowels, function(vowel){
        return vowel + "."
    })
 
}
