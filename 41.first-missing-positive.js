/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums.length === 0 ) {
    return 1
  }
  let length = nums.length
   // 依次扫描nums中的每一个数，试图将那些范围在1~length的数放置到对应的位置上去
  for (let i = 0; i < length; i++) {
    while (nums[i] > 0 && nums[i] < length && nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1)
    }
  }
  for (let i = 0; i < length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return length + 1
};

function swap (arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]]
}

