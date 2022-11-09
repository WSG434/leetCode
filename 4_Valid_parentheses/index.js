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
  if (s.length < 1 || (s.length % 2 !== 0)) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
      case "[":
      case "{":
        currentValues.push(s[i]);
        break;
      case ")":
        if (currentValues[currentValues.length - 1] === "(") {
          currentValues.pop();
        }
        else {
          return false;
        }
        break;
      case "]":
        if (currentValues[currentValues.length - 1] === "[") {
          currentValues.pop();
        }
        else {
          return false;
        }
        break;
      case "}":
        if (currentValues[currentValues.length - 1] === "{") {
          currentValues.pop();
        }
        else {
          return false;
        }
        break;
      default:
        console.log("Ooops... it's not a bracket");
        break;
    }
  }

  if (currentValues.length !== 0) {
    return false;
  } else {
    return true;
  }

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