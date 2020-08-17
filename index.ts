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

//const locations = ['Abuja', 'Benue', 'Oyo']
function createName(n: number): Array<object> {
  let result = [];
  for (let index = 0; index < n; index++) {
    result.push({ name: `User${index + 1}` });
  }
  return result;
}

console.log(createName(6));

function locationMap(n: number): Array<string> {
  const locations = ["Abuja", "Benue", "Sambisa", "lagos", "katsina"];
  let arr = [];
  for (let i = 0; i < n; i++) {
    i > locations.length - 1
      ? arr.push(locations[i % locations.length])
      : arr.push(locations[i]);
  }
  return arr;
}

console.log(locationMap(51));

function combine(n: number): Array<object> {
  const name: Array<object> = createName(n);
  const location: Array<string> = locationMap(n);
  name.map((ele, index) => (ele.location = location[index]));
  return name;
}

console.log(combine(5));

function evenlyDistributed(n: number): object {
  let passengers = combine(n);
  let reservation;
  if (passengers.length % 5 !== 0) {
    const length: number = passengers.length;
    const spliceNumber: number = length % 5;
    const startSplice: number = length - spliceNumber;
    reservation = passengers.splice(startSplice, spliceNumber);
    return {
      passengers,
      reservation,
    };
  }
  return passengers;
}

console.log(evenlyDistributed(17));
