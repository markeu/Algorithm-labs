

function solution(P, C) {
    //Provide Your solution here
    const numOfPlayers = C * 2;
    const gamesToPlay = P < numOfPlayers ? Math.floor(P / 2) :  C
    return gamesToPlay
}


module.exports = solution;

// function binarySearch(arr, num){
//     let count = 0;
//     let occurance = 0;
// let startIndex = 0;
// let endIndex = arr.length - 1;
// while(startIndex <= endIndex){
//         count += 1;
//     let middleIndex = Math.floor((startIndex + endIndex) / 2);
//         if(arr[middleIndex] === num){
//             occurance += 1;
//             return {occurance, count}

//         }
//         if(num > arr[middleIndex]){
//             occurance += 1;
//             startIndex = middleIndex + 1;
//             return {occurance, count}
//         }
//         if(num < arr[middleIndex]){
//             occurance += 1;
//             endIndex = middleIndex - 1;
//             return {occurance, count}
//         }
//         else{
//             occurance += 1;
//             return {occurance, count}
//         }
//     }
// }