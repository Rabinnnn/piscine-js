async function all(input = {}) {
    var output = {};
    if (Object.keys(input).length === 0) return {};
    for (let key in input) {
        output[key] = await input[key];
    }
    return output;
}