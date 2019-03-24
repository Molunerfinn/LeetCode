/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (43.13%)
 * Total Accepted:    333.1K
 * Total Submissions: 772.3K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * 
 * 
 * 
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49. 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) {
    return 0
  }
  let leftIdx = 0
  let length = height.length
  let rightIdx = length - 1
  let max = 0
  while (leftIdx < rightIdx) {
    let leftValue = height[leftIdx]
    let rightValue = height[rightIdx]
    let count = 0
    if (leftValue < rightValue) {
      count = leftValue * (rightIdx - leftIdx)
      leftIdx++
    } else {
      count = rightValue * (rightIdx - leftIdx)
      rightIdx--
    }
    if (count > max) {
      max = count
    }
  }
  return max
};
