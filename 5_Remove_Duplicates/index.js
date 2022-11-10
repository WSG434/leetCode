//Шаблон, пример

//---------------------------Task condition
//Task #1047 Remove All Adjacent Duplicates In String
//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
//Easy


//---------------------------Test cases

let s1 = "abbaca";
let s2 = "azxxzy";
let s3 = "azzxxxxxxzzyyyy";
let s4 = "aazazxsxxxxxzzyyyy";
let s5 = "";
let s6 = "a";
let s7 = "aa";
let s8 = "aaa";
let s9 = "axa";


//---------------------------Solution (logic mistake + recursion is bad)
// function removeDuplicates(s) {
//   let res = [];
//   for (let i = 0; i < s.length; i++) {
//     while (s[i] === s[i + 1] && i + 1 < s.length) {
//       i++;
//     }
//     if (i - 1 >= -1 && s[i - 1] !== s[i]) {
//       res.push(s[i]);
//     }
//   }

//   if (s.length === res.length) {
//     // return res;
//     // return res.reduce((s, current) => s + current);
//     return res.length > 0 ? res.reduce((s, current) => s + current) : "";
//   }
//   else {
//     return removeDuplicates(res);
//   }
// }


//---------------------------Solution2

function removeDuplicates(s) {
  let res = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(s[i]);
    }
  }

  return res.join("");
}



//---------------------------Check result
console.log(removeDuplicates(s1));