function flow(arr) {
    return function (...args) {
        if (args.length > 1) {
            args = [arr[0](...args)];
        }
        return arr.reduce((val, func) => func(val), args[0]);
    };
}