function dayOfTheYear(date) {
    let count = 1;
    while (!dayOne(date)) {
        date.setDate(date.getDate() - 1);
        count++;
    }
    return count;
}

function dayOne(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}