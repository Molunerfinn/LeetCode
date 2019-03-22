/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.59%)
 * Total Accepted:    165.4K
 * Total Submissions: 578.4K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) {
    return ''
  }
  if (n <= 26) {
    return String.fromCharCode(64 + n)
  }

  let pos = []

  while (n > 0) {
    let mod = n % 26
    pos.push(mod)
    n = Math.floor(n / 26)
  }

  let len = pos.length
  for (let i = 0; i < len; i++) {
    if (pos[i] === 0 && i !== (len - 1)) { // 0 -> 26
      pos[i] = 26
      if (i < len - 1) {
        if (pos[i + 1] !== 0) { // exp. [0,0,1] -> [26,26,0]
          pos[i + 1] = pos[i + 1] - 1
        }
      }
    }
  }

  pos = pos.reverse()
  if (pos[0] === 0) { // del first 0
    pos.splice(0, 1)
  }
  return pos.reduce((a, b) => {
    return a + String.fromCharCode(64 + b)
  }, '')
};