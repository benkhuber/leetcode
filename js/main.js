var isMonotonic = function(nums) {
  let ascendingCurrent = -Infinity;
  let descendingCurrent = Infinity;
  let ascendingResult = false;
  let descendingResult = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= ascendingCurrent) {
      ascendingCurrent = nums[i];
      ascendingResult = true;
    } else {
      ascendingResult = false;
      break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= descendingCurrent) {
      descendingCurrent = nums[i];
      descendingResult = true;
    } else {
      descendingResult = false;
      break;
    }
  }

  return ascendingResult || descendingResult;
};

console.log(isMonotonic([1,2,2,3]));