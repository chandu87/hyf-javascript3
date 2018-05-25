function generateArray(arrayLength) {
  let arr = [];
  for (let i = 1; i <= arrayLength; i++) {
    arr.push(i);
  }
  return arr;
}

function divisibleFactory(dividedBy) {
  let divisibleNumbersArray = numbers.filter(number => number % dividedBy == 0);

  function divisibilityChecker(n) {
    return divisibleNumbersArray.includes(n)
    ;
  }
  return divisibilityChecker;
}

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

function dividedNumberOfTimesArr() {
  return dividers.map(
    divider => numbers.filter(number => number % divider == 0).length
  );
}
console.log(dividedNumberOfTimesArr());
