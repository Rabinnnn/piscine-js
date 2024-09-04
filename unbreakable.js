function split(str, sep) {
   
    if (sep === null) {
        sep = ",";
    }
    var result = [];
    if (sep === "") {
        for (var i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    var end = str.indexOf(sep);
    while (end > -1) {
        end = str.indexOf(sep);
        if (end === -1) {
            break;
        }
        result.push(str.slice(0, end));
        str = str.slice(end + sep.length);
    }
    result.push(str);
    return result;
}

function join(arr, sep) {
    if (sep === null) {
        sep = ",";
    }
    var result = arr[0].toString();
    for (var i = 1; i < arr.length; i++) {
        result += sep + arr[i];
    }
    return result;
}


// function split(str,sep){
//     if(sep === null){
//         sep = ','
//     }
//     var result = []
//     var word = ''
//     for (let i = 0; i < str.length; i++){
//         if (i + sep.length <= str.length && str.slice(i, i + sep.length) === sep){
//             result.push(word)
//             word = ''
//             i += sep.length - 1
//         }else{
//             word += str[i].toString()
//         }
//     }
//     result.push(word)
//     return result
// }

//console.log(split('a, b, c', ','))
