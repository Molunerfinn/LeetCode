/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.87%)
 * Total Accepted:    234K
 * Total Submissions: 521.4K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) {
    return []
  }
  let triangle = []
  for (let i = 1; i <= numRows; i++) {
    let tempResult = []
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        tempResult.push(1)
      } else {
        tempResult.push((triangle[i - 2][j - 1] + triangle[i - 2][j]))
      }
    }
    triangle.push(tempResult)
  }
  return triangle
};
