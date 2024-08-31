function sameAmount(str, reg1, reg2){
    const r1 = new RegExp(reg1, "g")
    const r2 = new RegExp(reg2, "g")

    let match1 = str.match(r1)
    let match2 = str.match(r2)
return match1 !== null && match2 !== null && match1.length === match2.length
}