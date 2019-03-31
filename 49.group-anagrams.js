/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (45.46%)
 * Total Accepted:    310.5K
 * Total Submissions: 683K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * Note:
 * 
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * 
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) {
    return []
  }
  let hashMap = new Map()
  let result = []
  let length = strs.length
  for (let i = 0; i < length; i++) {
    let tempArr = strs[i].split('').sort().join('')
    if (hashMap.has(tempArr)) {
      let currentResult = hashMap.get(tempArr)
      currentResult.push(strs[i])
      hashMap.set(tempArr, currentResult)
    } else {
      let currentResult = [strs[i]]
      hashMap.set(tempArr, currentResult)
    }
  }
  for (let [key, value] of hashMap) {
    result.push(value)
  }
  return result
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

