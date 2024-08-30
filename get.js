function get(src, path) {
    return path.split(".").reduce(function (val, key) {
        if (val === undefined) {
            return undefined;
        }
        return val[key];
    }, src);
}
