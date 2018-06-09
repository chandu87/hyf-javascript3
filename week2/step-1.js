/**
 * @description Generate array of numebrs
 * @param {number} arrayLength - The arrayLength should contain digit
 * @returns {array} [arr] - array of numbers
 */
function generateArray(arrayLength) {
  let arr = [];
  for (let i = 1; i <= arrayLength; i++) {
    arr.push(i);
  }
  return arr;
}


/**
 * @description Function divisibleFactory to generate functions
 * @param {array} numbers - numbers should contain array of numbers
 * @returns {function} divisibilityChecker - divisibilityChecker function returned
 */
function divisibleFactory(numbers) {
  function divisibilityChecker(dividedBY) {
    return numbers.filter((number) => number % dividedBY == 0); 
  }
  return divisibilityChecker;
}

// Varibles numbers, dividers
const numbers = generateArray(1000);
const dividers = generateArray(30);
const dividedNumberOfTimesArr = dividers.map(
  divider => divisibleFactory(numbers)(divider).length
);

const divisiblebBy = divisibleFactory(numbers); 
console.log(divisiblebBy(3));
console.log(divisiblebBy(3).includes(1));
console.log(divisiblebBy(3).includes(9));
console.log(divisiblebBy(3).includes(10));
console.log(divisiblebBy(5));
console.log(divisiblebBy(5).includes(1));
console.log(divisiblebBy(5).includes(9));
console.log(divisiblebBy(5).includes(10));
console.log(divisiblebBy(9));
console.log(divisiblebBy(9).includes(1));
console.log(divisiblebBy(9).includes(9));
console.log(divisiblebBy(9).includes(10));


console.log(
  "Array containing lengths of divisbleArray for the dividers between 1-30 : ",
  dividedNumberOfTimesArr
);
