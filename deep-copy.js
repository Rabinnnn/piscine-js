function deepCopy(input) {
    if (Array.isArray(input)) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result[i] = deepCopy(input[i]);
        }
        return result;
    } else if (isObject(input)) {
        var result = {};
        for (var key in input) {
            result[key] = deepCopy(input[key]);
        }
        return result;
    } else {
        return input;
    }
}

function isObject(input) {
    return (
        typeof input === "object" &&
        !(typeof input === "function") &&
        !Array.isArray(input) &&
        input !== null &&
        !(input instanceof RegExp)
    );
}