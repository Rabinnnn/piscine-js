async function series(input) {
    var output = [];
    for (const elem of input) {
        output.push(await elem());
    }
    return output;
}