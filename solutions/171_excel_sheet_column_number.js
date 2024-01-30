var titleToNumber = function(columnTitle) {
    let newArr = columnTitle.split('');
    let column = 1;
  
    for (let i = 0; i < newArr.length; i++) {
      if (i == 0) {
        column = newArr[i].charCodeAt() - 64;
      } else if (i >= 0) {
        column *= 26;
        column += newArr[i].charCodeAt() - 64;
      }
    }
    return column;
  };
  