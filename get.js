function get(src, path) {
    // Get the keys
    const keys = path.split('.'); 
    let output = src; 

    for (let key of keys) {
        if (output === undefined || output === null || !output.hasOwnProperty(key)) {
            return undefined; 
        }
        output = output[key]; 
    }

    return output; 
}