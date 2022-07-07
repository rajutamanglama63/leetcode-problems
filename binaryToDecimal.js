// const binaryArrayToNumber = (arr) => {
//   let reverseArr = [];
//   let decimalNum = null;
//   for (let i = 0; i < arr.length; i++) {
//     reverseArr.unshift(arr[i]);
//   }

//   for (let j = 0; j < reverseArr.length; j++) {
//     decimalNum += reverseArr[j] * (2 ^ reverseArr[j]);
//   }
//   return decimalNum;

// };

const binaryArrayToNumber = (arr) => {
  // your code
  let decimalNumStr = "";

  for (let i = 0; i < arr.length; i++) {
    decimalNumStr += arr[i];
  }

  let decimalNumber = parseInt(decimalNumStr, 2);

  return decimalNumber;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
