/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.07%)
 * Total Accepted:    843K
 * Total Submissions: 3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0 || s.length === 1) {
    return s.length
  }
  let max = 1
  let prevMax = 0
  let prevIdxArr = {}
  let base = 97 // charCode a -> 97
  let len = s.length
  for (let i = 0; i < len; i++) {
    let prevIdx = prevIdxArr[s[i].charCodeAt() - base]
    if (i === 0) {
      max = 1
      prevMax = 1
      prevIdxArr[s[i].charCodeAt() - base] = 0
    } else {
      if (prevIdx === undefined) { // 说明之前没出现过这个字母
        prevIdxArr[s[i].charCodeAt() - base] = i
        prevMax += 1
        if (prevMax > max) {
          max = prevMax
        }
      } else { // 说明之前出现过这个字母
        let diff = i - prevIdx
        if (diff > prevMax) {
          prevMax += 1
        } else {
          prevMax = diff
        }
        if (prevMax > max) {
          max = prevMax
        }
        prevIdxArr[s[i].charCodeAt() - base] = i
      }
    }
  }
  return max
};
