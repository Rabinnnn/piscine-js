function ionOut(input) {
    let arr = input.split(" ");
    let reg = /tion/g;
    let res = [];
    arr.forEach((word) => {
        word.match(rexp) ? res.push(word.replace(/[.,?!]/g, "").slice(0, -3)) : null;
    });
    return res;
}