/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (29.91%)
 * Total Accepted:    218.1K
 * Total Submissions: 729.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * Example 2:
 * 
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let row = matrix.length
  if (row === 0) {
    return []
  }
  let col = matrix[0].length
  let results = []
  spiralOrderCore(matrix, 0, row - 1, 0, col - 1, results)
  return results
};

function spiralOrderCore (matrix, row1, row2, col1, col2, results) {
  if (row1 > row2 || col1 > col2 || row1 < 0 || row2 < 0 || col1 < 0 || col2 < 0) {
    return
  }
  fromLeft2Right(matrix, row1, col1, col2, results)
  fromTop2Bottom(matrix, col2, row1 + 1, row2, results)
  if (row1 !== row2) {
    fromRight2Left(matrix, row2, col2 - 1, col1, results)
  }
  if (col1 !== col2) {
    fromBottom2Top(matrix, col1, row2 - 1, row1 + 1, results)
  }
  spiralOrderCore(matrix, row1 + 1, row2 - 1, col1 + 1, col2 - 1, results)
}

function fromLeft2Right (matrix, row, col1, col2, results) {
  for (let i = col1; i <= col2; i++) {
    results.push(matrix[row][i])
  }
}

function fromTop2Bottom (matrix, col, row1, row2, results) {
  for (let i = row1; i <= row2; i++) {
    results.push(matrix[i][col])
  }
}

function fromRight2Left (matrix, row, col1, col2, results) {
  for (let i = col1; i >= col2; i--) {
    results.push(matrix[row][i])
  }
}

function fromBottom2Top (matrix, col, row1, row2, results) {
  for (let i = row1; i >= row2; i--) {
    results.push(matrix[i][col])
  }
}

