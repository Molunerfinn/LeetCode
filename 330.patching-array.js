/*
 * @lc app=leetcode id=330 lang=javascript
 *
 * [330] Patching Array
 */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let result = 0
  let maxCover = 1 // [1, maxCover)
  let length = nums.length
  let i = 0
  while (maxCover <= n) {
    if (i < length && maxCover >= nums[i]) { // 如果还能遍历数组，并且maxCover大于nums[i]
      maxCover += nums[i] // 说明当前能cover住的范围是maxCover + nums[i]，此时result不需要加一（不需要打补丁）
      i++
    } else { // 如果数组长度不够，说明数组元素已经用完，并且maxCover还是无法cover住n，那么必须要给原数组打入maxCover这个数作为补丁了，所以result++
      result++
      maxCover += maxCover
    }
  }
  return result
};

