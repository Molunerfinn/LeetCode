/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 *
 * https://leetcode.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (42.19%)
 * Likes:    1696
 * Dislikes: 142
 * Total Accepted:    207K
 * Total Submissions: 481.2K
 * Testcase Example:  '12'
 *
 * Given a positive integer n, find the least number of perfect square numbers
 * (for example, 1, 4, 9, 16, ...) which sum to n.
 * 
 * Example 1:
 * 
 * 
 * Input: n = 12
 * Output: 3 
 * Explanation: 12 = 4 + 4 + 4.
 * 
 * Example 2:
 * 
 * 
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 */
/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/happyaaaaaaaaaaa/article/details/51584790
var numSquares = function(n) {
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i * i <= n; i++) {
    dp[i * i] = 1 // 平方数的话只需要自己就行
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; i + j * j <= n; j++) {
      // 对于每个完美平方数
      // 都是由一个普通数+一个平方数得到的
      dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j])
    }
  }
  return dp[n]
};

