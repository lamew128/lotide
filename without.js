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

const without = function(source, itemsToRemove) {
  let newSource = [];
  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        remove = true;
        break;
      }
    }
    if (remove === false) {
      newSource.push(source[i]);
    }
  }
  //console.log(source);
  return newSource;
};


const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, "3"], [1, 2, 3]), ["3"]);