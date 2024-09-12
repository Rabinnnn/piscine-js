function throttle(func, delay) {
    let last = 0; // track the last execution time
    return function () {
        const now = +new Date(); // calculate current time
        if (now - last > delay) {
            func.apply(this, arguments);
            last = now;
        }
    };
}

function opThrottle(func, delay, { leading = false, trailing = true } = {}) { // if leading is true the function will be executed immediately on first call. If trailing is true the function will be executed once more after the last call within the delay period.
    let last = 0;
    let timer = null;
    return function () {
        const now = +new Date();
        // leading execution
        if (!last && leading === false) {
            last = now;
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            func.apply(this, arguments);
            last = now;
        // trailing execution
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                func.apply(this, arguments); // execute func
                last = +new Date();
                timer = null;
            }, delay);
        }
    };
}