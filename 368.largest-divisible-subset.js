/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 *
 * https://leetcode.com/problems/largest-divisible-subset/description/
 *
 * algorithms
 * Medium (34.90%)
 * Likes:    568
 * Dislikes: 28
 * Total Accepted:    48.2K
 * Total Submissions: 137.5K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct positive integers, find the largest subset such that
 * every pair (Si, Sj) of elements in this subset satisfies:
 * 
 * Si % Sj = 0 or Sj % Si = 0.
 * 
 * If there are multiple solutions, return any subset is fine.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2] (of course, [1,3] will also be ok)
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,4,8]
 * Output: [1,2,4,8]
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (nums.length < 1) {
    return []
  }
  if (nums.length === 1) {
    return nums
  }
  // 思路一：先排序，排序完能拿到最小值
  // 只要当前数能除的尽前面的最小值，就可以放入当前的数组中
  nums = nums.sort((a, b) => a - b)
  let res = [nums[0]]
  let dp = [[nums[0]]]
  // dp的i值表示以当前i的值为结尾的最长匹配数组
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i]
    dp[i] = [current]
    let j = i
    j--
    while (j >= 0) {
      // 如果当前值除以前面的值已经是0
      if (current % nums[j] === 0) {
        // [4,8,10,240]
        // 必须往前不停找，因为有可能前面有更长的
        if (dp[j].length >= dp[i].length - 1) {
          dp[i] = [...dp[j], current]
        }
        if (dp[i].length > res.length) {
          res = dp[i]
        }
      }
      j--
    }
  }
  return res
};


// /**
//  * 判断是否符合题意
//  * @param {number} a 
//  * @param {number} b 
//  */
// function isDivisible (a, b) {
//   return (a % b === 0) || (b % a === 0)
// }
