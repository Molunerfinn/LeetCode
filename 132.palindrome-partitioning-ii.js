/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 *
 * https://leetcode.com/problems/palindrome-partitioning-ii/description/
 *
 * algorithms
 * Hard (27.57%)
 * Likes:    585
 * Dislikes: 23
 * Total Accepted:    104.3K
 * Total Submissions: 378.2K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using
 * 1 cut.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  if (isPalindrome(s)) {
    return 0
  }
  let dp = new Array(s.length).fill(0)
  for (let i in dp) {
    dp[i] = new Array(s.length).fill(false)
  }
  let cut = new Array(s.length).fill(0)
  for (let i = 0; i < s.length; i++) {
    cut[i] = i // 到第i处时最多分割i次
    for (let j = 0; j <= i; j++) {
      // 如果s[j,i]是回文串
      if (s[j] === s[i] && (i - j <= 1 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        // 如果s[0,j]是回文串
        if (j === 0) {
          cut[i] = 0
        } else {
          // 否则cut[i]的值为当前cut[i]与cut[j - 1] + 1的最小值
          cut[i] = Math.min(cut[i], cut[j - 1] + 1)
        }
      }
    }
  }
  return cut[s.length - 1]
};


/**
 * 判断是否是回文串
 * @param {string} s 
 */
function isPalindrome (s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] === s[end]) {
      start++
      end--
    } else {
      return false
    }
  }
  return true
}

