/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 *
 * https://leetcode.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (48.39%)
 * Likes:    1634
 * Dislikes: 50
 * Total Accepted:    74.2K
 * Total Submissions: 152.1K
 * Testcase Example:  '[3,1,5,8]'
 *
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a
 * number on it represented by array nums. You are asked to burst all the
 * balloons. If the you burst balloon i you will get nums[left] * nums[i] *
 * nums[right] coins. Here left and right are adjacent indices of i. After the
 * burst, the left and right then becomes adjacent.
 * 
 * Find the maximum coins you can collect by bursting the balloons wisely.
 * 
 * Note:
 * 
 * 
 * You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can
 * not burst them.
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * 
 * 
 * Example:
 * 
 * 
 * Input: [3,1,5,8]
 * Output: 167 
 * Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  -->
 * []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// https://www.cnblogs.com/grandyang/p/5006441.html
var maxCoins = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  let n = nums.length
  nums.unshift(1)
  nums.push(1)
  let dp = new Array(n + 2).fill(0)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 2).fill(0)
  }
  // 先计算一位数字的情况，再计算两位，再计算三位...
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i <= n - len + 1; i++) {
      let j = i + len - 1
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], nums[i - 1] * nums[k] * nums[j + 1] + dp[i][k - 1] + dp[k + 1][j])
      }
    }
  }
  return dp[1][n]
};

// @lc code=end

