const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1 ,array2) {
  console.log("array1 = " + array1);
  console.log("array2 = " + array2);

  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1]);
    result.push(array[array.length / 2]);
  } else {
    result.push(array[Math.floor(array.length / 2)]);
  }
  return result;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));