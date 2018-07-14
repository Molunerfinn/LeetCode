/*
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (39.89%)
 * Total Accepted:    264K
 * Total Submissions: 661.9K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let flag = false
  let length = digits.length - 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1 || flag) {
      digits[i] = digits[i] + 1
      if (digits[i] === 10) {
        digits[i] = 0
        flag = true
      } else {
        flag = false
      }
    }
  }
  if (digits[0] === 0) digits.unshift(1)
  return digits
};
