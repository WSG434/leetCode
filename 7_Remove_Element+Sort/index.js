//Шаблон, пример

//---------------------------Task condition
//Task #27 Remove Element

//https://leetcode.com/problems/remove-element/
//Easy


//---------------------------Test cases

let nums = [3, 2, 2, 3], val = 3; //2, nums = [2,2,_,_]
// let nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2; /5, nums = [0,1,4,0,3,_,_,_]



//---------------------------Solution

function removeElement(arr = [], val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      delete arr[i];
    } else {
      count++;
    }
  }
  arr.sort((a, b) => a - b);
  arr.length = count;
  return count;
};



//---------------------------Check result
console.log(removeElement(nums, val));