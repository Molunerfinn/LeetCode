/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.81%)
 * Total Accepted:    502K
 * Total Submissions: 1.9M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
// 思路：https://segmentfault.com/a/1190000003914228
var longestPalindrome = function(s) {
  if (s === '') {
    return ''
  }
  let ss = '#' + s.split('').join('#') + '#'
  let maxRight = 0
  let pos = 0
  let result = ''
  let maxLen = 0
  let length = ss.length
  let RL = new Array(length).fill(0)

  for (let i = 0; i < length; i++) {
    if (i < maxRight) { // 当i小于maxRight时，RL[i]取如下二者最小
      RL[i] = Math.min(RL[2 * pos - i], (maxRight - i))
    } else { // 否则RL[i]为1，并重新更新左右边界
      RL[i] = 1
    }
    // 当i和RL[i]相加不超过字符串总长而且相减不小于0，并且两头字符相等时，RL[i] ++
    while ((i + RL[i]) < length && (i - RL[i]) >= 0 && ss[i + RL[i]] === ss[i - RL[i]]) {
      RL[i] += 1
    }

    if (i + RL[i] - 1 > maxRight) {
      maxRight = i + RL[i] - 1
      pos = i
    }
    if (RL[i] > maxLen) { // 当前RL[i]大于最大值时说明找到一个目前最大的子串
      maxLen = RL[i]
      result = ss.slice(i - (maxLen - 1), i + (maxLen - 1)).split('#').join('') // 输出子串
    }
  }
  return result
};
