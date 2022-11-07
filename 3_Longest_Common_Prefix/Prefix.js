//Шаблон, пример

//---------------------------Task condition
//Task #14 Longest Common Prefix
//https://leetcode.com/problems/two-sum/
//Easy

//---------------------------Test cases

strs = ["flower", "flow", "flight"];
// strs2 = ["dog", "racecar", "car"];
// strs3 = ["c", "acc", "ccc"];


//---------------------------Solution

function findPrefix(strs) {
  s = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {

      if (strs[j][i] !== strs[0][i]) {
        return s;
      }

      if (j + 1 === strs.length) {
        s = s + strs[0][i];
      }

    }
  }
  return s;
}

//---------------------------Check result
console.log(findPrefix(strs));
