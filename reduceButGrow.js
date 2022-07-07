const reduceButGrow = (arr) => {
  let count = arr[0];

  for (let i = 1; i < arr.length; i++) {
    count = count * arr[i];
  }

  return count;
};

console.log(reduceButGrow([1, 2, 3]));
