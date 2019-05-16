/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  if (nums.length <= 1) {
    return nums
  }
  let arr = nums.sort((a, b) => a - b).slice()
  let length = nums.length
  let middleIndex = Math.floor((length - 1) / 2)
  let largeIndex = length - 1
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) { // 偶数
      nums[i] = arr[middleIndex]
      middleIndex--
    } else {
      nums[i] = arr[largeIndex]
      largeIndex--
    }
  }
  return nums
};

