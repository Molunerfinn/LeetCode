/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) {
    return []
  }
  if (nums.length === 1) {
    return [`${nums[0]}`]
  }
  let result = []
  let start = nums[0]
  let end = nums[0]
  let length = nums.length
  for (let i = 1; i < length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      if (start !== end) {
        result.push(`${start}->${end}`)
      } else {
        result.push(`${start}`)
      }
      start = nums[i]
      end = nums[i]
      if (i === length - 1) {
        result.push(`${nums[i]}`)
      }
    } else {
      end = nums[i]
      if (i === length - 1) {
        result.push(`${start}->${end}`)
      }
    }
  }
  return result
};

