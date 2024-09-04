function fold(arr, func, val) {
    for (let i = 0; i < arr.length; i++) {
        val = func(val, arr[i], i, arr);
    }
    return val;
}

function foldRight(arr, func, val) {
    for (let i = arr.length - 1; i >= 0; i--) {
        val = func(val, arr[i], i, arr);
    }
    return val;
}

function reduce(arr, func) {
    let val = arr[0];
    for (let i = 1; i < arr.length; i++) {
        val = func(val, arr[i], i, arr);
    }
    return val;
}

function reduceRight(arr, func) {
    let val = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        val = func(val, arr[i], i, arr);
    }
    return val;
}