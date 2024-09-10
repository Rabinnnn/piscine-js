function defaultCurry(input1) {
    return function (input2) {
        let output = {};
        for (let key in input1) {
            output[key] = input1[key];
        }
        for (let key in input2) {
            output[key] = input2[key];
        }
        return output;
    };
}

function mapCurry(func) {
    return function (input2) {
        let output = {};
        for (let key in input2) {
            output[func([key, input2[key]])[0]] = func([key, input2[key]])[1];
        }
        return output;
    };
}

function reduceCurry(input1) {
    return function (input2, input3) {
        let output = input3;
        for (let key in input2) {
            output = input1(output, [key, input2[key]]);
        }
        return output;
    };
}

function filterCurry(input1) {
    return function (input2) {
        let output = {};
        for (let key in input2) {
            if (input1([key, input2[key]])) {
                output[key] = input2[key];
            }
        }
        return output;
    };
}

function reduceScore(input1, input2) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(input1, input2);
}

function filterForce(input) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(input);
}

function mapAverage(input) {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(input);
    for (let key in avgScores) {
        input[key].averageScore = avgScores[key];
    }
    return input;
}