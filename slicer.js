function slice(input, start, end) {
    // Handle default value for `end`
    if (end === undefined) {
        end = input.length;
    }

    // Normalize negative indices
    if (start < 0) {
        start = Math.max(input.length + start, 0);
    }
    if (end < 0) {
        end = input.length + end;
    }

    // Initialize an empty result
    let result;

    // Handle slicing for arrays
    if (Array.isArray(input)) {
        result = [];
        for (let i = start; i < end && i < input.length; i++) {
            result.push(input[i]);
        }
    }
    // Handle slicing for strings
    else if (typeof input === 'string') {
        result = '';
        for (let i = start; i < end && i < input.length; i++) {
            result += input[i];
        }
    } else {
        throw new TypeError('Input must be either an array or a string.');
    }

    return result;
}
