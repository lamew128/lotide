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
    console.log(`Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if(results[sentence.charAt(i)]) {
      results[sentence.charAt(i)].push(i);
    } else {
      results[sentence.charAt(i)] = [i];
    }
  }
  delete results[" "];
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);