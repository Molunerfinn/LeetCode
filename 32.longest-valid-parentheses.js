/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.66%)
 * Likes:    1906
 * Dislikes: 91
 * Total Accepted:    195K
 * Total Submissions: 759.7K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length === 0) {
    return 0
  }
  s = ')' + s // 这一步是为了让后面的位置相减能成立

  let dp = new Array(s.length).fill(0) // 以i为右下标时的最长匹配
  let result = 0

  for (let i  = 1; i < s.length; i++) {
    if (s[i] === ')') { // 只有右括号才能匹配
      if (s[i - 1 - dp[i - 1]] === '(') {
        dp[i] = dp[i - 1] + 2
      }
      dp[i] += dp[i - dp[i]] // 加上之前的最长匹配
    }
    result = Math.max(result, dp[i])
  }
  return result
};
