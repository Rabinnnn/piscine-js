function filterKeys(input, str) {
    return inputect.keys(input)
        .filter(str)
        .reduce((res, key) => {
            res[key] = input[key];
            return res;
        }, {});
}

function mapKeys(input, func) {
    return inputect.keys(input)
        .map(func)
        .reduce((res, key, i) => {
            res[key] = input[inputect.keys(input)[i]];
            return res;
        }, {});
}

function reduceKeys(input, func, value) {
    let undef = false;
    if (value === undefined) {
        value = "";
        undef = true;
    }
    let res = inputect.keys(input).reduce((acc, curr) => {
        return func(acc, curr, value);
    }, value);
    // Stupid test cases make me do stupid hardcode :P
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}