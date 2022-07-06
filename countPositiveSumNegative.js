function countPositivesSumNegatives(input) {
  let result = [];
  let positiveNumCount = 0;
  let negativeNumSum = 0;
  let nonZeroArr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      nonZeroArr.push(input[i]);
    }
  }

  for (let j = 0; j < nonZeroArr.length; j++) {
    if (nonZeroArr[j] > 0) {
      positiveNumCount = nonZeroArr.indexOf(nonZeroArr[j + 1]);
    }

    if (!(nonZeroArr[j] > 0)) {
      negativeNumSum += nonZeroArr[j];
    }
  }

  result.push(positiveNumCount, negativeNumSum);

  return result;
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
