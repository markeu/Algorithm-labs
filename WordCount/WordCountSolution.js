// function wordCount(arrayOfStrings) {
//    let data = {}
//    arrayOfStrings.forEach(([elem]) => {
//       if (data[elem]) {
//         data = {...data, [elem]: data[elem] + 1}
//       } else {
//         data = {...data, [elem]: 1} 
//       }
//    })

//    return data
// }
function wordCount(arrayOfStrings) {
  let map = {};
for (let i = 0; i < arrayOfStrings.length; i++) {
    let item = arrayOfStrings[i];
    map[item] = (map[item] + 1) || 1;
  }
  return map;
}

module.exports = wordCount;

