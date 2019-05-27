/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.75%)
 * Likes:    620
 * Dislikes: 76
 * Total Accepted:    140.2K
 * Total Submissions: 400.8K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters that may be separated by a single space.
 * 
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let pHash = {}
  let sHash = {}
  let strArr = str.split(' ')
  if (strArr.length !== pattern.length) {
    return false
  }
  let length = pattern.length
  for (let i = 0; i < length; i++) {
    if (pHash[pattern[i]] === undefined && sHash[strArr[i]] === undefined) {
      pHash[pattern[i]] = i
      sHash[strArr[i]] = i
    } else if (pHash[pattern[i]] === sHash[strArr[i]]){
      pHash[pattern[i]] = i + 1
      sHash[strArr[i]] = i + 1
    } else {
      return false
    }
  }
  return true
};

