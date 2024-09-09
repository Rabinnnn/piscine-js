function pick(input, keys) {
    const output = {};
    for (let key in input) {
        let regexp = new RegExp(`^${key}$`);
        if (typeof keys === "string") {
            if (keys.match(regexp)) {
                output[key] = input[key];
            }
        } else {
            if (keys.includes(key)) {
                output[key] = input[key];
            }
        }
    }
    return output;
}

function omit(input, keys) {
    const output = {};
    for (let key in input) {
        if (input.hasOwnProperty(key) === false) continue;
        let regexp = new RegExp(`^${key}$`);
        if (typeof keys === "string") {
            if (!keys.match(regexp)) {
                output[key] = input[key];
            }
        } else {
            if (!keys.includes(key)) {
                output[key] = input[key];
            }
        }
    }
    return output;
}