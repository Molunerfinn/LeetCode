/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (38.61%)
 * Likes:    720
 * Dislikes: 62
 * Total Accepted:    47K
 * Total Submissions: 121.6K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 
 * Find the length of the longest substring T of a given string (consists of
 * lowercase letters only) such that every character in T appears no less than
 * k times.
 * 
 * 
 * Example 1:
 * 
 * Input:
 * s = "aaabb", k = 3
 * 
 * Output:
 * 3
 * 
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s = "ababbc", k = 2
 * 
 * Output:
 * 5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is
 * repeated 3 times.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  // 如果s的长度还不如k
  // 直接返回0
  if (s.length < k) {
    return 0
  }
  let hash = {}
  for (let i = 0; i < s.length; i++ ){
    hash[s[i]] === undefined ? hash[s[i]] = 1 : hash[s[i]]++
  }
  // 如果某个字符个数小于k
  // 说明它一定不会出现在结果中
  // 所以直接将其排除
  // 查找该字符左边和右边的子串看看能否找出符合要求的
  for (let i in hash) {
    if (hash[i] < k) { // 如果一个字母出现次数小于k
      let startIndex = s.indexOf(i)
      let endIndex = startIndex + 1
      // 避免出现连续不符合要求的字母比如aaaabbbbbcccc
      while (s[endIndex] === i) {
        endIndex += 1
      }
      let leftStr = s.substring(0, s.indexOf(i))
      let rightStr = s.substring(endIndex, s.length)
      // 将其去除并比较除去该字符后的左右两串的最长
      return Math.max(longestSubstring(leftStr, k), longestSubstring(rightStr, k))
    }
  }
  // 如果字符串里所有字符都符合要求
  // 直接返回该字符串长度
  return s.length
};
