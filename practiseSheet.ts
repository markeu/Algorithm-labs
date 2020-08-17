let array = ["a", "b", "c", "d", "c"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element.toUpperCase());
}

function myCustomFunction(): number {
  const value = 2 ** 31 - 1;
  return value;
}
console.log(myCustomFunction());

function anotherFunction(params: number) {
  return params ** 10 - 1;
}

const arrayOfNames = [
  { name: "John", age: 4 },
  { name: "phils", age: 10 },
];

console.log(
  arrayOfNames.map((item) => {
    let multiple = item.age * 10;
    return {
      name: item.name,
      age: multiple,
    };
  })
);

console.log(arrayOfNames);

let changeJaneAge = arrayOfNames.map((item) => {
  if (item.age < 10) {
    return 0;
  }
  const age = item.age * 12;
  return { name: item.name, age };
});

console.log(changeJaneAge);

const arrayOfNumbers = [1, 56, 45, 34, 3, 4, 5];

console.log(
  arrayOfNames.reduce((accumulator, item, index, array) => {
    return accumulator + item.name.length;
  }, 0)
);

console.log(arrayOfNumbers.filter((item, index) => index > 3 == 0));

const sumOfProperties = arrayOfNames.reduce(
  (accumulator, item) => {
    const nameLength = item.name.length + accumulator.lengthOfNames;
    const ageSum = item.age + accumulator.sumOfAges;
    return { lengthOfNames: nameLength, sumOfAges: ageSum };
  },
  {
    lengthOfNames: 0,
    sumOfAges: 0,
  }
);

console.log(sumOfProperties);

function includes(array: any[], value: any) {
  return array.reduce((accumulators: boolean, item: any) => {
    if (accumulators == false) {
      return item == value;
    }
  }, false);
}

// //implement find with .reduce()
function find(array: any[], predicate: (arg0: any) => any) {
  return array.reduce((accumlator: any, item: any) => {
    if (accumlator !== undefined) {
      return accumlator;
    }
    const found = predicate(item);
    if (found) {
      return found;
    }
    return undefined;
  }, undefined);
}

// //implement some with .reduce()
function some(arr, fn) {
  return arr.reduce((result, item) => {
    // if(result == false)return result
    return fn(item) ? result : true;
  }, false);
}

// //implement every with .reduce()
function every(arr, fn) {
  return arr.reduce((result, item) => {
    // if (result !== false) return true
    return fn(item) ? true : result;
  }, false);
}

// //implement map with .reduce()
function map(arr, fn) {
  return arr.reduce(function (result, item) {
    return [...result, fn(item)];
  }, []);
}

// //implement filter with .reduce()
function filter(arr, fn) {
  return arr.reduce(function (result, item) {
    return fn(item) ? [...result, item] : result;
  }, []);
}

// console.log(filter([1, 2, 3, 4, 3, 5], (e => e == 3)));
// console.log(map([1, 2, 3, 4, 3, 5], (e => e + 3)))
// console.log(some([1, 2, 5, 4, 5, 5], (e => e == 3)))
// console.log(every([3, 3, 3, 3, , 3], (e => e == 3)))

function packarray(arr) {
  let temp = [];
  let result = [];

  for (let i = 0; i < arr.length; i += 2) {
    if (i == arr.length - 1) break;
    let sum = arr[i] + arr[i + 1];
    temp.push(sum);
  }
  for (let i = 0; i < temp.length; i += 2) {
    if (i == temp.length - 1) break;
    let sum = temp[i] * temp[i + 1];
    result.push(sum);
  }
  return result.reduce((acc, ele) => acc + ele);
}

console.log(packarray([1, 2, 3, 4, 5, 6, 7, 8]));
