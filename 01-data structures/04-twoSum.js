var twoSum = function (nums, target) {
  let pair = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      if(nums[i] + nums[j] === target){
          pair = [i, j]
          // break;
      }
    }
  }

  return pair;
};

// console.log()
twoSum([3, 2, 4], 6);
