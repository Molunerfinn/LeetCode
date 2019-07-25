/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 *
 * https://leetcode.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (27.74%)
 * Likes:    1044
 * Dislikes: 256
 * Total Accepted:    166.1K
 * Total Submissions: 598.6K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, add spaces in s to construct a sentence where each word is
 * a valid dictionary word. Return all such possible sentences.
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
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// https://www.cnblogs.com/grandyang/p/4257740.html
var wordBreak = function(s, wordDict) {
  let wordSet = new Set(wordDict)
  let res = []
  // 先行判断能否截断 #139
  if (canBreak(s, wordSet)) {
    wordBreakCore(s, wordDict, '', res)
  }
  return res
};

/**
 * 
 * @param {string} s 
 * @param {Set} wordSet 
 * @param {string} wordDict 
 * @param {string} path 
 * @param {string[]} res 
 */
function wordBreakCore (s, wordDict, path, res) {
  if (s === '') {
    res.push(path.trim())
    return
  }

  for (let i of wordDict) {
    let currentStr = s.substr(0, i.length)
    if (currentStr === i) {
      let restStr = s.substr(i.length, s.length)
      wordBreakCore(restStr, wordDict, `${path} ${currentStr}`, res)
    }
  }
}


// #139的解法
function canBreak (s, wordSet) {
  let dp = new Array(s.length + 1).fill(false)
  dp[0] = true // dp[0] 代表空字符串的情况
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true
      }
    }
  }
  return dp[s.length]
}
