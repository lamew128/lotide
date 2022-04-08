
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
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

const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length === Object.keys(object2).length) {
      for (let key in object1) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else if (typeof object1[key] === 'object' && !(object1[key] instanceof Array) && typeof object2[key] === 'object' && !(object2[key] instanceof Array)) {
            if (!eqObjects(object1[key], object2[key])) {
              return false;
            }
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
      return true;
    }
    return false;
};


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: {q: 6, w:{}}}, b: 2 }, { a: { y: 0, z: {q: 6, w:{}}}, b: 2 })) // => true