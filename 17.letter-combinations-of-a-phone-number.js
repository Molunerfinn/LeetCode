/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.78%)
 * Total Accepted:    361K
 * Total Submissions: 885.3K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
let obj = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return []
  }
  return letterCombCore(digits, 0)
};

function letterCombCore (digits, index) {
  if ((digits.length - 1) === index) {
    return obj[digits[index]].split('')
  } else {
    let result = []
    let current = obj[digits[index]]
    let length = current.length
    for (let i = 0; i < length; i++) {
      let tempResult = letterCombCore(digits, index + 1).map(item => current[i] + item)
      result = result.concat(tempResult)
    }
    return result
  }
}

