/*
 * @lc app=leetcode id=357 lang=javascript
 *
 * [357] Count Numbers with Unique Digits
 *
 * https://leetcode.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (47.03%)
 * Likes:    258
 * Dislikes: 640
 * Total Accepted:    63.6K
 * Total Submissions: 134.9K
 * Testcase Example:  '2'
 *
 * Given a non-negative integer n, count all numbers with unique digits, x,
 * where 0 ≤ x < 10^n.
 * 
 * 
 * Example:
 * 
 * 
 * Input: 2
 * Output: 91 
 * Explanation: The answer should be the total numbers in the range of 0 ≤ x <
 * 100, 
 * excluding 11,22,33,44,55,66,77,88,99
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/qq508618087/article/details/51656771
var countNumbersWithUniqueDigits = function(n) {
  if (n < 1) {
    return 1
  }
  if (n === 1) {
    return 10
  }
  // 从两位数开始，第一位可以选1~9总共9位数字
  // 第二位开始，可以选的数字依次是9、8、7、6...1
  // 因为第二位开始可以从0~9中10个数字选，但是由于第一位选定了某一个数字之后，第二位只能选剩下的9个之一
  // 因此通项公式是 9*8*...*(9 - i + 2) // i表示当前是几位数
  if (n >= 10) n === 10 // 11位开始必定会有重复
  let count = 10
  let base = 9
  for (let i = 2; i <= n; i++) {
    base = base * (9 - i + 2)
    count += base
  }
  return count
};
