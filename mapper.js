function map(arr, func) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(func(arr[i], i, arr));
    }
    return output;
}

function flatMap(arr, func) {
    return arr.reduce(
        (acc, val, i, arr) => acc.concat(func(val, i, arr)),
        []
    );
}