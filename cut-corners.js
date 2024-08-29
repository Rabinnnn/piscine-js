function round(n) {
    // Handles positive and negative numbers
    return n >= 0 ? (n + 0.5) | 0 : (n - 0.5) | 0;
}

function ceil(n) {
    // Handles positive and negative numbers
    return n > (n | 0) ? (n | 0) + 1 : (n | 0);
}

function floor(n) {
    // Handles positive and negative numbers
    return n < (n | 0) ? (n | 0) - 1 : (n | 0);
}

function trunc(n) {
    // Handles positive and negative numbers
    return n | 0;
}

// Test the custom functions
const nums = [3.7, -3.7, 3.1, -3.1];
console.log(nums.map(round));  // [ 4, -4, 3, -3, 0 ]
console.log(nums.map(floor));  // [ 3, -4, 3, -4, 0 ]
console.log(nums.map(trunc));  // [ 3, -3, 3, -3, 0 ]
console.log(nums.map(ceil));   // [ 4, -3, 4, -3, 0 ]
