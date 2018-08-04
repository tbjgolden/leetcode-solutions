/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const toFind = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const index = toFind.findIndex(([x]) => ((target - num) === x));
    if (index >= 0) return [toFind[index][1], i];
    toFind.push([num, i]);
  }
}

