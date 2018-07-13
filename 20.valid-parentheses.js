/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (34.29%)
 * Total Accepted:    360.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') {
    return true
  } else {
    if (s.length % 2 !== 0) {
      return false
    }
    let leftArr = ['(', '{', '[']
    let rightArr = [')', '}', ']']
    let stack = []
    let strs = s.split('')
    for (let i in strs) {
      let rightIdx = rightArr.indexOf(strs[i])
      let leftIdx = leftArr.indexOf(strs[i])
      if (rightIdx === -1 && leftIdx === -1) {
        return false
      } else {
        if (leftIdx !== -1) {
          stack.push(leftIdx)
        }
        if (rightIdx !== -1) {
          if (rightIdx !== stack.pop()) {
            return false
          }
        }
      }
    }
    if (stack.length > 0) {
      return false
    }
    return true
  }
};
