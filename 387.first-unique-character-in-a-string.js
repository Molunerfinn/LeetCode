/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.65%)
 * Likes:    977
 * Dislikes: 77
 * Total Accepted:    266.2K
 * Total Submissions: 532.5K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.length < 1) {
    return - 1
  }
  let length = s.length
  let letterHash = {}
  let result = -1
  for (let i = 0; i < length; i++) {
    if (letterHash[s[i]] === undefined) {
      letterHash[s[i]] = 1
    } else {
      letterHash[s[i]] += 1
    }
  }
  for (let i = 0; i < length; i++) {
    if (letterHash[s[i]] === 1) {
      return i
    }
  }
  return result
};
