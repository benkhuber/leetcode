var removeElement = function(nums, val) {
  let progressIndex = 0;

  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i] != val)
    {
      nums[progressIndex] = nums[i];
      progressIndex++;
    }
  }
  return progressIndex;
};

console.log(removeElement([3,2,2,3], 3));