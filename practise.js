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

// function parseHTMLColor(color) {
//     // implement me...
//     const presentColorMap = PRESET_COLORS[color.toLowerCase()];

//     if (color.length == 7) {
//         return converToDecimal(color);
//     } else if (presentColorMap) {
//         return converToDecimal(presentColorMap);
//     } else {
//         let r = color[1].repeat(2);
//         let g = color[2].repeat(2);
//         let b = color[3].repeat(2);

//         return converToDecimal(`#${r}${g}${b}`);
//     }
// }

// console.log(parseHTMLColor("#80FFA0"));

/**
Zion is a planet whose year is divided into four seasons:
Winter, Spring, Summer, and Autumn in that order.
A year has N days and every season lasts for exactly N/4 days.
The year starts on the first day of Winter and ends on the last day of Autumn.
Given the history of temperatures from the previous year, find the season with the highest amplitude of temperatures.
The amplitude is the difference between the highest and lowest temperatures over the given period.
Assume that all seasons within one year have different temperature amplitudes.
Write a function
that, given an array T of N integers denoting the temperatures on all days of the year,
returns a string with the name of the season with the highest temperature amplitude (one of the following: "WINTER", "SPRING", "SUMMER", "AUTUMN").
For example, given T = [−3, −14, −5, 7, 8, 42, 8, 3]:
the function should return "SUMMER", since the highest amplitude (42 - 8 = 34) occurs in summer.
Given T = [2, −3, 3, 1, 10, 8, 2, 5, 13, −5, 3, −18]:
the correct answer is "AUTUMN" (amplitude equals 21 [3 - -18]).
Assume that:
The number of elements in the array is divisible by 4;
each element of array T is an integer within the range [−1,000..1,000];
N is an integer within the range [8..200];
Amplitudes of all seasons are distinct.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
**/
const SEASONS = ["Winter", "Spring", "Summer", "Autumn"];

function seasonWithHighestAmplitude(temperatures) {
    if (!Array.isArray(temperatures)) {
        throw TypeError("Expected Array, got " + typeof temperatures);
    }

    if (!temperatures.length || temperatures.length % 4 !== 0) {
        return "";
    }

    const days = temperatures.length;
    const seasonLength = days / 4;

    const winterTemperatures = temperatures.slice(0, seasonLength);
    const springTemperatures = temperatures.slice(seasonLength, seasonLength * 2);
    const summerTemperatures = temperatures.slice(
        seasonLength * 2,
        seasonLength * 3
    );
    const autumnTemperatures = temperatures.slice(
        seasonLength * 3,
        seasonLength * 4
    );

    const winterAmplitude = calculateAmplitude(winterTemperatures);
    const springAmplitude = calculateAmplitude(springTemperatures);
    const summerAmplitude = calculateAmplitude(summerTemperatures);
    const autumnAmplitude = calculateAmplitude(autumnTemperatures);

    const amplitudes = [
        winterAmplitude,
        springAmplitude,
        summerAmplitude,
        autumnAmplitude,
    ];

    const highestAmplitude = amplitudes.indexOf(Math.max(...amplitudes));

    return SEASONS[highestAmplitude];
}

function calculateAmplitude(seasonTemperatures) {
    const lowestTemp = Math.min(...seasonTemperatures);
    const highestTemp = Math.max(...seasonTemperatures);

    return highestTemp - lowestTemp;
}
export { seasonWithHighestAmplitude }; // please don't modify--an export is needed

// return (
//   this.itemsPerPage -
//   Math.ceil(

//   )
// );

//(((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) % this.itemsPerPage;

var collection = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
];

// function pageItemCount(pageIndex) {
//     //if (pageIndex < 0 || pageIndex > this.pageCount() - 1) return -1;
//     return (
//         this.itemsPerPage -
//         Math.ceil(
//             (((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) %
//             this.itemsPerPage
//         )
//     );
// }

// console.log(pageItemCount(0));

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
// function PaginationHelper(collection, itemsPerPage) {
//     this.collection = collection;
//     this.itemsPerPage = itemsPerPage;
// }

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function() {
//     if (this.collection.length == 0) return -1;
//     let itemCount = 0;
//     itemCount = this.collection.length;
//     return itemCount;
// };

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function() {
//     if (this.collection.length == 0) return -1;
//     let count = 0;
//     count = Math.ceil(this.collection.length / this.itemsPerPage);
//     return count;
// };

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function(pageIndex) {
//     if (this.collection.length == 0) return -1;
//     if (pageIndex < 0 || pageIndex > this.pageCount() - 1) return -1;

//     const chunk = (target, size) => {
//         return target.reduce(
//             (memo, value, index) => {
//                 // Here it comes the only difference
//                 if (index % (target.length / size) == 0 && index !== 0) memo.push([]);
//                 memo[memo.length - 1].push(value);
//                 return memo;
//             }, [
//                 []
//             ]
//         );
//     };
//     const ans = chunk(this.collection, this.itemCount());
//     return ans[pageIndex].length;
// };

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function(itemIndex) {
//     if (this.collection.length == 0) return -1;
//     if (itemIndex < 0 || itemIndex > this.itemCount() - 1) return -1;
//     const result = Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
//     return result;
// };