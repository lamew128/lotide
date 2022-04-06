const countLetters = function(letters) {
  let result = {};
  for (let char of letters.split(" ").join("")) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));