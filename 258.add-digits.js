/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (54.35%)
 * Likes:    474
 * Dislikes: 801
 * Total Accepted:    243.1K
 * Total Submissions: 447.2K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 * 
 * Example:
 * 
 * 
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // while (num >= 10) {
  //   let sum = 0
  //   while (num > 0) {
  //     sum += num % 10
  //     num = Math.floor(num / 10)
  //   }
  //   num = sum
  // }
  num = (num % 9 === 0 && num !== 0) ? 9 : (num % 9)
  return num
};
