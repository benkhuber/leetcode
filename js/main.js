var addBinary = function(a, b) {
  binA = 0;
  binB = 0;
  sum = 0;
  output = ""
  
  for (let i = 0; i < a.length; i++)
  {
    if (a[i] == "1")
    {
      binA += (2 ** (a.length - 1 - i));
    }
  }

  for (let i = 0; i < b.length; i++)
  {
    if (b[i] == "1")
    {
      binB += (2 ** (b.length - 1 - i));
    }
  }

  sum = binA + binB;

  while (sum > 0)
  {
    if (sum % 2 == 1)
    {
      output += "1";
    }
    else
    {
      output += "0";
    }
    sum = Math.floor(sum / 2);
  }

  let reverseOutput = output.split('').reverse().join('');

  return reverseOutput;
};

console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));