/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 *
 * https://leetcode.com/problems/is-subsequence/description/
 *
 * algorithms
 * Medium (46.98%)
 * Likes:    574
 * Dislikes: 131
 * Total Accepted:    91.6K
 * Total Submissions: 194.9K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 
 * Given a string s and a string t, check if s is subsequence of t.
 * 
 * 
 * 
 * You may assume that there is only lower case English letters in both s and
 * t. t is potentially a very long (length ~= 500,000) string, and s is a short
 * string (
 * 
 * 
 * A subsequence of a string is a new string which is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, "ace" is a
 * subsequence of "abcde" while "aec" is not).
 * 
 * 
 * Example 1:
 * s = "abc", t = "ahbgdc"
 * 
 * 
 * Return true.
 * 
 * 
 * Example 2:
 * s = "axc", t = "ahbgdc"
 * 
 * 
 * Return false.
 * 
 * 
 * Follow up:
 * If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you
 * want to check one by one to see if T has its subsequence. In this scenario,
 * how would you change your code?
 * 
 * Credits:Special thanks to @pbrother for adding this problem and creating all
 * test cases.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === '') {
    return true
  }
  let sLength = s.length
  let tLength = t.length
  // 遍历一次，从左到右
  // 沿着s从左到右往t里找匹配的字母
  // 取两个下标，sLeft和tLeft
  // 当sLeft的值等于tLeft，count++
  // 然后tLeft和sLeft++，直到匹配到下一个，或者t遍历完
  let sLeft = 0
  let tLeft = 0
  let count = 0
  while (tLeft < tLength) {
    if (s[sLeft] === t[tLeft]) {
      count++
      sLeft++
      if (sLeft > sLength) {
        return false
      }
      if (count === sLength) {
        return true
      }
    }
    tLeft++
  }
  return false
};
