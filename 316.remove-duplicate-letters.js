/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 *
 * https://leetcode.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Hard (32.38%)
 * Likes:    702
 * Dislikes: 76
 * Total Accepted:    56.4K
 * Total Submissions: 173.9K
 * Testcase Example:  '"bcabc"'
 *
 * Given a string which contains only lowercase letters, remove duplicate
 * letters so that every letter appear once and only once. You must make sure
 * your result is the smallest in lexicographical order among all possible
 * results.
 * 
 * Example 1:
 * 
 * 
 * Input: "bcabc"
 * Output: "abc"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbacdcbc"
 * Output: "acdb"
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let hash = {}
  // 将字母出现次数存下来
  for (let i of s) {
    hash[i] ? hash[i]++ : hash[i] = 1
  }
  let visited = {}
  let result = []
  let length = s.length

  for (let i = 0; i < length; i++) {
    // 如果当前的字母用过了，就跳过
    if (visited[s[i]]) {
      // 同时将字母出现次数减一
      hash[s[i]]--
      continue
    }
    // 如果当前的字母比前面最后一个字母小
    // 并且前面的最后一个字母在后面会出现
    // 那么就删掉前面的字母
    while (result[result.length - 1] > s[i] && hash[result[result.length - 1]] > 0) {
      let popStr = result.pop()
      // 将访问置为0
      visited[popStr] = 0
    }
    result.push(s[i])
    hash[s[i]]--
    visited[s[i]] = 1
  }
  return result.join('')
};

