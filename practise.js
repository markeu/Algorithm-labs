function matchMismatch(str) {
    return str
        .replace(/2/g, "Z")
        .replace(/1/g, "I")
        .replace(/8/g, "B")
        .replace(/3/g, "E")
        .replace(/0/g, "O")
        .replace(/5/g, "S");
}

function similarLicensePlates(plate1, plate2) {
    let plate1Arr = matchMismatch(plate1)
        .replace(" ", "")
        .trim()
        .toLowerCase()
        .split("");
    let plate2Arr = matchMismatch(plate2)
        .replace(" ", "")
        .trim()
        .toLowerCase()
        .split("");

    let result = {};

    plate1Arr.forEach((key, i) => (result[key] = plate2Arr[i]));
    for (const [key, value] of Object.entries(result)) {
        return key == value ? true : false;
    }
}

console.log(similarLicensePlates("AA", "A A A"));

function calSumOfDigit(digits) {
    const num = digits.toString().split("");
    const realDigits = num.reduce(
        (accumulator, currentValue) => +accumulator + +currentValue
    );
    return realDigits;
}

function orderWeight(strng) {
    const seperatedNumberArr = strng.split(" ");
    const result = seperatedNumberArr.sort((a, b) => {
        let sumOfElem1 = calSumOfDigit(a);
        let sumOfElem2 = calSumOfDigit(b);
        return sumOfElem1 == sumOfElem2 ?
            a.localeCompare(b) :
            sumOfElem1 - sumOfElem2;
    });

    return result.join(" ");
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
//"11 11 2000 10003 22 123 1234000 44444444 9999";