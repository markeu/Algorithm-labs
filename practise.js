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

function findOdd(integers) {
    const obj = {};

    for (let i = 0; i < integers.length; i++) {
        const element = integers[i];
        obj[element] = obj[element] ? obj[element] + 1 : 1;
    }

    for (const [key, value] of Object.entries(obj)) {
        if (value % 2 !== 0) {
            return key;
        }
    }
}

console.log(findOdd([5, 1, 1, 5, 2, 2, 5]));

function stringSuffix(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        count += checkEquals(str, str.substr(index));
    }
    return count;
}

function checkEquals(str, compareString) {
    for (let index = 0; index < compareString.length; index++) {
        if (str[index] != compareString[index]) {
            return index;
        }
    }
    return compareString.length;
}
console.log(stringSuffix("ababaa"));

function decode(roman) {
    let romanArr = roman.split("");
    const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let count = 0;
    if (lookup.hasOwnProperty(roman)) {
        count = lookup[roman];
    } else {
        for (let index = 0; index < romanArr.length; index++) {
            const element = romanArr[index];
            if (lookup.hasOwnProperty(element)) {
                count += lookup[element];
            }
        }
    }
    return count;
}

console.log(decode("XXX"));

const getDaysInAYear = (start, end) => Math.ceil((end - start) / 86400000);
const mostFrequentDays = (year) => {
    const dateYearBegins = new Date(year, 0);
    const dateYearEnds = new Date(year, 11, 31, 23, 59, 59, 999);
    const daysInAYear = getDaysInAYear(dateYearBegins, dateYearEnds);
    let remainder = daysInAYear % 7;

    let result = [];
    for (let index = 0; index < remainder; index++) {
        result.push((dateYearBegins.getDay() + index + 6) % 7);
    }

    return result
        .sort()
        .map(
            (i) => [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ][i]
        );
};

console.log(mostFrequentDays(1968));
//['Monday', 'Tuesday']

const converToDecimal = (hex) => {
    let r = parseInt(hex[1] + hex[2], 16);
    let g = parseInt(hex[3] + hex[4], 16);
    let b = parseInt(hex[5] + hex[6], 16);
    return { r, g, b };
};

function parseHTMLColor(color) {
    // implement me...
    const presentColorMap = PRESET_COLORS[color.toLowerCase()];

    if (color.length == 7) {
        return converToDecimal(color);
    } else if (presentColorMap) {
        return converToDecimal(presentColorMap);
    } else {
        let r = color[1].repeat(2);
        let g = color[2].repeat(2);
        let b = color[3].repeat(2);

        return converToDecimal(`#${r}${g}${b}`);
    }
}

console.log(parseHTMLColor("#80FFA0"));