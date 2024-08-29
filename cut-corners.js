function round(n) {
    return (n >= 0 ? Math.floor(n + 0.5) : Math.ceil(n - 0.5));
}

function ceil(n) {
    return n > Math.floor(n) ? Math.floor(n) + 1 : Math.floor(n);
}

function floor(n) {
    return n < Math.ceil(n) ? Math.ceil(n) - 1 : Math.floor(n);
}

function trunc(n) {
    return n >= 0 ? Math.floor(n) : Math.ceil(n);
}

/*
const nums = [3.7, -3.7, 3.1, -3.1];
console.log(nums.map(round));  // [ 4, -4, 3, -3 ]
console.log(nums.map(floor));  // [ 3, -4, 3, -4 ]
console.log(nums.map(trunc));  // [ 3, -3, 3, -3 ]
console.log(nums.map(ceil));   // [ 4, -3, 4, -3 ] */
