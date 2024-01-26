var removeElement = function(nums, val) {
  let start = 0;
  let end = nums.length;
  let k = 0;
  console.log(nums);

  while (start < end) {
    console.log("start: " + start);
    if (nums[start] === val) {
      let placeholder = nums.shift();
      nums.push(placeholder);
      console.log(nums);
      k++;
    }

    if (nums[start] != val)
    {
      start++;
    }
    console.log("end: " + end);
  }

  console.log(k);
  return nums;
};

console.log(removeElement([3,2,3,2,3], 3));