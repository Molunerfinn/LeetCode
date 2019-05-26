/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (49.54%)
 * Likes:    316
 * Dislikes: 112
 * Total Accepted:    111.1K
 * Total Submissions: 223.1K
 * Testcase Example:  '"a"\n"b"'
 *
 * 
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom 
 * note can be constructed from the magazines ; otherwise, it will return
 * false. 
 * 
 * 
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 * 
 * 
 * Note:
 * You may assume that both strings contain only lowercase letters.
 * 
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote) {
    return false
  }
  let mLength = magazine.length
  let rLength = ransomNote.length
  let hash = {}
  for (let i = 0; i < mLength; i++) {
    if (hash[magazine[i]] === undefined) {
      hash[magazine[i]] = 1
    } else {
      hash[magazine[i]] += 1
    }
  }
  for (let i = 0; i < rLength; i++) {
    if (hash[ransomNote[i]] !== undefined && hash[ransomNote[i]] > 0) {
      hash[ransomNote[i]]--
    } else {
      return false
    }
  }
  return true
};

// console.log(canConstruct('a', 'b'))
