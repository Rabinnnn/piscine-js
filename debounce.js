function debounce(func, delay) {
    let timer = null; // keep track of timeout
    return function () {
        let context = this;
        let args = arguments;
        
        clearTimeout(timer); // reset timeout
        timer = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

function opDebounce(func, delay, options) {
    var timer = null,
        first = true, // flag will become false after first invocation
        leading; // indicate whether the function should run instantly after first call
    if (typeof options === 'object') {
        leading = !!options.leading;
    }
    return function () {
        let context = this,
            args = arguments;
        if (first && leading) {
            func.apply(context, args);
            first = false;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}