function mult2(a){
    return (b) => {
         a * b
    }
}

function add3(a){
    return (b) => {
        return (c) => {
            a+b+c
        }
    }
}

function sub4(a){
    return (b) => {
        return (c) => {
            return (d) => a - b - c - d
        }
    }
}