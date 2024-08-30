function get(src, path) {
    // Get the keys
    const keys = path.split('.'); 
    let output = ""; 

    for (let key of keys) {
        if (src === undefined || src === null || !src.hasOwnProperty(key)) {
            return undefined; 
        }
        output = src[key]; 
    }

    return output; 
}