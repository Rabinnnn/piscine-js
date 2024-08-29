function reverse(arrStr) {
    // Convert arrStr to array if it's a string
    let isString = false;
    if (typeof arrStr === 'string') {
        arrStr = arrStr.split(''); // Split string into an array of characters
        isString = true;
    }

    let left = 0;
    let right = arrStr.length - 1;

    // Swap elements from both ends towards the center
    while (left < right) {
        const temp = arrStr[left];
        arrStr[left] = arrStr[right];
        arrStr[right] = temp;
        left++;
        right--;
    }

    // Convert back to string if the original arrStr was a string
    if (isString) {
        return arrStr.join('');
    }

    return arrStr; // Return the reversed array
}
