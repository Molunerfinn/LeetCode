/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.38%)
 * Total Accepted:    438K
 * Total Submissions: 1.8M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num2Str = '' + x
  let result = num2Str.split('').reverse()
  if (num2Str[0] !== '-') {
    result = result.join('') - 0
    return result > 2 ** 31 - 1 ? 0 : result
  } else {
    result.pop()
    result = -(result.join('') - 0)
    return result < -(2 ** 31) ? 0 : result
  }
};
