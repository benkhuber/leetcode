var titleToNumber = function(columnTitle) {
  let newArr = columnTitle.split('');
  let column = 1;

  for (let i = 0; i < newArr.length; i++) {
    // console.log(i);
    // console.log(newArr[i]);
    if (i == 0) {
      column = newArr[i].charCodeAt() - 64;
    } else if (i >= 0) {
      column *= 26;
      column += newArr[i].charCodeAt() - 64;
    }
  }

  return column;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));