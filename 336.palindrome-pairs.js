/*
 * @lc app=leetcode id=336 lang=javascript
 *
 * [336] Palindrome Pairs
 *
 * https://leetcode.com/problems/palindrome-pairs/description/
 *
 * algorithms
 * Hard (30.60%)
 * Likes:    789
 * Dislikes: 105
 * Total Accepted:    70.9K
 * Total Submissions: 228K
 * Testcase Example:  '["abcd","dcba","lls","s","sssll"]'
 *
 * Given a list of unique words, find all pairs of distinct indices (i, j) in
 * the given list, so that the concatenation of the two words, i.e. words[i] +
 * words[j] is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: ["abcd","dcba","lls","s","sssll"]
 * Output: [[0,1],[1,0],[3,2],[2,4]] 
 * Explanation: The palindromes are
 * ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["bat","tab","cat"]
 * Output: [[0,1],[1,0]] 
 * Explanation: The palindromes are ["battab","tabbat"]
 * 
 * 
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let result = []
  let hash = {}
  let emptyArr = []
  // 先将每个单词翻转并存入hash表
  for (let i = 0; i < words.length; i++) {
    let tempStr = words[i].split('').reverse().join('')
    if (tempStr.length > 0) {
      hash[tempStr] = i
    } else { // 空字符串
      emptyArr.push(i)
    }
  }

  // 1. 第一个字符串是回文， 第二个字符串是空字符串， 比如 s1=“aba”, s2=""
  // 2. 第一个字符串和第二个字符是反过来的， 比如s1=“abcd”, s2=“dcba”
  // 3. 第一个个字符串的左边部分本身已经是回文， 然后右边部分和第二个字符串是回文， s1=“abagf”, s2=“fg”
  // 4. 第一个个字符串的右边部分本身已经是回文， 然后左边部分和第二个字符串是回文, s1=“gfaba”, s2=“fg”

  for (let i = 0; i < words.length; i++) {
    let len = words[i].length
    if (len > 0) {
      // 第一种情况
      if (isPalindrome(words[i])) { // 如果本身就是回文串
        // 本身就是回文串说明可以跟空串匹配
        for (let j = 0; j < emptyArr.length; j++) {
          result.push([i, emptyArr[j]])
          result.push([emptyArr[j], i])
        }
      }
      // } else {
        // 第二种情况
        if (hash[words[i]] !== undefined && hash[words[i]] !== i) {
          result.push([i, hash[words[i]]])
        }
        // 第三、四种情况
        for (let k = 0; k < words[i].length - 1; k++) {
          let leftStr = words[i].substring(0, k+1)
          let rightStr = words[i].substring(k+1)
          // 第三种情况
          if (isPalindrome(leftStr)) {
            if (hash[rightStr] !== undefined && hash[rightStr] !== i) {
              result.push([hash[rightStr], i])
            }
          }
          // 第四种情况
          if (isPalindrome(rightStr)) {
            if (hash[leftStr] !== undefined && hash[leftStr] !== i) {
              result.push([i, hash[leftStr]])
            }
          }
        }
      // }
    }
  }

  return result
};

/**
 * 判断一个字符串是否是回文串
 * @param {string} str 
 */
function isPalindrome(str) {
  let start = 0
  let end = str.length - 1
  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }
  return true
}
