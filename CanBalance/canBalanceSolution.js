//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.

function canBalance(array) {
  //Type your solutions here
let total = 0;
  array.forEach(element => {
    total += element
  });
  
const splitValue = total/2;
let figure1 = 0;
let figure2 = 0;
let figure1Array = [];
let figure2Array = [];
if(splitValue == 0) return -1;
for (let i = 0; i < array.length; i++) {
    if(figure1 != splitValue){
      figure1 += array[i];
      figure1Array.push(array[i]);
    }else{
      figure2 += array[i];
      figure2Array.push(array[i]);
    } 
 }

  if(figure1 == figure2 && figure2Array.length != 0){
    return [figure1Array.length, figure2Array.length]
    }else{
      return -1;
  }
}
// console.log(canBalance([3, 18, -5, -44, 23, 26, 20, -1, 0, -10, 30]))
module.exports = canBalance;