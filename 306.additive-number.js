/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 *
 * https://leetcode.com/problems/additive-number/description/
 *
 * algorithms
 * Medium (28.47%)
 * Likes:    215
 * Dislikes: 312
 * Total Accepted:    41.8K
 * Total Submissions: 146.8K
 * Testcase Example:  '"112358"'
 *
 * Additive number is a string whose digits can form additive sequence.
 * 
 * A valid additive sequence should contain at least three numbers. Except for
 * the first two numbers, each subsequent number in the sequence must be the
 * sum of the preceding two.
 * 
 * Given a string containing only digits '0'-'9', write a function to determine
 * if it's an additive number.
 * 
 * Note: Numbers in the additive sequence cannot have leading zeros, so
 * sequence 1, 2, 03 or 1, 02, 3 is invalid.
 * 
 * Example 1:
 * 
 * 
 * Input: "112358"
 * Output: true 
 * Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5,
 * 8. 
 * 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "199100199"
 * Output: true 
 * Explanation: The additive sequence is: 1, 99, 100, 199. 
 * 1 + 99 = 100, 99 + 100 = 199
 * 
 * Follow up:
 * How would you handle overflow for very large input integers?
 */
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  return dfs(num, [])
};

/**
 * 
 * @param {string} num 
 * @param {number[]} res 
 */
// https://blog.csdn.net/fuxuemingzhu/article/details/80661715
function dfs (num, res) {
  let length = res.length
  if (length >= 3 && (res[length - 1] !== res[length - 2] + res[length - 3])) {
    return false
  }
  if (num === '' && length >= 3) {
    // 只有当数组符合要求并且长度大于等于3时才为true
    return true
  }
  for (let i = 0; i < num.length; i++) {
    let currentNumber = num.substring(0, i + 1)
    if (currentNumber[0] === '0' && currentNumber.length !== 1) {
      continue
    }
    let tempArr = [...res, parseInt(currentNumber)]
    if (dfs(num.substring(i + 1, num.length), tempArr)) {
      return true
    }
  }
  return false
}
