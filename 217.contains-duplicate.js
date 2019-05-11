/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
    return false
  }
  let hash = {}
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = true
    } else {
      return true
    }
  }
  return false
};

