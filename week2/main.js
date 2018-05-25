// Varibles numbers, dividers
const numbers = generateArray(1000);
const dividers = generateArray(30);

const divisiblebByThreeFunction = divisibleFactory(3);
console.log(divisiblebByThreeFunction(1));
console.log(divisiblebByThreeFunction(9));
console.log(divisiblebByThreeFunction(10));

const divisiblebByFiveFunction = divisibleFactory(5);
console.log(divisiblebByFiveFunction(1));
console.log(divisiblebByFiveFunction(9));
console.log(divisiblebByFiveFunction(10));

const divisiblebByTenFunction = divisibleFactory(10);
console.log(divisiblebByTenFunction(1));
console.log(divisiblebByTenFunction(9));
console.log(divisiblebByTenFunction(10));

console.log(dividedNumberOfTimesArr(dividers));

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
 * @description Function to generate array of numbers dividedby given parameter
 * @param {number} dividedByNumber - dividedByNumber should contain number
 * @returns {array}  - Returns of array of numbers
 */
function divisibleNumbersArray(dividedByNumber) {
  return numbers.filter(number => number % dividedByNumber == 0);
}

/**
 * @description Function divisibleFactory to generate functions
 * @param {number} dividedBy - dividedBy should contain number
 * @returns {function} divisibilityChecker - divisibilityChecker function returned
 */
function divisibleFactory(dividedBy) {
  function divisibilityChecker(n) {
    return divisibleNumbersArray(dividedBy).includes(n);
  }
  return divisibilityChecker;
}

/**
 * @description This Function to generate array of divided Number of Times
 * @param {array} [arrayOfDividers] - Contains Array of Dividers
 * @returns {array}  - return array contains length of divisible number of times by divider array elements
 */
function dividedNumberOfTimesArr(arrayOfDividers) {
  return arrayOfDividers.map(divider => divisibleNumbersArray(divider).length);
}
