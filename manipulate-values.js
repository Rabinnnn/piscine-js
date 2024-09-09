function filterValues(input, callback) {
    let output = {};
    for (let key in input) {
        if (callback(input[key])) {
            output[key] = input[key];
        }
    }
    return output;
}

function mapValues(input, callback) {
    let output = {};
    for (let key in input) {
        output[key] = callback(input[key]);
    }
    return output;
}

function reduceValues(input, callback, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in input) {
        acc = callback(acc, input[key]);
    }
    return acc;
}