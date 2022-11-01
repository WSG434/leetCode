
//---------------------------Task condition
//Task #9 Palindrome Number
//https://leetcode.com/problems/palindrome-number/
//Easy


//---------------------------Test cases
let x;
x = 121; // true
x = -121; //false
x = 10; //false



//---------------------------Solution
function checkPalindrome(n) {
  s = String(n);
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      // console.log(`s=${s[i]} s1=${s[s.length - 1 - i]}`);
      return false;
    }
  }
  return true;
}

//---------------------------Check result
k = checkPalindrome(x);
k;
