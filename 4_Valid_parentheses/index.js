//Шаблон, пример

//---------------------------Task condition
//Task #20 Valid Parentheses
//https://leetcode.com/problems/valid-parentheses/
//Easy


//---------------------------Test cases
let s1 = "()"; //true
let s2 = "()[]{}"; //true
let s3 = "(]"; //false
let s4 = "(([])[])()"; //true
let s5 = "["; //false
let s6 = "(("; //false
let s = "([)]"; //false

//---------------------------Solution (doesnt work)
function isValid(s = "") {

  let currentValues = [];

  for (let elem of s) {
    switch (elem) {
      case "(":
        currentValues.push(")");
        break;
      case "[":
        currentValues.push("]");
        break;
      case "{":
        currentValues.push("}");
        break;
      default:
        if (currentValues.pop() !== elem) {
          return false;
        }
        break;
    }
  }

  return currentValues.length === 0;

}

//---------------------------Check result
k = isValid(s);
k;

// let s1 = "()"; //true
// let s2 = "()[]{}"; //true
// let s3 = "(]"; //false
// let s4 = "(([])[])()"; //true
// let s5 = "["; //false
// let s6 = "(("; //false
// let s = "([)]"; //false