var isAnagram = function(s, t) {
    let sSum = 0;
    let tSum = 0;
    
    for (let i = 0; i < s.length || i < t.length; i++)
    {
      sSum += s.charCodeAt(i);
      tSum += t.charCodeAt(i);
    }

    return (sSum === tSum);
};

console.log(isAnagram("anagram", "nagaram"));