// Retry function to attempt executing a callback multiple times if it fails
function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
        try {
            // Try to execute the callback function with provided arguments
            const res = await callback(...args);
            return res;  // Return the result if successful
        } catch (e) {
            // If the callback throws an error and retry attempts are left
            if (count > 0) {
                // Recursively call retry with one less attempt
                return retry(count - 1, callback)(...args);
            } else {
                // If no attempts are left, throw the error
                throw e;
            }
        }
    };
}

// Timeout function to set a maximum time limit for the callback to resolve
function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        // Create a timeout promise that resolves after 'delay' milliseconds with an Error object
        const timeout = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );

        // Create a promise to resolve the callback execution
        const functionCall = new Promise((resolve) =>
            resolve(callback(...args))
        );

        // Use Promise.race to race between the timeout and the function execution
        const res = await Promise.race([timeout, functionCall]).then(
            (res) => res
        );

        // If the timeout wins (res is an instance of Error), throw the error
        if (res instanceof Error) {
            throw res;
        }

        // Return the result of the callback if it resolves within the delay time
        return res;
    };
}
