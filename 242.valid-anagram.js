/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.55%)
 * Likes:    695
 * Dislikes: 102
 * Total Accepted:    338.3K
 * Total Submissions: 648.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let sHash = new Array(26).fill(0)
  let tHash = new Array(26).fill(0)
  let length = s.length
  for (let i = 0; i < length; i++) {
    sHash[s[i].charCodeAt() - 97] ? sHash[s[i].charCodeAt() - 97]++ : sHash[s[i].charCodeAt() - 97] = 1
    tHash[t[i].charCodeAt() - 97] ? tHash[t[i].charCodeAt() - 97]++ : tHash[t[i].charCodeAt() - 97] = 1
  }
  for (let i = 0; i < 26; i++) {
    if (sHash[i] !== tHash[i]) {
      return false
    }
  }
  return true
};

