(function stepOne() {
  let array1000 = generateArray(1000);
  console.log(array1000);
  let array30 = generateArray(30);
  console.log(array30);

  const divisibleFactory = function(z) {
    return arr.filter(number => number % z == 0);
  };
  const divisbleByThree = divisibleFactory(3);
  console.log("Numbers divisible by three are : ", divisbleByThree);
  console.log("Divisible by three array length is : ", divisbleByThree.length);

  let divisibleResultArr = divisibleArr.map(
    number => divisibleFactory(number).length
  );
  console.log(divisibleResultArr);

  function generateArray(arrayLength) {
    let arr = [];
    for (let i = 1; i <= arrayLength; i++) {
      arr.push(i);
    }
    return arr;
  }
})();
