//Шаблон, пример

//---------------------------Task condition
//Task #1047 Remove All Adjacent Duplicates In String

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//Easy


//---------------------------Test cases

let nums1 = [1, 1, 2];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];



//---------------------------Solution

function removeDuplicates(arr) {

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] !== arr[i + 1]) {
      arr[count++] = arr[i];
      // count++;
    }
  }

  return count;
}



//---------------------------Check result
console.log(removeDuplicates([1, 1, 2]));