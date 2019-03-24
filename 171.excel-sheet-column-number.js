/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (50.98%)
 * Total Accepted:    210.3K
 * Total Submissions: 412.3K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 * 
 * For example:
 * 
 * 
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "A"
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "AB"
 * Output: 28
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "ZY"
 * Output: 701
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  if (s === '') {
    return 0
  }
  let len = s.length
  let result = 0
  let pow = 0
  for (let i = len - 1; i >= 0; i--) {
    result += ((getNumByCharCode(s[i])) * Math.pow(26, pow))
    pow++
  }
  return result
};

function getNumByCharCode (s) {
  return s.charCodeAt() - 64
}
