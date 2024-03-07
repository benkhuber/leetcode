var containsDuplicate = function(nums) {
    const newNums = [...new Set(nums)]
    
    return !(newNums.length == nums.length)
  };