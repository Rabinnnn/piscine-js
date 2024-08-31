function vowelDots(str){
    const vowels = /[aeiou]/gi

    return str.replace(vowels, function(vowel){
        return vowel + "."
    })
 
}
