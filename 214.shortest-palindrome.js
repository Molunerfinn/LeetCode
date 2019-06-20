/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 *
 * https://leetcode.com/problems/shortest-palindrome/description/
 *
 * algorithms
 * Hard (27.39%)
 * Likes:    645
 * Dislikes: 80
 * Total Accepted:    75.7K
 * Total Submissions: 273.4K
 * Testcase Example:  '"aacecaaa"'
 *
 * Given a string s, you are allowed to convert it to a palindrome by adding
 * characters in front of it. Find and return the shortest palindrome you can
 * find by performing this transformation.
 * 
 * Example 1:
 * 
 * 
 * Input: "aacecaaa"
 * Output: "aaacecaaa"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "abcd"
 * Output: "dcbabcd"
 */
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  if (s.length <= 1) {
    return s
  }
  let left = 0
  let right = s.length - 1
  let end = right // 最长前缀的回文下标
  // 找前缀最长的回文串
  // 比如abbac最长的前缀回文串是abba
  // 然后只要补上c即可
  // 用end来表示前缀最长回文串的右边界下标
  // end+1到s的终点的字符串反转再拼接到前缀字符串即可
  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      left = 0 // 重新开始找最长的
      end--
      right = end
    }
  }
  let preStr = s.substr(end + 1, s.length).split('').reverse().join('')
  return preStr + s
};
