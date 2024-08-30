function pyramid(char, depth) {
    let output = '';

    for (let i = 1; i <= depth; i++) {
        const spaces = ' '.repeat(depth - i); 
        const characters = char.repeat(2 * i - 1);   
        output += spaces + characters + '\n';        
    }

    return output.trimEnd();
}
