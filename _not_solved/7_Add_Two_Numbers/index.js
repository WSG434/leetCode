//Шаблон, пример

//---------------------------Task condition
//Task #2 Add Two Numbers

//https://leetcode.com/problems/add-two-numbers/ 
//Easy


//---------------------------Test cases

// let l1 = [2, 4, 3], l2 = [5, 6, 4];
// let l1 = [0], l2 = [0];
let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];



//---------------------------Solution

function addTwoNumbers(l1, l2) {
  let num1 = 0, num2 = 0;
  for (let i = 0; i < l1.length; i++) {
    num1 += l1[i] * (10 ** i);
  }

  for (let i = 0; i < l2.length; i++) {
    num2 += l2[i] * (10 ** i);
  }

  let num = String(num1 + num2);
  let res = [];

  for (let i = num.length - 1; i >= 0; i--) {
    res.push(Number(num[i]));
  }

  return res;
};



//---------------------------Check result
console.log(addTwoNumbers(l1, l2));
