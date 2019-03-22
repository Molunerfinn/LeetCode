/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (42.38%)
 * Total Accepted:    189.5K
 * Total Submissions: 447K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex < 0) {
    return []
  }
  let result = [1]
  for (let i = 0; i <= rowIndex; i++) {
    let current = []
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        current.push(1)
      } else {
        current.push(result[j] + result[j - 1])
      }
    }
    result = current
  }
  return result
};
