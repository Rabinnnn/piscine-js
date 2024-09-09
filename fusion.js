function fusion(input1, input2) {
    var output = {};
    for (var key in input1) {
        if (!input1.hasOwnProperty(key)) continue;
        if (input2.hasOwnProperty(key)) {
            if (is.obj(input1[key]) && is.obj(input2[key])) {
                output[key] = fusion(input1[key], input2[key]);
            } else if (is.arr(input1[key]) && is.arr(input2[key])) {
                output[key] = input1[key].concat(input2[key]);
            } else if (is.num(input1[key]) && is.num(input2[key])) {
                output[key] = input1[key] + input2[key];
            } else if (is.str(input1[key]) && is.str(input2[key])) {
                output[key] = input1[key] + " " + input2[key];
            } else {
                output[key] = input2[key];
            }
        } else {
            output[key] = input1[key];
        }
    }
    for (var key in input2) {
        if (!input2.hasOwnProperty(key)) continue;
        if (!input1.hasOwnProperty(key)) {
            output[key] = input2[key];
        }
    }
    return output;
}

const is = {};
is.num = (n) => typeof n === "number";
is.str = (n) => typeof n === "string";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";