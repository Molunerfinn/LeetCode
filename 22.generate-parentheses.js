/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.68%)
 * Total Accepted:    313.1K
 * Total Submissions: 582.9K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [
    [],
    [
      '()'
    ],
    [
      '(())',
      '()()'
    ]
  ]
  if (n <= 2) {
    return result[n]
  }
  // P[i] = “(“+P[i-j-1]+”)”+P[j] (j∈[0,n−1])
  // https://blog.csdn.net/hk2291976/article/details/51387883
  for (let i = 3; i <= n; i++) {
    let tempResult = []
    for (let j = 0; j < i; j++) {
      let result1 = result[i - j - 1]
      let result2 = result[j]
      if (result1.length === 0) {
        for (let item of result2) {
          item = '()' + item
          tempResult.push(item)
        }
      } else {
        for (let item of result1) {
          item = '(' + item + ')'
          if (result2.length !== 0) {
            for (let item2 of result2) {
              item2 = item + item2
              tempResult.push(item2)
            }
          } else {
            tempResult.push(item)
          }
        }
      }
    }
    result.push(tempResult)
  }
  return result[n]
};
console.log(generateParenthesis(4))
