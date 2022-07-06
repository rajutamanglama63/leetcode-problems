const filter_list = (list) => {
  let filteredList = [];

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      filteredList.push(list[i]);
    }
  }

  return filteredList;
};

console.log(filter_list([1, 3, "a", "b", 4]));
