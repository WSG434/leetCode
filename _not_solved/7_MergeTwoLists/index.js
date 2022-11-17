//Шаблон, пример

//---------------------------Task condition
//Task #21. Merge Two Sorted Lists

//https://leetcode.com/problems/merge-two-sorted-lists/
//Easy


//---------------------------Test cases

let list1 = [1, 2, 4], list2 = [1, 3, 4]; //[1,1,2,3,4,4]



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