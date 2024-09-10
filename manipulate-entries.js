function filterEntries(input, func) {
    let output = {};
    for (let key in input) {
        if (func([key, input[key]])) {
            output[key] = input[key];
        }
    }
    return output;
}

function mapEntries(entries, mapper) {
    let hold = {};
    for (let key in entries) {
        hold[key] = mapper([key, entries[key]]);
    }
    let output = {};
    for (let key in hold) {
        output[hold[key][0]] = hold[key][1];
    }
    return output;
}

function reduceEntries(entries, func, initialValue) {
    let acc = initialValue;
    for (let key in entries) {
        acc = func(acc, [key, entries[key]]);
    }
    return acc;
}

function lowCarbs(entries) {
    return filterEntries(entries, (entry) => {let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];return parseInt(value) <= 50;});
}

function totalCalories(entries) {
    return Number(
        reduceEntries(
            entries,
            (acc, val) => {
                let value = (nutritionDB[val[0]]["calories"] / 100) * val[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

function cartTotal(entries) {
    let output = {};
    for (let key in entries) {
        output[key] = {};
        for (let dbKey in nutritionDB[key]) {
            output[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return output;
}