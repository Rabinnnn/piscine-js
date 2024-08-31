function ionOut(input) {
    let arr = input.split(" ");
    let rexp = /tion/g;
    let output = [];
    arr.forEach((word) => {
        word.match(rexp) ? output.push(word.replace(/[.,?!]/g, "").slice(0, -3)) : null;
    });
    return output;
}
