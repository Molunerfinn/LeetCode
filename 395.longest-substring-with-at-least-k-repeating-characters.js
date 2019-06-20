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
  return longestSubstringCore(s, k, 0, s.length - 1)
};

function longestSubstringCore (s, k, start, end) {
  if (start > end || (end - start + 1 < k)) {
    return 0
  }
  let count = new Array(26).fill(0)
  // 统计每个字母出现的次数
  for (let i = start; i <= end; i++) {
    let pos = s[i].charCodeAt() - 97
    count[pos] += 1
  }

  for (let i = 0; i < 26; i++) {
    // 找到第一个次数大于0但是不足k的，将其左右进行二分查找
    if (count[i] > 0 && count[i] < k) {
      let pos = s.indexOf(String.fromCharCode(i + 97), start) // 从start开始的indexOf
      return Math.max(
        longestSubstringCore(s, k, pos + 1, end),
        longestSubstringCore(s, k, start, pos - 1)
      )
    }
  }

  return end - start + 1
}
