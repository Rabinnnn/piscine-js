function nasa(num) {
    var output = "";
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output = output + "NASA";
        } else if (i % 3 === 0) {
            output = output + "NA";
        } else if (i % 5 === 0) {
            output = output + "SA";
        } else {
            output = output + i.toString();
        }
        if (i !== num) {
            output = output + " ";
        }
    }
    return output;
}