// // <!-- Task 6 -->
// // Write a lab to test the binary search algorithm for occurance of an item.

// // Using the binary search algorithm, check if a given number is in a given sorted array of numbers.

// // Given the sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]  and any number, the program
// // should return the following:

// // (1) If it finds the number in the array,
// //  =>The number of occurance of the number in the array
// //  =>The number of iterations taken for the algorithm to find the number

// // (2) If the number is not in the array,
// //  =>-1 for the occurance
// //  =>The number of iterations taken for the algorithm to find the number

// // The return format should be a JavaScript object of the form shown below

// // {
// //     "occurance" : number of occurance of the number in the array,
// //     "count" : number of iterations taken to find the number
// // }
// // For example
// // binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 15) → {occurance: 1, count: 2}
// // binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 11) → {occurance: -1, count: 3}

// function binarySearch(arr, num){
//         let start = 0;
//         let end = arr.length - 1
//         let middle = Math.floor((start + end)/ 2)
      
//         while (arr[middle] !== num && start<= end) {
//           if (arr[middle] < num ) {
//             start = middle + 1
//           } else {
//             end = middle - 1
//           }
//           middle = Math.floor((start + end)/ 2)
//         }
      
//         return arr[middle] === num ? middle : -1
         
// };
// // console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],5))
// console.log(binarySearch([0, 5, 10,15, 20, 22, 30, 35, 40], 40) )
// // binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 11) → {occurance: -1, count: 3}