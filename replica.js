// create object
var is = {};
// add 3 functions as properties
is.arr = (n) => Array.isArray(n);
is.obj = (n) =>
    typeof n === 'object' &&
    !is.fun(n) &&
    !is.arr(n) &&
    n !== null &&
    !(n instanceof RegExp);
is.fun = (n) => typeof n === 'function';


// deep assign values
function replica(target, ...sources) {
    sources.forEach((source) => { // iterate through each source
        Object.keys(source).forEach((key) => { // iterate through each key in each source
            if (is.obj(source[key])) {
                // handle deep merging
                if (!target.hasOwnProperty(key) || !is.obj(target[key])) {
                    target[key] = {};
                }
                replica(target[key], source[key]);
            } else {
                target[key] = source[key]; // handle non-object values
            }
        });
    });
    return target;
}