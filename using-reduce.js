function adder(arr, val) {
    return arr.reduce(
        (sum, item) => sum + item,
        val === undefined ? 0 : val
    );
}

function sumOrMul(arr, val) {
    return arr.reduce(
        (sum, item) => {
            if (item % 2 === 0) {
                return sum * item;
            } else {
                return sum + item;
            }
        },
        val === undefined ? 0 : val
    );
}

function funcExec(arr, val) {
    return arr.reduce(
        (sum, item) => {
            if (typeof item === "function") {
                return item(sum, val);
            } else {
                return sum;
            }
        },
        val === undefined ? 0 : val
    );
}