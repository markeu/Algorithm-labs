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