/*
 * @lc app=leetcode id=233 lang=javascript
 *
 * [233] Number of Digit One
 *
 * https://leetcode.com/problems/number-of-digit-one/description/
 *
 * algorithms
 * Hard (30.38%)
 * Likes:    177
 * Dislikes: 464
 * Total Accepted:    41.8K
 * Total Submissions: 137.5K
 * Testcase Example:  '13'
 *
 * Given an integer n, count the total number of digit 1 appearing in all
 * non-negative integers less than or equal to n.
 * 
 * Example:
 * 
 * 
 * Input: 13
 * Output: 6 
 * Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// http://zyy1217.com/2017/04/03/leetcode233/
var countDigitOne = function(n) {
  let count = 0
  let factor = 1
  let currentDigit = 0
  let hightN = 0
  let lowN = 0
  // cdigit表示为当前位的数
  // hightN表示当前位的前面的数。比如10234，当前为3时，hightN为102
  // lowN表示当前位的后面的数。比如10234，当前为3时，lowN为4
  // cdigit == 0, count = highN * factor.
  // cdigit == 1, count = highN * factor + lowN + 1.
  // cdigit > 1, count = (highN + 1) * factor.
  while (factor <= n) {
    currentDigit = Math.floor((n % (factor * 10)) / factor)
    hightN = Math.floor(n / (factor * 10))
    if (currentDigit === 0) {
      count += hightN * factor
    } else if (currentDigit === 1) {
      count += hightN * factor + lowN + 1
    } else if (currentDigit > 1) {
      count += (hightN + 1) * factor
    }
    // lowN在第一次循环的时候一定是0
    lowN += factor * currentDigit
    factor *= 10
  }
  return count
};
