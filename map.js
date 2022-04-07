const map = function(arr, f) {
  const results = [];
  for (let item of arr) {
    results.push(f(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1 ,array2) {
  console.log("array1 = " + array1);
  console.log("array2 = " + array2);

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([1, 2, 3], x => x + 1), [2, 3, 4]);
assertArraysEqual(map(["asd", "qwe", "zxc"], x => x + 1), ["asd1", "qwe1", "zxc1"]);