let stepOne = (function() {
  let generateArray = function(arrayLength) {
    let arr = [];
    for (let i = 1; i <= arrayLength; i++) {
      arr.push(i);
    }
    return arr;
  };

  return {
    divisibleFactory: function(lengthOfArr, dividedBy) {
      return generateArray(lengthOfArr).filter(
        number => number % dividedBy == 0
      );
    },
    dividedNumberOfTimesArr: function(divisibleArrLength, lengthOfMainArr) {
      return generateArray(divisibleArrLength).map(
        number => this.divisibleFactory(lengthOfMainArr, number).length
      );
    }
  };
})();

console.log(
  "Numbers divisible by 3 for the array length 1000 : ",
  stepOne.divisibleFactory(1000, 3)
);

console.log(
  "Array divisible by numbers between 1-30 for the array length of 1000",
  stepOne.dividedNumberOfTimesArr(30, 1000)
);
