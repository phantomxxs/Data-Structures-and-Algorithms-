const mergeArray = (arr1, arr2) => {
  // [0, 1, 4, 7] [3, 5, 9]
  if(arr1.length < 1){
    return arr2
  }
  if(arr2.length < 1){
    return arr2 
  }

  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (
      mergedArray.length < arr1.length + arr2.length &&
      array1Item < array2Item
    ) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergedArray
};

console.log(mergeArray([0, 1, 4, 4, 7], [3, 4, 5, 9]));
