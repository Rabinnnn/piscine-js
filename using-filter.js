function filterShortStateName(arr) {
    return arr.filter((item) => item.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((item) =>  item.match(/^[aeiou]/));
}

function filter5Vowels(arr) {
    return arr.filter((item) => item.match(/[aeiou]/g).length >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter((item) => new Set(item.toLowerCase().match(/[aeiou]/g)).size === 1);
}

function multiFilter(arr) {
    arr = arr.filter((item) => {
        let capital = item.capital.length >= 8;
        let name = !/^[aeiou]/i.test(item.name);
        let tag = /[aeiou]/i.test(item.tag);
        let region = item.region !== "South";
        return capital && name && tag && region;
    });
    return arr;
}