/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (40.27%)
 * Likes:    928
 * Dislikes: 38
 * Total Accepted:    166.5K
 * Total Submissions: 404.3K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s.length === 1) {
    return [[s]]
  }
  let result = []
  let path = []
  partitionCore(s, path, result)
  return result
};

/**
 * 
 * @param {string} s 
 * @param {array} path
 * @param {array} result 
 */
function partitionCore (s, path, result) {
  if (s === '') {
    result.push(path.slice())
  }

  for (let i = 0; i < s.length; i++) {
    let preFix = s.substring(0, i + 1)
    // 只有当前缀是回文才需要进行回溯
    // 最差的情况就是每个字母都不相同，那么就会单个字母成为单个回文串
    // 比如aab -> a ab -> a a b-> aa b
    if (isPalindrome(preFix)) {
      path.push(preFix) // 是回文串的就丢到path里
      partitionCore(s.substring(i + 1), path, result)
      path.pop()
    }
  }
}

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
