function filter(arr, func) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            output.push(arr[i]);
        }
    }
    return output;
}

function reject(arr, func) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            output.push(arr[i]);
        }
    }
    return output;
}

function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)];
}