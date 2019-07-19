/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 *
 * https://leetcode.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (48.08%)
 * Likes:    620
 * Dislikes: 172
 * Total Accepted:    82.6K
 * Total Submissions: 171.6K
 * Testcase Example:  '2'
 *
 * Given a positive integer n, break it into the sum of at least two positive
 * integers and maximize the product of those integers. Return the maximum
 * product you can get.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: 2
 * Output: 1
 * Explanation: 2 = 1 + 1, 1 × 1 = 1.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 10
 * Output: 36
 * Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 * 
 * Note: You may assume that n is not less than 2 and not larger than 58.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/u013575812/article/details/51194637
var integerBreak = function(n) {
  // 预先划分的从0->10的结果
  let dp = [0, 1, 1, 2, 4, 6, 9, 12, 18, 27, 36]
  for (let i = 11; i <= n; i++) {
    dp[i] = 0
    for (let j = i - 1; j >= 1; j--) {
      // 后面的数都可以分成前面的两个数相乘
      // 取最大值
      dp[i] = Math.max(dp[i - j] * dp[j], dp[i])
    }
  }
  return dp[n]
};
