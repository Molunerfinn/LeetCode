/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  let preMax = nums[0]
  let preMin = nums[0]
  let max = nums[0]
  let length = nums.length

  // 记录以i结尾时的最大值与最小值
  // 当前的最大值等于已知的最大值、最小值和当前值的乘积，当前值，这三个数的最大值。
  // 当前的最小值等于已知的最大值、最小值和当前值的乘积，当前值，这三个数的最小值。
  // 结果是当前最大值与preMax比较后的最大值
  for (let i = 1; i < length; i++) {
    let tempMax = preMax
    let tempMin = preMin
    preMax = Math.max(tempMax * nums[i], nums[i], tempMin * nums[i])
    preMin = Math.min(tempMax * nums[i], nums[i], tempMin * nums[i])
    max = Math.max(preMax, max)
  }
  return max
};

