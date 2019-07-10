/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (28.19%)
 * Likes:    884
 * Dislikes: 2165
 * Total Accepted:    334.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '2.00000\n10'
 *
 * Implement pow(x, n), which calculates x raised to the power n (x^n).
 * 
 * Example 1:
 * 
 * 
 * Input: 2.00000, 10
 * Output: 1024.00000
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 2.10000, 3
 * Output: 9.26100
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 
 * Note:
 * 
 * 
 * -100.0 < x < 100.0
 * n is a 32-bit signed integer, within the range [−2^31, 2^31 − 1]
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // if (n === 1) return x
  // if (n === 0) return 1
  // if (n === -1) return 1.0 / x
  // let temp = myPow(x, Math.floor(n / 2))
  // if (n % 2 === 0) {
  //   return temp*temp
  // } else if (n > 0) {
  //   return temp*temp*x
  // }
  // return temp * temp / x
  return Math.pow(x, n)
};
