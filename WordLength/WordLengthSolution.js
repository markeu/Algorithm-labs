function wordLength(arr) {
//code goes here
const data = []
 arr.forEach(element => {
    const length = element.length;
    data.push([element.toLowerCase(), length])
 });
return new Map(data)
}
// wordLength(["aba", "cdda", "that", "this", "ddac"])

module.exports = wordLength
