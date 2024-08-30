function triangle(char, depth) {
    let output = '';

    for (let i = 1; i <= depth; i++) {
        output += char.repeat(i);
        if (i < depth) {
            output += '\n'; 
        }
    }

    return output;
}



