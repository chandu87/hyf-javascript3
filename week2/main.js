let stepOne = (function() {
  let array1000 = generateArray(1000);
  let array30 = generateArray(30);
  function generateArray(arrayLength) {
    let arr = [];
    for (let i = 1; i <= arrayLength; i++) {
      arr.push(i);
    }
    return arr;
  }

  return {
    divisibleFactory: function(z) {
      return array1000.filter(number => number % z == 0);
    },
    divisibleResultArr: function() {
      return array30.map(number => this.divisibleFactory(number).length);
    }
  };
})();
console.log(stepOne.divisibleFactory(3));
console.log(stepOne.divisibleResultArr());





//   const divisbleByThree = divisibleFactory(3);
//   console.log("Numbers divisible by three are : ", divisbleByThree);
//   console.log("Divisible by three array length is : ", divisbleByThree.length);
//   const divisbleByTen = divisibleFactory(10);
//   console.log("Numbers divisible by ten are : ", divisbleByTen);
//   console.log("Divisible by ten array length is : ", divisbleByTen.length);
//   const divisbleByTwentyOne = divisibleFactory(21);
//   console.log("Numbers divisible by twentyone are : ", divisbleByTwentyOne);
//   console.log("Divisible by twentyone array length is : ", divisbleByTwentyOne.length);

//   console.log("Divisible by array30", divisibleResultArr);

// var divideCtrl = function divideController(){

// }
// function displayController(){

// }
