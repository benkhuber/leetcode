var findMaxAverage = function(nums, k) {
    let avg = 0;
    let leftIndex = 0;
    let rightIndex = k - 1;
    console.log(nums.length);
  
    if (nums.length == 1) {
      return nums[0];
    }
  
    while (rightIndex < nums.length) {
      let total = 0
  
      for (let i = leftIndex; i <= rightIndex; i++) {
        total += nums[i];
      }
  
      if (nums.length === k) {
        return total / k;
      }
  
      if ((total / k) >= (avg)) {
        avg = (total / k)
      }
  
      leftIndex++
      rightIndex++;
    }
  
    return avg;
  };