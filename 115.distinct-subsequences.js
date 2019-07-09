/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 *
 * https://leetcode.com/problems/distinct-subsequences/description/
 *
 * algorithms
 * Hard (35.28%)
 * Likes:    717
 * Dislikes: 37
 * Total Accepted:    108.8K
 * Total Submissions: 308.3K
 * Testcase Example:  '"rabbbit"\n"rabbit"'
 *
 * Given a string S and a string T, count the number of distinct subsequences
 * of S which equals T.
 * 
 * A subsequence of a string is a new string which is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, "ACE" is a
 * subsequence of "ABCDE" while "AEC" is not).
 * 
 * Example 1:
 * 
 * 
 * Input: S = "rabbbit", T = "rabbit"
 * Output: 3
 * Explanation:
 * 
 * As shown below, there are 3 ways you can generate "rabbit" from S.
 * (The caret symbol ^ means the chosen letters)
 * 
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: S = "babgbag", T = "bag"
 * Output: 5
 * Explanation:
 * 
 * As shown below, there are 5 ways you can generate "bag" from S.
 * (The caret symbol ^ means the chosen letters)
 * 
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 * ⁠ ^  ^^
 * babgbag
 * ⁠   ^^^
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (s === '' && t !== '') { // 如果s为空串，无法给t匹配
    return 0
  }
  if (t === '') {
    return 1
  }
  let sLen = s.length
  let tLen = t.length
  // dp[i][j] 表示 S的前i个数和T的前j个数的匹配数目
  let dp = new Array(sLen + 1).fill(0).map((item, index) => {
    let arr = new Array(tLen + 1).fill(0)
    arr[0] = 1 // dp[i][0] === 1
    return arr
  })
  // dp[1][1]才表示s[0]和t[0]的匹配次数
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < tLen + 1; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 如果s[i - 1]与t[j - 1]相等
        // 那么当前匹配次数可以等于d[i-1][j] (s[i-2]时就跟t[j-1]匹配了)
        // 加上s[i - 2]和j[i - 2]匹配的次数dp[i - 1][j - 1]
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
      } else {
        // 如果当前字母不匹配，那么只能看看之前有没有匹配，延续之前的次数
        // dp[i - 1][j]
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[sLen][tLen]
};
