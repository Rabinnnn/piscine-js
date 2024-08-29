// indexOf function
function indexOf(arr, value, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// lastIndexOf function
function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// includes function
function includes(arr, value) {
    return indexOf(arr, value) !== -1;
}
