/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let length = nums.length
  if (length <= 1) {
    return false
  }
  let hash = {}
  for (let i = 0; i < length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i
    } else {
      let diff = Math.abs(i - hash[nums[i]]) // 如果该值存在，直接计算坐标差值
      if (diff <= k && diff !== 0) {
        if (0 <= t) {
          return true
        }
      }
      hash[nums[i]] = i
    }
    let j = i + 1 // 维护一个窗口，以当前为节点，最大不超过i+k 和 j <= length - 1
    while (j <= i + k && j <= length - 1) {
      let diff = Math.abs(nums[i] - nums[j])
      if (diff <= t) {
        return true
      }
      j++
    }
  }
  return false
};

