/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let length = nums.length
  let left = 0
  let right = length
  // 取数组长度的中位数middle
  // 统计数组中value <= middle的数目count
  // 如果middle前面的数字都没有重复 比如 [4,4,1,3,2] (1,2)没有重复
  // 那么count === middle
  // 如果有遗漏 count < middle 比如 [4,1,3,3,3] (1)
  // 如果有遗漏了，说明重复数字在middle右侧
  // 如果有重复 count > middle 比如 [4,1,1,3,2] (1,1,2)
  // 如果有重复了，明说重复数字在middle左侧
  // 最后找到的left(right)的值就是要找的数字。而不是nums[left]。
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2)
    let count = 0
    for (let i = 0; i < length; i++) {
      if (nums[i] <= middle) {
        count++
      }
    }
    if (count <= middle) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return left
};

