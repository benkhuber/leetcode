var maxArea = function(height) {
  let highestArea = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  
  while (leftIndex < rightIndex) {
    
    if (height[leftIndex] >= height[rightIndex]) {
      area = height[rightIndex] * (rightIndex - leftIndex)
      rightIndex--;

    } else if (height[rightIndex] >= height[leftIndex]) {
      area = height[leftIndex] * (rightIndex - leftIndex);
      leftIndex++;
    }

    if (area > highestArea) {
      highestArea = area;
    }
  }
  return highestArea;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));