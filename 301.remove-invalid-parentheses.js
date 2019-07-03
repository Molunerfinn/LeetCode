/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 *
 * https://leetcode.com/problems/remove-invalid-parentheses/description/
 *
 * algorithms
 * Hard (39.54%)
 * Likes:    1460
 * Dislikes: 65
 * Total Accepted:    129.4K
 * Total Submissions: 327.3K
 * Testcase Example:  '"()())()"'
 *
 * Remove the minimum number of invalid parentheses in order to make the input
 * string valid. Return all possible results.
 * 
 * Note: The input string may contain letters other than the parentheses ( and
 * ).
 * 
 * Example 1:
 * 
 * 
 * Input: "()())()"
 * Output: ["()()()", "(())()"]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "(a)())()"
 * Output: ["(a)()()", "(a())()"]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: ")("
 * Output: [""]
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
// https://zxi.mytechroad.com/blog/searching/leetcode-301-remove-invalid-parentheses/
var removeInvalidParentheses = function(s) {
  let result = []
  let l = 0 // 多余的左括号的个数
  let r = 0 // 多余的右括号的个数
  // 思路是删除多余的右括号以及多余的左括号，删除完检查字符串是否符合要求
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      l++
    } else if (s[i] === ')') {
      if (l >= 1) {
        l--
      } else {
        r++
      }
    }
  }
  dfs(s, l, r, 0, result)
  return result
};


/**
 * 深度优先搜索，回溯
 * @param {string} s 
 * @param {number} l
 * @param {number} r
 * @param {number} start
 * @param {string[]} result 
 */
function dfs (s, l, r, start, result) {
  if (l === 0 && r === 0 && isValid(s)) {
    result.push(s)
  }
  for (let i = start; i < s.length; i++) {
    if (i !== start && (s[i] === s[i - 1])) {
      continue // 重复的括号就跳过
    }
    if (s[i] === '(' || s[i] === ')') {
      let temp = s.substr(0, i) + s.substr(i + 1, s.length)
      if (r > 0 && s[i] === ')') {
        dfs(temp, l, r - 1, i, result)
      } else if (l > 0 && s[i] === '(') {
        dfs(temp, l - 1, r, i, result)
      }
    }
  }
}

/**
 * 判断一个字符串里的括号对是否是合法的
 * @param {*} s 
 * @return {boolean}
 */
function isValid (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++
    } else if (s[i] === ')') {
      count--
    }
    if (count < 0) {
      return false
    }
  }
  return true
}
