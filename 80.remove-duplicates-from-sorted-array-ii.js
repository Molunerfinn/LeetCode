/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) return 0
  let len = 1
  let pre = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    // 如果当前数字重复次数<=2次，那么依然往len指针位置上放置该数
    if (nums[i] === pre) {
      count++
    } else {
      pre = nums[i]
      count = 1
    }
    if (count <= 2) {
      nums[len] = nums[i]
      len++
    }
  }
  return len
};

