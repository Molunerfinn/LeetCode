/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (30.41%)
 * Total Accepted:    330.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === '') {
    return true
  }
  let l = 0
  let r = s.length - 1
  s = s.toLocaleLowerCase()
  while (r > l) {
    while ((r > l) && !(/[0-9a-zA-Z]/.test(s[l]))) {
      l++
    }
    while ((r > l) && !(/[0-9a-zA-Z]/.test(s[r]))) {
      r--
    }
    if (s[l] !== s[r]) {
      return false
    }
    l++
    r--
  }
  return true
};
