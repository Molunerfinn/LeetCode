/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1) {
    return false
  }
  let hash = {}
  let length = nums.length
  for (let i = 0; i< length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i
    } else {
      let diff = i - hash[nums[i]]
      if (diff <= k) {
        return true
      }
      hash[nums[i]] = i
    }
  }
  return false
};
