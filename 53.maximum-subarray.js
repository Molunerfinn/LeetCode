/*
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (40.77%)
 * Total Accepted:    334.9K
 * Total Submissions: 821.3K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0]
  let temp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (temp[i - 1] < 0) { // 如果前一次的子序列相加是负数，那么实际上对后续已经是负作用，那么就重新开始累加。
      temp[i] = nums[i]
    } else {
      temp[i] = temp[i - 1] + nums[i]
    }
  }
  return Math.max(...temp)
};
