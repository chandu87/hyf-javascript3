(function stepOne() {
  let array1000 = generateArray(1000);
  console.log(array1000);
  let array30 = generateArray(30);
  console.log(array30);

  const divisibleFactory = function(z) {
    return array1000.filter(number => number % z == 0);
  };
  const divisbleByThree = divisibleFactory(3);
  console.log("Numbers divisible by three are : ", divisbleByThree);
  console.log("Divisible by three array length is : ", divisbleByThree.length);
  const divisbleByTen = divisibleFactory(10);
  console.log("Numbers divisible by ten are : ", divisbleByTen);
  console.log("Divisible by ten array length is : ", divisbleByTen.length);
  const divisbleByTwentyOne = divisibleFactory(21);
  console.log("Numbers divisible by twentyone are : ", divisbleByTwentyOne);
  console.log("Divisible by twentyone array length is : ", divisbleByTwentyOne.length);

  let divisibleResultArr = array30.map(
    number => divisibleFactory(number).length
  );
  console.log("Divisible by array30", divisibleResultArr);

  function generateArray(arrayLength) {
    let arr = [];
    for (let i = 1; i <= arrayLength; i++) {
      arr.push(i);
    }
    return arr;
  }
})();
