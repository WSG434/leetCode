
//---------------------------Task condition
//Task #1 Two Sum
//https://leetcode.com/problems/two-sum/
//Easy


//---------------------------Test cases
// nums = [2,7,11,15];
// nums = [3,2,4];
nums = [3, 3];
nums;
// target  = 9;
// target  = 6;
target = 6;
target;
currentSum = 0;
result = [0, 0];


//---------------------------Solution
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        let result = [i, j];
        return result;
      }
    }
  }
  return false;
}

//---------------------------Check result
k = twoSum(nums, target);
k;