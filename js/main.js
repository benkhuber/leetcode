var containsDuplicate = function(nums) {
  const newNums = [...new Set(nums)]
  
  return !(newNums.length == nums.length)
};

console.log(containsDuplicate([1,2,3]))