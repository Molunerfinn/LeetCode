/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break/description/
 *
 * algorithms
 * Medium (35.93%)
 * Likes:    2432
 * Dislikes: 133
 * Total Accepted:    359.2K
 * Total Submissions: 999.5K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, determine if s can be segmented into a space-separated
 * sequence of one or more dictionary words.
 * 
 * Note:
 * 
 * 
 * The same word in the dictionary may be reused multiple times in the
 * segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet
 * code".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple
 * pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// https://blog.csdn.net/fuxuemingzhu/article/details/79368360
// var wordBreak = function(s, wordDict) {
//   let wordSet = new Set(wordDict)
//   let dp = new Array(s.length + 1).fill(false)
//   dp[0] = true // dp[0] 代表空字符串的情况
//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && wordSet.has(s.substring(j, i))) {
//         dp[i] = true
//       }
//     }
//   }
//   return dp[s.length]
// };

/**
 * 
 * @param {string} s 
 * @param {string[]} wordDict 
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let wordSet = new Set(wordDict)
  let dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true
      }
    }
  }
  return dp[s.length]
}

// function canBreak (s, wordSet) {
//   let dp = new Array(s.length + 1).fill(false)
//   dp[0] = true // dp[0] 代表空字符串的情况
//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && wordSet.has(s.substring(j, i))) {
//         dp[i] = true
//       }
//     }
//   }
//   return dp[s.length]
// }

// var wordBreak = function(s, wordDict) {
//   let wordSet = new Set(wordDict)
//   // let wordHash = {}
//   // for (let i of wordDict) {
//   //   wordHash[i] = true
//   // }
//   let res = []
//   if (canBreak(s, wordSet)) {
//     wordBreakCore(s, wordSet, wordDict, '', res)
//   }
//   return res
// };
