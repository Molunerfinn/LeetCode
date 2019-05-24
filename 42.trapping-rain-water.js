/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (43.02%)
 * Likes:    3518
 * Dislikes: 64
 * Total Accepted:    290.6K
 * Total Submissions: 674.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 3) {
    return 0
  }
  let length = height.length
  let left = new Array(length).fill(0)
  let right = new Array(length).fill(0)
  let result = 0

  // 任意一个位上的储水量
  // 等于该位左边最大值，与该位右边最大值，二者取最小（木桶效应）再减去本身高度即可
  // 两遍循环分别找左边最大值与右边最大值
  // 然后再做运算即可
  left[0] = height[0]
  for (let i = 1; i < length; i++) {
    left[i] = Math.max(left[i - 1], height[i])
  }
  right[length - 1] = height[length - 1]
  for (let i = length - 2; i > 0; i--) {
    right[i] = Math.max(right[i + 1], height[i])
  }
  for (let i = 1; i < length - 1; i++) {
    result += Math.min(left[i], right[i]) - height[i]
  }
  return result
};

