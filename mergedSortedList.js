const mergeTwoSortedList = (list1, list2) => {
  let mergedList = [...list1, ...list2];

  let sortedMergedList = mergedList.sort();

  return sortedMergedList;
};

console.log(mergeTwoSortedList([1, 2, 3], [1, 3, 4]));
