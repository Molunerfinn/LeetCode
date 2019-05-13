/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      let j = i + 1
      while (nums[j] === 0) {
        j++
        if (j === length -1) {
          break
        }
      }
      if (j === length -1 && nums[j] === 0) {
        return nums
      }
      if (nums[j] !== 0 && nums[j] !== undefined) {
        swap(nums, i, j)
      }
    }
  }
  return nums
};

function swap (nums, a, b) {
  return [nums[a], nums[b]] = [nums[b], nums[a]]
}

