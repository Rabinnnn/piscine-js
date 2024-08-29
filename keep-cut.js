// Removes the first 2 characters
function cutFirst(input) {
    return input.slice(2);
}

// Removes the last 2 characters
function cutLast(input) {
    return input.slice(0, -2);
}

// Removes both the first 2 and last 2 characters
function cutFirstLast(input) {
    return input.slice(2, -2);
}

// Returns only the first 2 characters
function keepFirst(input) {
    return input.slice(0, 2);
}

// Returns only the last 2 characters
function keepLast(input) {
    return input.slice(-2);
}

// Returns the first 2 characters and the last 2 characters
function keepFirstLast(input) {
    if (input.length <= 4) {
        return input; // If the string is too short, return it as is.
    }
    return input.slice(0, 2) + input.slice(-2);
}
