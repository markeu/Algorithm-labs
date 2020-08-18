// task
// We are tracking down our rogue agent and she travels from place to place to avoid being tracked. Each of her travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the complete route she will take.

// You are given an array of routes containing her travel itineraries. Convert this into a complete, in-order list of the places she will travel.

// Specification
// findRoutes(routes)
// Parameters
// routes: Array<Array<String>> - Array of itineraries

// Return Value
// String - An ordered list or destinations

// Constraints
// All inputs have at least one valid, complete route

// Examples
// routes	Return Value
// [["USA","BRA"],["JPN","PHL"],["BRA","UAE"],["UAE","JPN"]]
// "USA => BRA => UAE => JPN => PHL"

const findRoutes = (routes) => {
    const trace = []; // A tracked route

    routes
        .map((currentPair) => {
            // Search first point
            if (!routes.find((point) => {
                    point[1] === currentPair[0];
                })) {
                // Push first point to the route
                trace.push(currentPair[0]);
                trace.push(currentPair[1]);
            }
        })
        .map(() => {
            // Compute a route
            routes.map((currentPair) => {
                // Push next point to the route
                currentPair[0] === trace[trace.length - 1] &&
                    trace.push(currentPair[1]);
            });
        });

    return trace.join(", ");
};

console.log(
    findRoutes([
        ["USA", "BRA"],
        ["JPN", "PHL"],
        ["BRA", "UAE"],
        ["UAE", "JPN"],
    ])
);

function dirReduc(arr) {
    let newArr = [...arr];
    let index;
    for (index = 0; index < newArr.length; index++) {
        if (newArr[index] === "NORTH" && newArr[index + 1] === "SOUTH") {
            newArr.splice(index, 2);
            index -= 2;
            continue;
        }
        if (newArr[index + 1] === "EAST" && newArr[index] === "WEST") {
            newArr.splice(index, 2);
            index -= 2;
            continue;
        }
        if (newArr[index + 1] === "WEST" && newArr[index] === "EAST") {
            newArr.splice(index, 2);
            index -= 2;
            continue;
        }
        if (newArr[index] === "SOUTH" && newArr[index + 1] === "NORTH") {
            newArr.splice(index, 2);
            index -= 2;
            continue;
        }
    }
    return newArr;
}

console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

const splitInteger = (num, parts) => {
    let result = Array(parts).fill(0);
    result.forEach((element, index) => {
        index < num % parts ?
            (result[index] = Math.floor(num / parts + 1)) :
            (result[index] = Math.floor(num / parts));
    });
    return result.reverse();
};

console.log(splitInteger(11, 4));

function getMiddle(str) {
    if (str.length == 1) return str;
    let middle = Math.floor(str.length / 2);
    return str.length % 2 == 1 ? str[middle] : str[middle - 1] + str[middle];
}
console.log(getMiddle("testing"));

function findOutlier(integers) {
    //     //your code here
    const getEven = (x) => x % 2 === 0;
    const getOdd = (x) => x % 2 === 1;
    let arr1 = [];
    let arr2 = [];
    for (let int of integers) {
        getEven(int) ? arr1.push(int) : arr2.push(int);
    }
    return arr1.length == 1 ? arr1[0] : arr2.length == 1 ? arr2[0] : -1;
}

const breakChocolate = (n, m) => {
    let area = n * m;
    let ans = area - 1;
    console.log(ans);
    return area > 0 ? ans : 0;
};

const withdraw = (amount) => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    while (amount > 0) {
        if (amount % 100 == 0) {
            amount -= 100;
            count1 += 1;
            continue;
        }
        if (amount % 50 == 0) {
            amount -= 50;
            count2 += 1;
            continue;
        }
        amount -= 20;
        count3 += 1;
    }
    return [count1, count2, count3];
};

console.log(withdraw(23));

function arrayPacking(integers) {
    let binaryArr = [];
    let result = "";
    for (let digit of integers) {
        let temp = Number(digit).toString(2);
        binaryArr.push(temp.padStart(8, "0"));
    }
    [binaryArr[0], binaryArr[binaryArr.length - 1]] = [
        binaryArr[binaryArr.length - 1],
        binaryArr[0],
    ];
    result = binaryArr.join("");
    return parseInt(result, 2);
}

console.log(arrayPacking([24, 85, 0]));

// console.log((200).toString(2));
// console.log((5 ^ 3).toString(2))

const numberToOrdinal = (number) => {
    //get the last digit
    if (number == 0) return 0;
    if (number.toString().endsWith("11")) return `${number}th`;
    if (number.toString().endsWith("12")) return `${number}th`;
    if (number.toString().endsWith("13")) return `${number}th`;
    let lastDigit = number.toString().split("").pop();
    let text;
    switch (lastDigit) {
        case "1":
            text = `${number}st`;
            break;
        case "2":
            text = `${number}nd`;
            break;
        case "3":
            text = `${number}rd`;
            break;
        default:
            text = `${number}th`;
    }
    return text;
};

console.log(numberToOrdinal(131));

function firstNonRepeatingLetter(str) {
    for (let index = 0; index < str.length; index++) {
        const convertToLowerChars = str.toLowerCase();
        const strCompare =
            convertToLowerChars.lastIndexOf(convertToLowerChars[index]) ==
            convertToLowerChars.indexOf(convertToLowerChars[index]);
        if (strCompare) return str.charAt(index);
    }
    return "";
}

console.log(firstNonRepeatingLetter("moooooomemnn"));