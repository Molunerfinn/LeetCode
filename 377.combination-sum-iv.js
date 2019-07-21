/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 *
 * https://leetcode.com/problems/combination-sum-iv/description/
 *
 * algorithms
 * Medium (43.74%)
 * Likes:    840
 * Dislikes: 95
 * Total Accepted:    88.8K
 * Total Submissions: 202.9K
 * Testcase Example:  '[1,2,3]\n4'
 *
 * Given an integer array with all positive numbers and no duplicates, find the
 * number of possible combinations that add up to a positive integer target.
 * 
 * Example:
 * 
 * 
 * nums = [1, 2, 3]
 * target = 4
 * 
 * The possible combination ways are:
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 * 
 * Note that different sequences are counted as different combinations.
 * 
 * Therefore the output is 7.
 * 
 * 
 * 
 * 
 * Follow up:
 * What if negative numbers are allowed in the given array?
 * How does it change the problem?
 * What limitation we need to add to the question to allow negative numbers?
 * 
 * Credits:
 * Special thanks to @pbrother for adding this problem and creating all test
 * cases.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// https://blog.csdn.net/qq508618087/article/details/52064134
var combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1 // 当target为0时，可以什么数都不选，那么这种算1种情况
  // dp[i] 表示从1 -> 当前i的时候，能够组成当前i的数量是多少
  // dp[i] = sum(dp[i - nums[j]]) 前提是i - nums[j] >= 0
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[target]
};
