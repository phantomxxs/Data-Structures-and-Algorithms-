const firstRecurringBF = (arr) => {
  let result = -1;
  let minSecondIndex = arr.length
  for(let i=0; i < arr.length - 1; i++){
    for(let j=i+1; j < arr.length; j++){
      if(arr[i] === arr[j] & j < minSecondIndex){ // ONLY CHANGE RESULT AND MINSECINDEX if j is less than the already found second index
        result = arr[i]
        minSecondIndex = j;
      }
    }
  }
  return result
};

const firstRecurring = (arr) => {
  const entriesMap = {};

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (entriesMap[arr[i]] !== undefined) {
        return arr[i];
      } else {
        entriesMap[arr[i]] = true;
      }
    }
  }

  return -1;
};

// console.log(firstRecurringBF([2, 5, 1, 3, 6, 2, 1, 7, 8]));
// console.log(firstRecurring([1, 1]));
// console.log(firstRecurring([1]));

console.log(firstRecurringBF([2,5,1,6,7,7,6,1,5,2]));
console.log(firstRecurring([2,5,5,2]));