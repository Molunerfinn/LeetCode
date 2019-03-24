/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.74%)
 * Total Accepted:    357.3K
 * Total Submissions: 690.1K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let count = 1
  let freqNum = nums[0]
  let len = nums.length
  for (let i = 1; i < len; i++) {
    if (count === 0) {
      count = 1
      freqNum = nums[i]
    } else if (freqNum === nums[i]) {
      count++
    } else {
      count--
    }
  }
  return freqNum
};
