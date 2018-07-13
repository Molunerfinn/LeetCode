/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.75%)
 * Total Accepted:    294.9K
 * Total Submissions: 928.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''
  if (strs.length > 0) {
    let first = strs[0]
    for (let i = 0; i < first.length; i++) {
      let cut = first.slice(0, i + 1)
      if (strs.every(item => item.indexOf(cut) === 0)) {
        result = cut
      } else {
        break
      }
    }
  } else {
    return result
  }
  return result
};
