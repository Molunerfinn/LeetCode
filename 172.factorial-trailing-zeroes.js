/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.27%)
 * Total Accepted:    149.6K
 * Total Submissions: 401.4K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * 
 * Note: Your solution should be in logarithmic time complexity.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // when 25(5*5) 50(2*5*5) 100 (2*5*5)...
  // zeros will up to 2
  let count = 0
  while (n > 0) {
    n = Math.floor(n / 5)
    count += n
  }
  return count
};
